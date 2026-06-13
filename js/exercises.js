/**
 * Übungs-Engine für das Englisch-KA4-Lernprogramm.
 *
 * Übernommene Typen (aus dem Arduino-Lernprogramm, bewährt):
 *   - multiple-choice  (mit elaboriertem Feedback je falscher Option)
 *   - matching         (Zuordnung links<->rechts, z.B. Englisch<->Deutsch)
 *   - ordering         (Reihenfolge per Pfeil-Buttons, z.B. Satzbau)
 *
 * Neue, englischspezifische Typen:
 *   - fill-in-blank    (Lückentext, Text mit {{blank}}-Markern)
 *   - vocab-trainer    (Vokabel-Drill: deutsches Wort sehen, englisches tippen)
 *   - listening        (Browser liest englischen Text vor + Verständnisfrage)
 *   - free-text        (Schreibaufgabe + Musterlösung + Selbsteinschätzung)
 *
 * Render-Signatur überall: render(exercise, container, onComplete)
 * onComplete() wird genau einmal aufgerufen, wenn die Übung bestanden ist.
 */
const Exercises = {
  // Alle 24 Permutationen von [0,1,2,3] — für deterministisches MC-Shuffle.
  _ALL_PERMS_4: [
    [0,1,2,3],[0,1,3,2],[0,2,1,3],[0,2,3,1],[0,3,1,2],[0,3,2,1],
    [1,0,2,3],[1,0,3,2],[1,2,0,3],[1,2,3,0],[1,3,0,2],[1,3,2,0],
    [2,0,1,3],[2,0,3,1],[2,1,0,3],[2,1,3,0],[2,3,0,1],[2,3,1,0],
    [3,0,1,2],[3,0,2,1],[3,1,0,2],[3,1,2,0],[3,2,0,1],[3,2,1,0]
  ],

  /**
   * Normalisiert eine Texteingabe für den Vergleich:
   * klein, getrimmt, Mehrfach-Leerzeichen zu einem, typografische
   * Apostrophe zu geraden. Macht den Vergleich für Achtklässlerinnen fair.
   */
  _norm(s) {
    return String(s == null ? '' : s)
      .toLowerCase()
      .replace(/\u2019/g, "'")   // typografischer Apostroph -> gerade
      .replace(/\s+/g, ' ')
      .trim();
  },

  /**
   * Variante von _norm, die zusätzlich ein führendes "to " entfernt
   * (für Vokabeln: "to surf" == "surf").
   */
  _normVocab(s) {
    return Exercises._norm(s).replace(/^to\s+/, '');
  },

  /**
   * Deterministischer Shuffle der options/correct/wrongExplanations für MC.
   * Verhindert Position-Bias (Autorinnen setzen die richtige Antwort intuitiv
   * auf Position 2). Seed -> Knuth-Hash -> Permutationsindex 0..23.
   */
  shuffleMc(exercise, seedString) {
    if (exercise.type !== 'multiple-choice' || !exercise.options || exercise.options.length !== 4) {
      return exercise;
    }
    let hash = 0;
    for (let i = 0; i < seedString.length; i++) {
      hash = Math.imul(hash ^ seedString.charCodeAt(i), 2654435761);
    }
    const perm = Exercises._ALL_PERMS_4[Math.abs(hash) % 24];
    const newOptions = perm.map(i => exercise.options[i]);
    const newCorrect = perm.indexOf(exercise.correct);

    let newWrong;
    if (exercise.wrongExplanations) {
      newWrong = Array.isArray(exercise.wrongExplanations) ? [] : {};
      Object.entries(exercise.wrongExplanations).forEach(([oldKey, value]) => {
        if (value == null) return;
        const newIdx = perm.indexOf(parseInt(oldKey, 10));
        newWrong[newIdx] = value;
      });
    }
    return Object.assign({}, exercise, {
      options: newOptions,
      correct: newCorrect,
      wrongExplanations: newWrong
    });
  },

  /**
   * Dispatcht je nach exercise.type an die passende Render-Funktion.
   */
  render(exercise, container, onComplete) {
    switch (exercise.type) {
      case 'multiple-choice':
        return Exercises.renderMultipleChoice(exercise, container, onComplete);
      case 'matching':
        return Exercises.renderMatching(exercise, container, onComplete);
      case 'ordering':
        return Exercises.renderOrdering(exercise, container, onComplete);
      case 'fill-in-blank':
        return Exercises.renderFillInBlank(exercise, container, onComplete);
      case 'vocab-trainer':
        return Exercises.renderVocabTrainer(exercise, container, onComplete);
      case 'listening':
        return Exercises.renderListening(exercise, container, onComplete);
      case 'free-text':
        return Exercises.renderFreeText(exercise, container, onComplete);
      default:
        const div = document.createElement('div');
        div.textContent = 'Übungstyp "' + exercise.type + '" wird noch implementiert.';
        container.appendChild(div);
    }
  },

  // ======================================================================
  // Multiple Choice
  // ======================================================================
  renderMultipleChoice(exercise, container, onComplete) {
    const wrapper = document.createElement('div');
    wrapper.className = 'exercise-mc';

    const questionEl = document.createElement('p');
    questionEl.className = 'exercise-question';
    questionEl.innerHTML = exercise.question;
    wrapper.appendChild(questionEl);

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'mc-options';

    const feedbackEl = document.createElement('div');
    feedbackEl.className = 'exercise-feedback';
    feedbackEl.style.display = 'none';

    exercise.options.forEach(function(optionText, index) {
      const button = document.createElement('button');
      button.className = 'mc-option';
      button.setAttribute('data-index', index);
      button.innerHTML = optionText;

      button.addEventListener('click', function() {
        if (index === exercise.correct) {
          button.classList.add('correct');
          feedbackEl.innerHTML = exercise.explanation || 'Richtig!';
          feedbackEl.className = 'exercise-feedback correct';
          feedbackEl.style.display = 'block';
          optionsContainer.querySelectorAll('.mc-option').forEach(function(btn) { btn.disabled = true; });
          onComplete();
        } else {
          button.classList.add('incorrect');
          button.disabled = true;
          let feedbackText;
          if (exercise.wrongExplanations && exercise.wrongExplanations[index] !== undefined) {
            feedbackText = exercise.wrongExplanations[index];
          } else if (exercise.hint) {
            feedbackText = exercise.hint;
          } else {
            feedbackText = 'Leider falsch. Versuch es nochmal!';
          }
          feedbackEl.innerHTML = feedbackText;
          feedbackEl.className = 'exercise-feedback incorrect';
          feedbackEl.style.display = 'block';
        }
      });
      optionsContainer.appendChild(button);
    });

    wrapper.appendChild(optionsContainer);
    wrapper.appendChild(feedbackEl);
    container.appendChild(wrapper);
  },

  // ======================================================================
  // Matching (Zuordnung) — z.B. Englisch <-> Deutsch
  // ======================================================================
  renderMatching(exercise, container, onComplete) {
    var pairColors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

    var wrapper = document.createElement('div');
    wrapper.className = 'exercise-matching';

    var questionEl = document.createElement('p');
    questionEl.className = 'exercise-question';
    questionEl.innerHTML = exercise.question;
    wrapper.appendChild(questionEl);

    var matchingArea = document.createElement('div');
    matchingArea.className = 'matching-area';

    var leftCol = document.createElement('div');
    leftCol.className = 'matching-left';
    var rightCol = document.createElement('div');
    rightCol.className = 'matching-right';

    var rightIndices = [];
    for (var i = 0; i < exercise.pairs.length; i++) rightIndices.push(i);
    for (var j = rightIndices.length - 1; j > 0; j--) {
      var rand = Math.floor(Math.random() * (j + 1));
      var temp = rightIndices[j];
      rightIndices[j] = rightIndices[rand];
      rightIndices[rand] = temp;
    }

    var selectedLeft = null;
    var connections = {};
    var reverseConnections = {};
    var nextColorIndex = 0;
    var connectionColors = {};
    var leftItems = [];
    var rightItems = {};

    exercise.pairs.forEach(function(pair, idx) {
      var item = document.createElement('div');
      item.className = 'match-item match-left';
      item.setAttribute('data-index', idx);
      item.innerHTML = pair.left;

      item.addEventListener('click', function() {
        if (connections[idx] !== undefined) {
          var connectedRight = connections[idx];
          item.classList.remove('matched');
          item.style.backgroundColor = ''; item.style.borderColor = ''; item.style.color = '';
          var rightEl = rightItems[connectedRight];
          rightEl.classList.remove('matched');
          rightEl.style.backgroundColor = ''; rightEl.style.borderColor = ''; rightEl.style.color = '';
          delete reverseConnections[connectedRight];
          delete connectionColors[idx];
          delete connections[idx];
          if (selectedLeft !== null) leftItems[selectedLeft].classList.remove('selected');
          selectedLeft = null;
          return;
        }
        if (selectedLeft !== null) leftItems[selectedLeft].classList.remove('selected');
        selectedLeft = idx;
        item.classList.add('selected');
      });

      leftItems.push(item);
      leftCol.appendChild(item);
    });

    rightIndices.forEach(function(originalIdx) {
      var pair = exercise.pairs[originalIdx];
      var item = document.createElement('div');
      item.className = 'match-item match-right';
      item.setAttribute('data-index', originalIdx);
      item.innerHTML = pair.right;

      item.addEventListener('click', function() {
        if (reverseConnections[originalIdx] !== undefined) {
          var connectedLeft = reverseConnections[originalIdx];
          item.classList.remove('matched');
          item.style.backgroundColor = ''; item.style.borderColor = ''; item.style.color = '';
          var leftEl = leftItems[connectedLeft];
          leftEl.classList.remove('matched');
          leftEl.style.backgroundColor = ''; leftEl.style.borderColor = ''; leftEl.style.color = '';
          delete connections[connectedLeft];
          delete connectionColors[connectedLeft];
          delete reverseConnections[originalIdx];
          if (selectedLeft !== null) { leftItems[selectedLeft].classList.remove('selected'); selectedLeft = null; }
          return;
        }
        if (selectedLeft === null) return;
        var leftIdx = selectedLeft;
        var color = pairColors[nextColorIndex % pairColors.length];
        nextColorIndex++;
        connections[leftIdx] = originalIdx;
        reverseConnections[originalIdx] = leftIdx;
        connectionColors[leftIdx] = color;
        leftItems[leftIdx].classList.remove('selected');
        leftItems[leftIdx].classList.add('matched');
        leftItems[leftIdx].style.backgroundColor = color;
        leftItems[leftIdx].style.borderColor = color;
        leftItems[leftIdx].style.color = 'white';
        item.classList.add('matched');
        item.style.backgroundColor = color;
        item.style.borderColor = color;
        item.style.color = 'white';
        selectedLeft = null;
      });

      rightItems[originalIdx] = item;
      rightCol.appendChild(item);
    });

    matchingArea.appendChild(leftCol);
    matchingArea.appendChild(rightCol);
    wrapper.appendChild(matchingArea);

    var feedbackEl = document.createElement('div');
    feedbackEl.className = 'exercise-feedback';
    feedbackEl.style.display = 'none';

    var checkBtn = document.createElement('button');
    checkBtn.className = 'exercise-check-btn';
    checkBtn.textContent = 'Prüfen';

    checkBtn.addEventListener('click', function() {
      var totalPairs = exercise.pairs.length;
      var connectedCount = Object.keys(connections).length;
      if (connectedCount < totalPairs) {
        feedbackEl.textContent = 'Bitte ordne zuerst alle Begriffe zu.';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
        return;
      }
      var allCorrect = true;
      for (var k = 0; k < totalPairs; k++) {
        if (connections[k] !== k) { allCorrect = false; break; }
      }
      if (allCorrect) {
        feedbackEl.innerHTML = 'Alle Zuordnungen sind korrekt – super!' + (exercise.explanation ? '<br><br>' + exercise.explanation : '');
        feedbackEl.className = 'exercise-feedback correct';
        feedbackEl.style.display = 'block';
        checkBtn.disabled = true;
        onComplete();
      } else {
        feedbackEl.textContent = 'Nicht alle Zuordnungen stimmen. Versuch es nochmal!';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
      }
    });

    wrapper.appendChild(checkBtn);
    wrapper.appendChild(feedbackEl);
    container.appendChild(wrapper);
  },

  // ======================================================================
  // Ordering (Reihenfolge) — z.B. Satzbau / Wortstellung
  // ======================================================================
  renderOrdering(exercise, container, onComplete) {
    if (!Array.isArray(exercise.items) || !Array.isArray(exercise.correctOrder)
        || exercise.items.length !== exercise.correctOrder.length
        || exercise.items.length === 0) {
      const errDiv = document.createElement('div');
      errDiv.className = 'exercise-feedback incorrect';
      errDiv.textContent = 'Diese Übung ist fehlerhaft konfiguriert.';
      container.appendChild(errDiv);
      return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'exercise-ordering';

    const questionEl = document.createElement('p');
    questionEl.className = 'exercise-question';
    questionEl.innerHTML = exercise.question;
    wrapper.appendChild(questionEl);

    const items = exercise.items.map((text, idx) => ({ text: text, originalIndex: idx }));
    for (let i = items.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      const tmp = items[i]; items[i] = items[rand]; items[rand] = tmp;
    }
    let alreadyCorrect = true;
    for (let i = 0; i < items.length; i++) {
      if (items[i].originalIndex !== exercise.correctOrder[i]) { alreadyCorrect = false; break; }
    }
    if (alreadyCorrect && items.length >= 2) {
      const tmp = items[0]; items[0] = items[1]; items[1] = tmp;
    }

    const list = document.createElement('ol');
    list.className = 'ordering-list';
    wrapper.appendChild(list);

    function renderList() {
      list.innerHTML = '';
      items.forEach(function(item, idx) {
        const li = document.createElement('li');
        li.className = 'ordering-item';
        const textSpan = document.createElement('span');
        textSpan.className = 'ordering-text';
        textSpan.innerHTML = item.text;
        li.appendChild(textSpan);
        const btnGroup = document.createElement('div');
        btnGroup.className = 'ordering-buttons';
        const upBtn = document.createElement('button');
        upBtn.className = 'ordering-btn ordering-up';
        upBtn.textContent = '↑';
        upBtn.disabled = (idx === 0);
        upBtn.setAttribute('aria-label', 'Nach oben verschieben');
        upBtn.addEventListener('click', function() {
          const tmp = items[idx]; items[idx] = items[idx - 1]; items[idx - 1] = tmp; renderList();
        });
        const downBtn = document.createElement('button');
        downBtn.className = 'ordering-btn ordering-down';
        downBtn.textContent = '↓';
        downBtn.disabled = (idx === items.length - 1);
        downBtn.setAttribute('aria-label', 'Nach unten verschieben');
        downBtn.addEventListener('click', function() {
          const tmp = items[idx]; items[idx] = items[idx + 1]; items[idx + 1] = tmp; renderList();
        });
        btnGroup.appendChild(upBtn);
        btnGroup.appendChild(downBtn);
        li.appendChild(btnGroup);
        list.appendChild(li);
      });
    }
    renderList();

    const feedbackEl = document.createElement('div');
    feedbackEl.className = 'exercise-feedback';
    feedbackEl.style.display = 'none';

    const checkBtn = document.createElement('button');
    checkBtn.className = 'exercise-check-btn';
    checkBtn.textContent = 'Prüfen';

    let completed = false;
    checkBtn.addEventListener('click', function() {
      if (completed) return;
      let correctCount = 0;
      items.forEach(function(item, idx) {
        if (item.originalIndex === exercise.correctOrder[idx]) correctCount++;
      });
      if (correctCount === items.length) {
        completed = true;
        feedbackEl.innerHTML = 'Reihenfolge korrekt – super!' + (exercise.explanation ? '<br><br>' + exercise.explanation : '');
        feedbackEl.className = 'exercise-feedback correct';
        feedbackEl.style.display = 'block';
        checkBtn.disabled = true;
        list.querySelectorAll('button').forEach(function(b) { b.disabled = true; });
        onComplete();
      } else {
        feedbackEl.textContent = correctCount + ' von ' + items.length + ' an der richtigen Position. Verschiebe die Teile mit den Pfeilen.';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
      }
    });

    wrapper.appendChild(checkBtn);
    wrapper.appendChild(feedbackEl);
    container.appendChild(wrapper);
  },

  // ======================================================================
  // Fill-in-blank (Lückentext)
  // text enthält {{blank}}-Marker; blanks[] liefert die Lösungen.
  // exercise: { type, question, text, blanks:[{correct, alternatives?}], explanation, prompts? }
  // prompts (optional): Array gleicher Länge wie blanks, als Platzhalter im Input.
  // ======================================================================
  renderFillInBlank(exercise, container, onComplete) {
    const wrapper = document.createElement('div');
    wrapper.className = 'exercise-fill';

    if (exercise.question) {
      const questionEl = document.createElement('p');
      questionEl.className = 'exercise-question';
      questionEl.innerHTML = exercise.question;
      wrapper.appendChild(questionEl);
    }

    const textWrap = document.createElement('div');
    textWrap.className = 'fill-text';

    const parts = String(exercise.text).split('{{blank}}');
    const inputs = [];
    parts.forEach(function(part, idx) {
      const span = document.createElement('span');
      span.innerHTML = part;
      textWrap.appendChild(span);
      if (idx < parts.length - 1) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'fill-input';
        input.setAttribute('autocomplete', 'off');
        input.setAttribute('autocapitalize', 'off');
        input.setAttribute('autocorrect', 'off');
        input.setAttribute('spellcheck', 'false');
        if (exercise.prompts && exercise.prompts[idx]) {
          input.placeholder = exercise.prompts[idx];
        }
        textWrap.appendChild(input);
        inputs.push(input);
      }
    });
    wrapper.appendChild(textWrap);

    const feedbackEl = document.createElement('div');
    feedbackEl.className = 'exercise-feedback';
    feedbackEl.style.display = 'none';

    const checkBtn = document.createElement('button');
    checkBtn.className = 'exercise-check-btn';
    checkBtn.textContent = 'Prüfen';

    let completed = false;

    function checkOne(input, blank) {
      const typed = Exercises._norm(input.value);
      const candidates = [Exercises._norm(blank.correct)].concat(
        (blank.alternatives || []).map(Exercises._norm)
      );
      return candidates.indexOf(typed) !== -1;
    }

    checkBtn.addEventListener('click', function() {
      if (completed) return;
      let allCorrect = true;
      let anyEmpty = false;
      inputs.forEach(function(input, i) {
        if (Exercises._norm(input.value) === '') anyEmpty = true;
        const ok = checkOne(input, exercise.blanks[i]);
        input.classList.remove('correct', 'incorrect');
        input.classList.add(ok ? 'correct' : 'incorrect');
        if (!ok) allCorrect = false;
      });

      if (allCorrect) {
        completed = true;
        feedbackEl.innerHTML = 'Alles richtig – super!' + (exercise.explanation ? '<br><br>' + exercise.explanation : '');
        feedbackEl.className = 'exercise-feedback correct';
        feedbackEl.style.display = 'block';
        checkBtn.disabled = true;
        inputs.forEach(function(input) { input.disabled = true; });
        onComplete();
      } else {
        // Bei falsch: korrekte Lösungen NICHT sofort verraten — erst nach 2 Versuchen.
        let msg = anyEmpty
          ? 'Fülle bitte alle Lücken aus. Rote Felder stimmen noch nicht.'
          : 'Rote Felder stimmen noch nicht. Schau dir die Regel nochmal an und probier es erneut.';
        feedbackEl.innerHTML = msg;
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
      }
    });

    // "Lösung zeigen" — nur als Hilfe, schaltet die Übung NICHT frei (kein onComplete).
    const solveBtn = document.createElement('button');
    solveBtn.className = 'exercise-solve-btn';
    solveBtn.textContent = 'Lösung zeigen';
    solveBtn.addEventListener('click', function() {
      inputs.forEach(function(input, i) {
        if (!checkOne(input, exercise.blanks[i])) {
          input.value = exercise.blanks[i].correct;
          input.classList.remove('incorrect');
          input.classList.add('revealed');
        }
      });
      feedbackEl.innerHTML = 'Hier die Lösung. Tipp sie zum Üben nochmal selbst ein, dann wird die Übung grün.' + (exercise.explanation ? '<br><br>' + exercise.explanation : '');
      feedbackEl.className = 'exercise-feedback neutral';
      feedbackEl.style.display = 'block';
    });

    // Enter im letzten Feld löst "Prüfen" aus
    inputs.forEach(function(input) {
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') { e.preventDefault(); checkBtn.click(); }
      });
    });

    const btnRow = document.createElement('div');
    btnRow.className = 'fill-btn-row';
    btnRow.appendChild(checkBtn);
    btnRow.appendChild(solveBtn);
    wrapper.appendChild(btnRow);
    wrapper.appendChild(feedbackEl);
    container.appendChild(wrapper);
  },

  // ======================================================================
  // Vocab-Trainer — deutsches Wort sehen, englisches tippen (Produktion!)
  // exercise: { type, question?, words:[{de, en, alternatives?, hint?}] }
  // Falsche Wörter wandern ans Ende und kommen nochmal dran.
  // ======================================================================
  renderVocabTrainer(exercise, container, onComplete) {
    const wrapper = document.createElement('div');
    wrapper.className = 'exercise-vocab';

    if (exercise.question) {
      const q = document.createElement('p');
      q.className = 'exercise-question';
      q.innerHTML = exercise.question;
      wrapper.appendChild(q);
    }

    const total = exercise.words.length;
    // Warteschlange: Indizes der Wörter; falsche werden hinten wieder eingereiht.
    let queue = exercise.words.map(function(_, i) { return i; });
    let firstTryCorrect = 0;
    const triedWrong = {}; // markiert Wörter, die mind. einmal falsch waren

    const progressEl = document.createElement('div');
    progressEl.className = 'vocab-progress';
    wrapper.appendChild(progressEl);

    const card = document.createElement('div');
    card.className = 'vocab-card';
    wrapper.appendChild(card);

    let solvedCount = 0;

    function renderSummary() {
      card.innerHTML = '<div class="vocab-done">✓ Geschafft! Du hattest <strong>'
        + firstTryCorrect + ' von ' + total + '</strong> Wörter beim ersten Versuch richtig.'
        + (firstTryCorrect === total
            ? ' Perfekt — die sitzen!'
            : ' Die schwierigen kommen über das Wiederholungsfach automatisch wieder.')
        + '</div>';
      progressEl.textContent = total + ' von ' + total + ' Wörtern geübt';
      onComplete();
    }

    function showNext() {
      if (queue.length === 0) { renderSummary(); return; }
      const wordIdx = queue[0];
      const word = exercise.words[wordIdx];
      progressEl.textContent = 'Noch ' + queue.length + ' Wort' + (queue.length === 1 ? '' : 'er') + ' in dieser Runde · '
        + solvedCount + ' von ' + total + ' gelöst';

      card.innerHTML = '';
      const promptEl = document.createElement('div');
      promptEl.className = 'vocab-prompt';
      promptEl.innerHTML = word.de;
      card.appendChild(promptEl);

      if (word.hint) {
        const hintEl = document.createElement('div');
        hintEl.className = 'vocab-hint';
        hintEl.innerHTML = '💡 ' + word.hint;
        card.appendChild(hintEl);
      }

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'vocab-input';
      input.placeholder = 'englisches Wort …';
      input.setAttribute('autocomplete', 'off');
      input.setAttribute('autocapitalize', 'off');
      input.setAttribute('autocorrect', 'off');
      input.setAttribute('spellcheck', 'false');
      card.appendChild(input);

      const fb = document.createElement('div');
      fb.className = 'exercise-feedback';
      fb.style.display = 'none';
      card.appendChild(fb);

      const checkBtn = document.createElement('button');
      checkBtn.className = 'exercise-check-btn';
      checkBtn.textContent = 'Prüfen';
      card.appendChild(checkBtn);

      let answered = false;

      function evaluate() {
        if (answered) { return; }
        const typed = Exercises._normVocab(input.value);
        if (typed === '') { input.focus(); return; }
        const candidates = [Exercises._normVocab(word.en)].concat(
          (word.alternatives || []).map(Exercises._normVocab)
        );
        const ok = candidates.indexOf(typed) !== -1;
        answered = true;
        input.disabled = true;
        checkBtn.style.display = 'none';

        if (ok) {
          input.classList.add('correct');
          solvedCount++;
          if (!triedWrong[wordIdx]) firstTryCorrect++;
          fb.innerHTML = '✓ Richtig: <strong>' + word.en + '</strong>';
          fb.className = 'exercise-feedback correct';
          fb.style.display = 'block';
          queue.shift();
        } else {
          input.classList.add('incorrect');
          triedWrong[wordIdx] = true;
          fb.innerHTML = 'Nicht ganz. Richtig ist: <strong>' + word.en + '</strong>'
            + (word.alternatives && word.alternatives.length ? ' (auch: ' + word.alternatives.join(', ') + ')' : '')
            + '<br>Dieses Wort kommt am Ende der Runde nochmal.';
          fb.className = 'exercise-feedback incorrect';
          fb.style.display = 'block';
          // ans Ende der Warteschlange
          queue.shift();
          queue.push(wordIdx);
        }

        const nextBtn = document.createElement('button');
        nextBtn.className = 'exercise-check-btn vocab-next';
        nextBtn.textContent = queue.length === 0 ? 'Fertig' : 'Weiter →';
        nextBtn.addEventListener('click', showNext);
        card.appendChild(nextBtn);
        nextBtn.focus();
      }

      checkBtn.addEventListener('click', evaluate);
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (answered) {
            const nb = card.querySelector('.vocab-next');
            if (nb) nb.click();
          } else {
            evaluate();
          }
        }
      });
      input.focus();
    }

    showNext();
    container.appendChild(wrapper);
  },

  // ======================================================================
  // Listening — Browser liest englischen Text vor + Verständnisfrage (MC)
  // exercise: { type, instruction?, audioText, lang?, rate?, question, options, correct, explanation, wrongExplanations? }
  // ======================================================================
  renderListening(exercise, container, onComplete) {
    const wrapper = document.createElement('div');
    wrapper.className = 'exercise-listening';

    const instr = document.createElement('p');
    instr.className = 'exercise-question';
    instr.innerHTML = exercise.instruction
      || 'Hör gut zu (du kannst mehrmals abspielen) und beantworte dann die Frage.';
    wrapper.appendChild(instr);

    const controls = document.createElement('div');
    controls.className = 'listening-controls';

    const playBtn = document.createElement('button');
    playBtn.className = 'listening-play-btn';
    playBtn.innerHTML = '▶ Abspielen';

    const slowBtn = document.createElement('button');
    slowBtn.className = 'listening-slow-btn';
    slowBtn.innerHTML = '🐢 Langsam';

    function speak(rate) {
      if (!('speechSynthesis' in window)) {
        warn.style.display = 'block';
        return;
      }
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(exercise.audioText);
      u.lang = exercise.lang || 'en-US';
      u.rate = rate;
      window.speechSynthesis.speak(u);
    }

    playBtn.addEventListener('click', function() { speak(exercise.rate || 0.9); });
    slowBtn.addEventListener('click', function() { speak(0.6); });

    controls.appendChild(playBtn);
    controls.appendChild(slowBtn);
    wrapper.appendChild(controls);

    const warn = document.createElement('div');
    warn.className = 'exercise-feedback incorrect';
    warn.style.display = 'none';
    warn.innerHTML = 'Dein Browser kann keine Sprache vorlesen. Tipp: Nutze Safari oder Chrome. '
      + 'Du kannst den Text unten trotzdem aufdecken.';
    wrapper.appendChild(warn);

    container.appendChild(wrapper);

    // Verständnisfrage als eingebettete Multiple-Choice
    const questionWrap = document.createElement('div');
    questionWrap.className = 'listening-question';
    wrapper.appendChild(questionWrap);
    Exercises.renderMultipleChoice({
      type: 'multiple-choice',
      question: exercise.question,
      options: exercise.options,
      correct: exercise.correct,
      explanation: exercise.explanation,
      wrongExplanations: exercise.wrongExplanations,
      hint: exercise.hint
    }, questionWrap, onComplete);

    // Text zum Nachlesen (erst auf Klick) — als Lernhilfe
    const reveal = document.createElement('details');
    reveal.className = 'listening-transcript';
    const sum = document.createElement('summary');
    sum.textContent = 'Text anzeigen (zum Nachlesen)';
    reveal.appendChild(sum);
    const tx = document.createElement('p');
    tx.className = 'listening-transcript-text';
    tx.textContent = exercise.audioText;
    reveal.appendChild(tx);
    wrapper.appendChild(reveal);
  },

  // ======================================================================
  // Free-text — Schreibaufgabe mit Musterlösung + Selbsteinschätzung
  // Freies Englisch lässt sich nicht zuverlässig automatisch bewerten;
  // darum: schreiben -> Musterlösung aufdecken -> selbst einschätzen.
  // exercise: { type, question, hint?, modelAnswer, minWords? }
  // ======================================================================
  renderFreeText(exercise, container, onComplete) {
    const wrapper = document.createElement('div');
    wrapper.className = 'exercise-freetext';

    const questionEl = document.createElement('p');
    questionEl.className = 'exercise-question';
    questionEl.innerHTML = exercise.question;
    wrapper.appendChild(questionEl);

    if (exercise.hint) {
      const hint = document.createElement('div');
      hint.className = 'tip-box';
      hint.innerHTML = '<strong>Tipp:</strong> ' + exercise.hint;
      wrapper.appendChild(hint);
    }

    const textarea = document.createElement('textarea');
    textarea.className = 'freetext-area';
    textarea.rows = 5;
    textarea.placeholder = 'Schreib hier auf Englisch …';
    wrapper.appendChild(textarea);

    const counter = document.createElement('div');
    counter.className = 'freetext-counter';
    counter.textContent = '0 Wörter';
    wrapper.appendChild(counter);
    textarea.addEventListener('input', function() {
      const words = textarea.value.trim() === '' ? 0 : textarea.value.trim().split(/\s+/).length;
      counter.textContent = words + (words === 1 ? ' Wort' : ' Wörter');
    });

    const feedbackEl = document.createElement('div');
    feedbackEl.className = 'exercise-feedback';
    feedbackEl.style.display = 'none';

    const showBtn = document.createElement('button');
    showBtn.className = 'exercise-check-btn';
    showBtn.textContent = 'Musterlösung anzeigen';

    const modelBox = document.createElement('div');
    modelBox.className = 'freetext-model';
    modelBox.style.display = 'none';

    const selfCheckBox = document.createElement('div');
    selfCheckBox.className = 'freetext-selfcheck';
    selfCheckBox.style.display = 'none';

    showBtn.addEventListener('click', function() {
      const words = textarea.value.trim() === '' ? 0 : textarea.value.trim().split(/\s+/).length;
      const minWords = exercise.minWords || 0;
      if (words < minWords) {
        feedbackEl.innerHTML = 'Versuch erst, selbst mindestens ' + minWords + ' Wörter zu schreiben. '
          + 'Erst denken, dann vergleichen — so lernst du am meisten!';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
        return;
      }
      feedbackEl.style.display = 'none';
      modelBox.innerHTML = '<div class="freetext-model-head">Eine mögliche Musterlösung:</div>'
        + '<div class="freetext-model-text">' + exercise.modelAnswer + '</div>'
        + '<div class="freetext-model-hint">Deine Lösung darf anders klingen! Vergleiche: '
        + 'Stimmen die Zeitformen? Passt der Satzbau? Hast du die geforderten Wörter benutzt?</div>';
      modelBox.style.display = 'block';
      selfCheckBox.style.display = 'block';
      showBtn.disabled = true;
    });

    // Selbsteinschätzung -> schließt die Übung ab (subjektiv, kein Richtig/Falsch)
    const scHead = document.createElement('div');
    scHead.className = 'freetext-sc-head';
    scHead.textContent = 'Vergleiche ehrlich: Wie gut war deine Antwort?';
    selfCheckBox.appendChild(scHead);

    const scBtns = document.createElement('div');
    scBtns.className = 'freetext-sc-btns';
    [
      { label: 'Passt gut 👍', cls: 'sc-good' },
      { label: 'Teilweise 🤔', cls: 'sc-mid' },
      { label: 'Nochmal üben 🔁', cls: 'sc-low' }
    ].forEach(function(opt) {
      const b = document.createElement('button');
      b.className = 'freetext-sc-btn ' + opt.cls;
      b.textContent = opt.label;
      b.addEventListener('click', function() {
        selfCheckBox.innerHTML = '<div class="self-check-done">✓ Gut gemacht, dass du es selbst geschrieben '
          + 'und verglichen hast. Genau so übt man für den Schreibteil der Klassenarbeit.</div>';
        onComplete();
      });
      scBtns.appendChild(b);
    });
    selfCheckBox.appendChild(scBtns);

    wrapper.appendChild(showBtn);
    wrapper.appendChild(feedbackEl);
    wrapper.appendChild(modelBox);
    wrapper.appendChild(selfCheckBox);
    container.appendChild(wrapper);
  }
};

window.Exercises = Exercises;
