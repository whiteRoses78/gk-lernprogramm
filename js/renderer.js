/**
 * Renderer fuer das Englisch-KA4-Lernprogramm.
 * Baut die Sidebar, den Fortschrittsbalken, die "heute faellig"-Box,
 * den Selbst-Check (Spaced Repetition) und das 3-Phasen-Lektionslayout
 * (Erklaerung, Beispiel, Uebung).
 *
 * Lektionsdaten werden aus dem globalen Register window.LESSON_DATA gelesen,
 * in das jede js/lessons-*.js-Datei sich selbst eintraegt:
 *   window.LESSON_DATA = (window.LESSON_DATA || []).concat([...]);
 */
const Renderer = {

  /**
   * "Heute zur Wiederholung faellig"-Sektion rendern (Spaced Repetition).
   * Zeigt die heute faelligen Lektionen als klickbare Buttons.
   */
  renderReviewDue() {
    const box = document.getElementById('review-due');
    if (!box) return;
    const due = Progress.getDueLessons();
    if (due.length === 0) {
      box.innerHTML = '';
      box.style.display = 'none';
      return;
    }
    box.style.display = '';

    const heading = due.length === 1
      ? '1 Lektion ist heute zur Wiederholung fällig'
      : due.length + ' Lektionen sind heute zur Wiederholung fällig';

    let html = '<div class="review-due-card">'
      + '<div class="review-due-head"><span class="review-due-icon">↻</span> ' + heading + '</div>'
      + '<p class="review-due-hint">Verteiltes Wiederholen festigt das Gelernte. Klick auf eine Lektion und mach ihre Übungen erneut.</p>'
      + '<div class="review-due-list">';
    due.forEach(item => {
      const meta = LESSONS.find(l => l.id === item.id);
      const title = meta ? meta.title : 'Lektion ' + item.id;
      const pos = LESSONS.findIndex(l => l.id === item.id) + 1;
      html += '<button class="review-due-btn" data-lesson-id="' + item.id + '">'
        + '<span class="review-due-num">Lektion ' + pos + '</span> ' + title
        + ' <span class="review-due-box">Fach ' + item.box + '</span></button>';
    });
    html += '</div></div>';
    box.innerHTML = html;

    box.querySelectorAll('.review-due-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        navigateToLesson(parseInt(btn.dataset.lessonId, 10));
      });
    });
  },

  /**
   * Selbst-Check nach Lektionsabschluss (Assessment-Capable Learning, Hattie d=1,44).
   * Die Selbsteinschaetzung steuert ueber Progress.recordCompletion das Leitner-Fach.
   */
  renderSelfCheck(lessonId, container) {
    const existing = container.querySelector('.self-check');
    if (existing) existing.remove();

    const wrapper = document.createElement('div');
    wrapper.className = 'self-check';

    const head = document.createElement('div');
    head.className = 'self-check-head';
    head.textContent = 'Geschafft! Wie sicher fühlst du dich jetzt mit dieser Lektion?';
    wrapper.appendChild(head);

    const hint = document.createElement('p');
    hint.className = 'self-check-hint';
    hint.textContent = 'Sei ehrlich zu dir selbst — deine Einschätzung steuert, wann die Lektion zur Wiederholung kommt.';
    wrapper.appendChild(hint);

    const btnRow = document.createElement('div');
    btnRow.className = 'self-check-btns';
    const options = [
      { conf: 'low',    label: 'Noch unsicher', sub: 'morgen nochmal' },
      { conf: 'medium', label: 'Geht so',       sub: 'bald wieder' },
      { conf: 'high',   label: 'Sitzt sicher',  sub: 'später wieder' }
    ];
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'self-check-btn self-check-' + opt.conf;
      btn.innerHTML = '<span class="sc-label">' + opt.label + '</span><span class="sc-sub">' + opt.sub + '</span>';
      btn.addEventListener('click', () => {
        Progress.recordCompletion(lessonId, opt.conf);
        const info = Progress.getReviewInfo(lessonId);
        const days = info ? Progress.INTERVALS[info.box - 1] : null;
        const dayText = days === 1 ? 'morgen' : 'in ' + days + ' Tagen';
        wrapper.innerHTML = '<div class="self-check-done">✓ Gespeichert! Diese Lektion kommt '
          + dayText + ' zur Wiederholung <span class="sc-box">(Fach ' + (info ? info.box : '?') + ')</span>.</div>';
        Renderer.renderSidebar(LESSONS);
      });
      btnRow.appendChild(btn);
    });
    wrapper.appendChild(btnRow);
    container.appendChild(wrapper);
  },

  /**
   * Sidebar mit Lektionsliste aufbauen.
   */
  renderSidebar(lessons) {
    const modules = new Set(lessons.map(l => l.module));
    modules.forEach(mod => {
      const list = document.getElementById('lesson-list-' + mod);
      if (list) list.innerHTML = '';
    });

    lessons.forEach(lesson => {
      const li = document.createElement('li');
      li.dataset.lessonId = lesson.id;

      const status = Progress.getStatus(lesson.id);

      if (status === 'completed') {
        li.classList.add('completed');
        li.textContent = `✓ ${lesson.title}`;
      } else if (status === 'in_progress') {
        li.classList.add('in-progress');
        li.textContent = lesson.title;
      } else {
        li.classList.add('not-started');
        li.textContent = lesson.title;
      }

      const review = Progress.getReviewInfo(lesson.id);
      if (review && review.due) {
        li.classList.add('review-due-item');
        const badge = document.createElement('span');
        badge.className = 'review-badge';
        badge.textContent = '↻';
        badge.title = 'Heute zur Wiederholung fällig';
        li.appendChild(badge);
      }

      const list = document.getElementById('lesson-list-' + lesson.module);
      if (list) list.appendChild(li);
    });
  },

  /**
   * Fortschrittsbalken + Label aktualisieren.
   */
  renderProgressBar() {
    const total = Progress.getTotalLessons();
    const percent = Progress.getCompletionPercent(1, total);
    const bar = document.getElementById('progress-bar');
    bar.style.width = percent + '%';

    const label = document.getElementById('progress-label');
    if (label) {
      const data = Progress.load();
      let completed = 0;
      LESSONS.forEach(l => {
        if (data.lessons[l.id] && data.lessons[l.id].status === 'completed') {
          completed++;
        }
      });
      label.textContent = percent + ' % – ' + completed + ' von ' + total + ' Lektionen abgeschlossen';
    }
  },

  /**
   * Lektionsinhalt rendern: 3-Phasen-Layout (Erklaerung, Beispiel, Uebung).
   */
  renderLesson(id) {
    const container = document.getElementById('lesson-container');

    // Lektionsdaten aus dem globalen Register suchen
    const allData = (typeof LESSON_DATA !== 'undefined' && Array.isArray(LESSON_DATA)) ? LESSON_DATA : [];
    const lessonData = allData.find(l => l.id === id);

    const lessonMeta = LESSONS.find(l => l.id === id);
    const title = lessonMeta ? lessonMeta.title : 'Unbekannte Lektion';

    if (!lessonData) {
      container.innerHTML = `<h1>Lektion ${id}: ${title}</h1>
        <p>Inhalt wird noch erstellt...</p>`;
      return;
    }

    const position = LESSONS.findIndex(l => l.id === id) + 1;
    container.innerHTML = `<h1>Lektion ${position}: ${lessonData.title}</h1>`;

    // Phase-Tabs — nur die Phasen, die es in dieser Lektion gibt.
    const phases = [];
    if (lessonData.explanation) phases.push({ key: 'explanation', label: 'Erklärung' });
    if (lessonData.example) phases.push({ key: 'example', label: 'Beispiel' });
    if (lessonData.exercises && lessonData.exercises.length > 0) phases.push({ key: 'exercises', label: 'Übung' });

    const tabsDiv = document.createElement('div');
    tabsDiv.className = 'phase-tabs';
    phases.forEach((phase, i) => {
      const btn = document.createElement('button');
      btn.className = 'phase-tab' + (i === 0 ? ' active' : '');
      btn.dataset.phase = phase.key;
      btn.textContent = phase.label;
      tabsDiv.appendChild(btn);
    });
    container.appendChild(tabsDiv);

    // Phase: Erklaerung
    if (lessonData.explanation) {
      const explanationSection = document.createElement('section');
      explanationSection.className = 'phase explanation active';
      explanationSection.id = 'phase-explanation';
      explanationSection.innerHTML = lessonData.explanation.html;
      container.appendChild(explanationSection);
    }

    // Phase: Beispiel
    if (lessonData.example) {
      const exampleSection = document.createElement('section');
      exampleSection.className = 'phase example' + (phases[0].key === 'example' ? ' active' : '');
      exampleSection.id = 'phase-example';

      const h2 = document.createElement('h2');
      h2.textContent = lessonData.example.title;
      exampleSection.appendChild(h2);

      lessonData.example.steps.forEach((step, i) => {
        const details = document.createElement('details');
        details.className = 'example-step';
        if (i === 0) details.open = true;
        const summary = document.createElement('summary');
        summary.textContent = `Schritt ${i + 1}: ${step.label}`;
        details.appendChild(summary);
        const content = document.createElement('div');
        content.className = 'step-content';
        content.innerHTML = step.html;
        details.appendChild(content);
        exampleSection.appendChild(details);
      });
      container.appendChild(exampleSection);
    }

    // Phase: Uebungen
    if (lessonData.exercises && lessonData.exercises.length > 0) {
      const exercisesSection = document.createElement('section');
      exercisesSection.className = 'phase exercises' + (phases[0].key === 'exercises' ? ' active' : '');
      exercisesSection.id = 'phase-exercises';
      container.appendChild(exercisesSection);

      // Intro-Text fuer die Uebungsphase (optional)
      if (lessonData.exercisesIntro) {
        const intro = document.createElement('div');
        intro.className = 'exercises-intro';
        intro.innerHTML = lessonData.exercisesIntro;
        exercisesSection.appendChild(intro);
      }

      const totalExercises = lessonData.exercises.length;
      let completedCount = 0;

      lessonData.exercises.forEach((exercise, index) => {
        const exerciseHeader = document.createElement('div');
        exerciseHeader.className = 'exercise-header';
        exerciseHeader.textContent = 'Übung ' + (index + 1) + ' von ' + totalExercises;
        exercisesSection.appendChild(exerciseHeader);

        // MC deterministisch shufflen (Position-Bias vermeiden)
        const renderedExercise = exercise.type === 'multiple-choice'
          ? Exercises.shuffleMc(exercise, 'L' + id + 'E' + index)
          : exercise;

        Exercises.render(renderedExercise, exercisesSection, () => {
          completedCount++;
          exerciseHeader.classList.add('completed');
          if (completedCount === totalExercises) {
            Progress.setStatus(id, 'completed');
            Renderer.renderSidebar(LESSONS);
            Renderer.renderProgressBar();
            Renderer.renderSelfCheck(id, exercisesSection);
          }
        });
      });
    }

    // Tab-Klick-Logik: Phase wechseln
    tabsDiv.addEventListener('click', (e) => {
      const clickedTab = e.target.closest('.phase-tab');
      if (!clickedTab) return;
      const targetPhase = clickedTab.dataset.phase;
      tabsDiv.querySelectorAll('.phase-tab').forEach(t => t.classList.remove('active'));
      container.querySelectorAll('.phase').forEach(s => s.classList.remove('active'));
      clickedTab.classList.add('active');
      const sec = document.getElementById('phase-' + targetPhase);
      if (sec) sec.classList.add('active');
    });
  }
};

// Event-Delegation: Klicks auf Sidebar-<li>-Elemente abfangen
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.addEventListener('click', (e) => {
      const li = e.target.closest('li[data-lesson-id]');
      if (li) {
        navigateToLesson(parseInt(li.dataset.lessonId, 10));
      }
    });
  }
});
