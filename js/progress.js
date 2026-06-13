const Progress = {
  STORAGE_KEY: 'gk_familie_migration_progress',
  VERSION: 1,

  // Anzahl Lektionen dynamisch aus LESSONS-Array.
  // Vermeidet hardcoded Wert beim Kopieren auf andere Lernprogramme
  // und passt sich automatisch an, wenn Lektionen ergaenzt werden.
  getTotalLessons() {
    return (typeof LESSONS !== 'undefined' && Array.isArray(LESSONS)) ? LESSONS.length : 1;
  },

  // Standard-Zustand: alle Lektionen auf not_started, letzte Lektion = 1.
  // Iteriert ueber LESSONS, damit auch nicht-zusammenhaengende IDs
  // (z.B. id 30 fuer Spannungsteiler) sauber angelegt werden.
  createDefault() {
    const data = { version: this.VERSION, lessons: {}, lastLesson: 1 };
    if (typeof LESSONS !== 'undefined' && Array.isArray(LESSONS)) {
      LESSONS.forEach(l => { data.lessons[l.id] = { status: 'not_started' }; });
    }
    return data;
  },

  // Aus localStorage laden.
  // Fallback auf Default bei: fehlendem Eintrag, kaputtem JSON, Version-Mismatch.
  load() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (!raw) {
        const data = this.createDefault();
        this.save(data);
        return data;
      }
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.version !== this.VERSION) {
        const data = this.createDefault();
        this.save(data);
        return data;
      }
      return parsed;
    } catch (e) {
      // JSON.parse-Fehler oder sonstiges Problem -> sauberer Neustart
      const data = this.createDefault();
      this.save(data);
      return data;
    }
  },

  // Aktuellen Zustand in localStorage schreiben
  save(data) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  },

  // Status einer Lektion abfragen: 'not_started' | 'in_progress' | 'completed'
  getStatus(lessonId) {
    const data = this.load();
    const lesson = data.lessons[lessonId];
    return lesson ? lesson.status : 'not_started';
  },

  // Status einer Lektion setzen und direkt speichern
  setStatus(lessonId, status) {
    const data = this.load();
    if (!data.lessons[lessonId]) {
      data.lessons[lessonId] = {};
    }
    data.lessons[lessonId].status = status;
    this.save(data);
  },

  // Letzte besuchte Lektion auslesen
  getLastLesson() {
    const data = this.load();
    return data.lastLesson;
  },

  // Letzte besuchte Lektion setzen und speichern
  setLastLesson(lessonId) {
    const data = this.load();
    data.lastLesson = lessonId;
    this.save(data);
  },

  // Fortschritt komplett zuruecksetzen
  reset() {
    localStorage.removeItem(this.STORAGE_KEY);
  },

  // Prozent der abgeschlossenen Lektionen ueber alle LESSONS-Eintraege.
  // start/end werden als alte API-Parameter ignoriert (Range-Splits
  // werden nicht mehr genutzt) — Zaehlung laeuft jetzt ueber LESSONS,
  // damit auch nicht-zusammenhaengende IDs (id 30) mitzaehlen.
  getCompletionPercent(start, end) {
    if (typeof LESSONS === 'undefined' || !Array.isArray(LESSONS) || LESSONS.length === 0) return 0;
    const data = this.load();
    let completed = 0;
    LESSONS.forEach(l => {
      if (data.lessons[l.id] && data.lessons[l.id].status === 'completed') {
        completed++;
      }
    });
    return Math.round((completed / LESSONS.length) * 100);
  },

  // ===================== Spaced Repetition (Leitner-System) =====================
  // Verteiltes Wiederholen: Eine abgeschlossene Lektion wandert durch fuenf
  // Karteikasten-Faecher mit wachsenden Abstaenden. Jede erfolgreiche faellige
  // Wiederholung schiebt sie ins naechste Fach. So konzentriert sich das Ueben
  // automatisch auf das, was noch nicht sitzt.
  // Die SR-Felder (box, dueDate, lastReviewed) werden additiv pro Lektion
  // ergaenzt — KEIN VERSION-Bump noetig, damit bestehender Fortschritt erhalten bleibt.
  INTERVALS: [1, 3, 7, 16, 35], // Tage bis zur naechsten Wiederholung je Fach (1..5)

  // Heutiges Datum als YYYY-MM-DD (tagesgenau, ohne Uhrzeit/Zeitzone-Tuecken).
  _today() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  },

  // Datum-String (YYYY-MM-DD) um n Tage verschieben, wieder als YYYY-MM-DD.
  _addDays(dateStr, n) {
    const d = new Date(dateStr + 'T00:00:00');
    d.setDate(d.getDate() + n);
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  },

  // Ist dieses Faelligkeitsdatum heute oder schon ueberschritten?
  // YYYY-MM-DD-Strings sind gleich lang und gepaddet -> lexikografischer Vergleich genuegt.
  _isDue(dateStr) {
    return !!dateStr && dateStr <= this._today();
  },

  // Eine Lektion wurde komplett (alle Uebungen richtig) geloest.
  // Die Selbsteinschaetzung des Lernenden (confidence) steuert das Leitner-Fach
  // — assessment-capable learning (Hattie d=1,44): der Schueler bewertet selbst,
  // wie sicher er sich fuehlt, und steuert damit den Wiederholungsrhythmus.
  //   'low'    (noch unsicher) -> zurueck auf Fach 1 (morgen wieder)
  //   'medium' (geht so)       -> bleibt im aktuellen Fach (Erstabschluss: Fach 1)
  //   'high'   (sitzt sicher)  -> ein Fach weiter (Erstabschluss: Fach 2, ueberspringt Fach 1)
  // Ohne confidence (Fallback): wie 'medium'.
  // Das naechste Faelligkeitsdatum ergibt sich aus dem Intervall des neuen Fachs.
  recordCompletion(lessonId, confidence) {
    const data = this.load();
    if (!data.lessons[lessonId]) data.lessons[lessonId] = { status: 'completed' };
    const lesson = data.lessons[lessonId];
    const isFirstTime = !lesson.box;
    const currentBox = lesson.box || 0;

    let newBox;
    if (confidence === 'low') {
      newBox = 1;
    } else if (confidence === 'high') {
      newBox = isFirstTime ? 2 : currentBox + 1;
    } else { // 'medium' oder kein Wert
      newBox = isFirstTime ? 1 : currentBox;
    }
    // In gueltigen Fachbereich 1..5 zwingen
    newBox = Math.max(1, Math.min(newBox, this.INTERVALS.length));

    lesson.box = newBox;
    lesson.dueDate = this._addDays(this._today(), this.INTERVALS[newBox - 1]);
    lesson.lastReviewed = this._today();
    if (confidence) lesson.confidence = confidence;
    this.save(data);
  },

  // Alle heute (oder frueher) faelligen Lektionen, am laengsten ueberfaellig zuerst.
  getDueLessons() {
    const data = this.load();
    const today = this._today();
    const due = [];
    Object.keys(data.lessons).forEach(id => {
      const l = data.lessons[id];
      if (l.box && l.box > 0 && l.dueDate && l.dueDate <= today) {
        due.push({ id: parseInt(id, 10), box: l.box, dueDate: l.dueDate });
      }
    });
    due.sort((a, b) => (a.dueDate < b.dueDate ? -1 : (a.dueDate > b.dueDate ? 1 : 0)));
    return due;
  },

  // SR-Info einer einzelnen Lektion (fuer Sidebar-Badges). null = nicht im SR-System.
  getReviewInfo(lessonId) {
    const data = this.load();
    const l = data.lessons[lessonId];
    if (!l || !l.box) return null;
    return { box: l.box, dueDate: l.dueDate, due: this._isDue(l.dueDate) };
  }
};
