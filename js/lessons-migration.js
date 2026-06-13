/**
 * Modul 2 - Migration & Zuwanderung (GK-Arbeit).
 *   L4 Was ist Migration? (Begriff) - Buch S. 168
 *   L5 Push- und Pull-Faktoren - Buch S. 164 (M1)
 *   L6 Folgen der Zuwanderung / "Profitabel fuer das Land" - Buch S. 172/173 (M2, Aufgabe 3)
 *
 * Jede Lektion: Erklaerung (mit Analogie/Tipp/Warnung) -> Beispiel -> Uebungen.
 * Zielgruppe: Leonie, Klasse 8, Realschule BW, M-Niveau. Einfache Sprache, Alltagsanalogien.
 */

window.LESSON_DATA = (window.LESSON_DATA || []).concat([

  // ===================================================================
  // Lektion 4: Was ist Migration?
  // ===================================================================
  {
    id: 4,
    title: "Was ist Migration?",
    explanation: {
      html: `
        <h2>Migration - der Wohnsitz wechselt über eine Grenze</h2>
        <p>Menschen verlassen ihre Heimat und ziehen woanders hin. Dafür gibt es ein Fachwort:
        <strong>Migration</strong>. Aber Vorsicht - nicht jeder, der ins Ausland geht, ist ein Migrant.</p>

        <div class="info-card">
          <strong>Definition (so steht es im Buch, S. 168):</strong><br>
          Migration bedeutet eine <strong>dauerhafte Verlegung des Wohnsitzes über eine Grenze</strong>
          (zum Beispiel eine Landesgrenze) hinweg.
        </div>

        <div class="analogy-box">
          <strong>Umzug oder Urlaub?</strong> Migration ist wie ein <strong>Umzug</strong>: Du verlegst
          deinen Wohnsitz <em>dauerhaft</em> woanders hin. Ein <strong>Urlaub</strong> ist dagegen nur
          vorübergehend - danach kommst du wieder heim. Deshalb sind <strong>Touristen keine Migranten</strong>,
          auch wenn sie eine Zeit lang im Ausland sind.
        </div>

        <h3>Das wichtige Wort: "dauerhaft"</h3>
        <p>Der Unterschied zwischen Migration und Urlaub steckt in einem Wort: <strong>dauerhaft</strong>.
        Wer für immer (oder sehr lange) in ein anderes Land zieht, ist ein Migrant. Wer nur Urlaub macht
        oder ein paar Wochen im Ausland arbeitet und dann zurückkommt, nicht.</p>

        <h3>Zwei Richtungen: Einwanderung und Auswanderung</h3>
        <table class="icon-table">
          <tr><th>Begriff</th><th>Richtung</th><th>Bedeutung</th></tr>
          <tr><td><strong>Immigration</strong><br>(Einwanderung)</td><td>hinein &rarr;</td>
            <td>Menschen ziehen <strong>in ein Land hinein</strong> (z.B. nach Deutschland).</td></tr>
          <tr><td><strong>Emigration</strong><br>(Auswanderung)</td><td>&larr; hinaus</td>
            <td>Menschen ziehen <strong>aus einem Land heraus</strong> (z.B. weg aus Syrien).</td></tr>
        </table>

        <div class="tip-box">
          <strong>Eselsbrücke:</strong> <strong>Im</strong>migration = <strong>in</strong> ein Land hinein
          (wie "in"). <strong>E</strong>migration = hinaus, raus (wie der "Exit"-Ausgang). Ein und derselbe
          Mensch ist oft beides: Wer aus Syrien <em>auswandert</em> (Emigration), <em>wandert</em> zugleich
          nach Deutschland <em>ein</em> (Immigration).
        </div>

        <div class="why-context">
          <strong>Warum lernen wir das?</strong> In der Arbeit sollst du den Begriff Migration sauber
          definieren können. Achte besonders auf die zwei Schlüsselwörter: <strong>dauerhaft</strong>
          und <strong>über eine Grenze</strong>.
        </div>
      `
    },
    example: {
      title: "Beispiel: Migration oder nicht?",
      steps: [
        {
          label: "Fall 1",
          html: `<p><em>Familie Yilmaz zieht für immer von der Türkei nach Stuttgart.</em><br>
            &rarr; Dauerhaft + über eine Grenze = <strong>Migration</strong> (für Deutschland: Einwanderung).</p>`
        },
        {
          label: "Fall 2",
          html: `<p><em>Herr Klein macht drei Wochen Urlaub in Spanien.</em><br>
            &rarr; Nur vorübergehend, er kommt wieder heim = <strong>keine Migration</strong>
            (er ist Tourist).</p>`
        },
        {
          label: "Fall 3",
          html: `<p><em>Lisa wandert nach dem Abitur dauerhaft nach Kanada aus.</em><br>
            &rarr; Dauerhaft über eine Grenze = <strong>Migration</strong>. Für Deutschland ist das
            <strong>Auswanderung (Emigration)</strong>, für Kanada <strong>Einwanderung (Immigration)</strong>.</p>`
        }
      ]
    },
    exercisesIntro: "Prüfe immer zwei Dinge: Ist der Wohnsitzwechsel <strong>dauerhaft</strong>? Geht er <strong>über eine Grenze</strong>?",
    exercises: [
      {
        type: "fill-in-blank",
        question: "Vervollständige die Definition von Migration:",
        text: "Migration bedeutet eine {{blank}} Verlegung des {{blank}} über eine {{blank}} hinweg.",
        blanks: [
          { correct: "dauerhafte", alternatives: ["dauerhaft"] },
          { correct: "Wohnsitzes", alternatives: ["wohnsitzes", "Wohnsitz", "wohnorts", "Wohnortes"] },
          { correct: "Grenze", alternatives: ["grenze", "Landesgrenze"] }
        ],
        explanation: "Die drei Schlüsselwörter: dauerhaft, Wohnsitz und Grenze."
      },
      {
        type: "multiple-choice",
        question: "Warum ist ein Tourist, der drei Wochen in Italien Urlaub macht, KEIN Migrant?",
        options: [
          "weil er seinen Wohnsitz nicht dauerhaft verlegt - er kommt wieder heim",
          "weil Italien zu nah an Deutschland liegt",
          "weil er kein Flugzeug benutzt",
          "weil er die Sprache nicht spricht"
        ],
        correct: 0,
        explanation: "Richtig! Migration ist eine <strong>dauerhafte</strong> Verlegung des Wohnsitzes. Urlaub ist nur vorübergehend - deshalb ist ein Tourist kein Migrant.",
        wrongExplanations: {
          1: "Die Entfernung spielt keine Rolle. Entscheidend ist, dass der Wohnsitz nicht dauerhaft wechselt.",
          2: "Das Verkehrsmittel ist egal. Wichtig ist nur: dauerhaft oder nicht? Urlaub = nicht dauerhaft.",
          3: "Die Sprache entscheidet nicht. Es geht darum, ob der Wohnsitz dauerhaft verlegt wird - beim Urlaub nicht."
        }
      },
      {
        type: "matching",
        question: "Ordne die Begriffe richtig zu:",
        pairs: [
          { left: "Immigration", right: "Einwanderung - in ein Land hinein" },
          { left: "Emigration", right: "Auswanderung - aus einem Land heraus" },
          { left: "Migration", right: "dauerhafte Verlegung des Wohnsitzes über eine Grenze" }
        ],
        explanation: "Immigration = hinein (in), Emigration = hinaus (Exit), Migration = der Oberbegriff."
      }
    ]
  },

  // ===================================================================
  // Lektion 5: Push- und Pull-Faktoren
  // ===================================================================
  {
    id: 5,
    title: "Push- und Pull-Faktoren",
    explanation: {
      html: `
        <h2>Warum wandern Menschen? Push und Pull</h2>
        <p>Hinter jeder Migration stehen Gründe. Man teilt sie in zwei Gruppen ein:
        <strong>Push-Faktoren</strong> (die aus der Heimat wegtreiben) und
        <strong>Pull-Faktoren</strong> (die ins neue Land locken).</p>

        <div class="analogy-box">
          <strong>Push = drücken, Pull = ziehen.</strong> Stell dir eine Tür vor: Auf der einen Seite
          steht "push" (drücken), auf der anderen "pull" (ziehen).<br>
          - <strong>Push</strong> ist alles, was dich aus der Heimat <em>wegdrückt</em> (etwas ist schlecht
          und du willst weg).<br>
          - <strong>Pull</strong> ist alles, was dich ins neue Land <em>hineinzieht</em> (dort ist etwas
          besser und lockt dich an).
        </div>

        <h3>Push-Faktoren (Gründe wegzugehen)</h3>
        <p>Das sind Gründe, die Menschen dazu bringen, ihre Heimat zu <strong>verlassen</strong>. Man kann sie
        in drei Arten einteilen:</p>
        <table class="icon-table">
          <tr><th>Art</th><th>Beispiele</th></tr>
          <tr><td><strong>politisch</strong></td><td>Krieg, Unterdrückung, Verfolgung</td></tr>
          <tr><td><strong>wirtschaftlich</strong></td><td>Arbeitslosigkeit, Armut, Hunger</td></tr>
          <tr><td><strong>Umwelt / Natur</strong></td><td>Dürren, Flutkatastrophen, Erdrutsche, Unwetter</td></tr>
        </table>

        <h3>Pull-Faktoren (Gründe ins neue Land zu kommen)</h3>
        <p>Das sind die Dinge, die ein anderes Land <strong>attraktiv</strong> machen und Menschen anziehen:</p>
        <div class="info-card">
          <strong>Bessere Lebensbedingungen</strong>, zum Beispiel:<br>
          - Sicherheit (kein Krieg)<br>
          - Arbeitsplätze<br>
          - die Möglichkeit auf eine gute Schulbildung<br>
          - mit Familienmitgliedern zusammenleben zu können
        </div>

        <div class="tip-box">
          <strong>So merkst du dir, was was ist:</strong> Frag dich - drückt dieser Grund die Menschen
          <em>weg</em> (etwas Schlechtes in der Heimat) oder zieht er sie <em>an</em> (etwas Gutes im Zielland)?
          Krieg drückt weg = Push. Sicherheit zieht an = Pull. Dieselbe Sache, zwei Seiten:
          <em>Krieg</em> (Push) und <em>Sicherheit</em> (Pull) gehören zusammen.
        </div>

        <div class="warning-box">
          <strong>Typischer Fehler:</strong> Push und Pull verwechseln. Merke: <strong>Push</strong> ist das
          <strong>Schlechte in der Heimat</strong> (treibt weg), <strong>Pull</strong> ist das
          <strong>Gute im Zielland</strong> (lockt an).
        </div>
      `
    },
    example: {
      title: "Beispiel: Amir verlässt sein Land",
      steps: [
        {
          label: "Die Situation",
          html: `<p>In Amirs Heimatland herrscht Krieg, es gibt kaum Arbeit. Er flieht nach Deutschland,
            weil es dort sicher ist und er auf einen Job hofft. Welche Gründe sind Push, welche Pull?</p>`
        },
        {
          label: "Die Push-Faktoren",
          html: `<p><strong>Krieg</strong> (politisch) und <strong>keine Arbeit</strong> (wirtschaftlich)
            treiben Amir aus seiner Heimat weg.<br>&rarr; Das sind <strong>Push-Faktoren</strong>.</p>`
        },
        {
          label: "Die Pull-Faktoren",
          html: `<p><strong>Sicherheit</strong> und die <strong>Hoffnung auf einen Job</strong> in
            Deutschland ziehen ihn an.<br>&rarr; Das sind <strong>Pull-Faktoren</strong>.</p>`
        }
      ]
    },
    exercisesIntro: "Frag dich bei jedem Grund: Drückt er <strong>weg</strong> (Push) oder zieht er <strong>an</strong> (Pull)?",
    exercises: [
      {
        type: "multiple-choice",
        question: "Welches ist ein typischer Push-Faktor?",
        options: ["Krieg in der Heimat", "gute Arbeitsplätze im Zielland", "Sicherheit im Zielland", "gute Schulen im Zielland"],
        correct: 0,
        explanation: "Richtig! Krieg ist etwas Schlechtes in der Heimat, das die Menschen wegtreibt - ein <strong>Push-Faktor</strong> (politisch).",
        wrongExplanations: {
          1: "Gute Arbeitsplätze locken ins neue Land - das ist ein Pull-Faktor. Push ist das Schlechte in der Heimat.",
          2: "Sicherheit zieht an = Pull-Faktor. Der passende Push-Faktor dazu wäre Krieg.",
          3: "Gute Schulen sind ein Pull-Faktor (sie locken an). Push ist das, was aus der Heimat wegtreibt."
        }
      },
      {
        type: "matching",
        question: "Ordne jeden Grund richtig zu (Push = wegtreiben, Pull = anziehen):",
        pairs: [
          { left: "Krieg und Verfolgung", right: "Push-Faktor (politisch)" },
          { left: "Armut und Hunger", right: "Push-Faktor (wirtschaftlich)" },
          { left: "Dürre und Flutkatastrophen", right: "Push-Faktor (Umwelt)" },
          { left: "Sicherheit und gute Jobs", right: "Pull-Faktor" }
        ],
        explanation: "Die drei Push-Arten: politisch, wirtschaftlich, Umwelt. Pull = die guten Lebensbedingungen im Zielland."
      },
      {
        type: "fill-in-blank",
        question: "Fülle die Lücken:",
        text: "{{blank}}-Faktoren treiben Menschen aus ihrer Heimat weg, zum Beispiel Krieg, Armut oder Naturkatastrophen. {{blank}}-Faktoren ziehen Menschen in ein anderes Land, zum Beispiel Sicherheit, Arbeit oder gute Schulen.",
        blanks: [
          { correct: "Push", alternatives: ["push"] },
          { correct: "Pull", alternatives: ["pull"] }
        ],
        explanation: "Push = wegdrücken (Schlechtes in der Heimat), Pull = anziehen (Gutes im Zielland)."
      },
      {
        type: "multiple-choice",
        question: "Eine schwere Dürre zerstört die Ernte und die Menschen müssen ihre Region verlassen. Zu welcher Art von Push-Faktor gehört das?",
        options: ["Umwelt-Faktor (Natur)", "politischer Faktor", "wirtschaftlicher Faktor", "das ist gar kein Push-Faktor"],
        correct: 0,
        explanation: "Richtig! Dürren, Fluten und Unwetter sind <strong>Umwelt-Push-Faktoren</strong> - die Natur zerstört die Lebensgrundlage.",
        wrongExplanations: {
          1: "Politisch wären Krieg oder Verfolgung. Eine Dürre ist eine Naturkatastrophe = Umwelt-Faktor.",
          2: "Wirtschaftlich wären Armut oder Arbeitslosigkeit. Eine Dürre gehört zu den Umwelt-Faktoren.",
          3: "Doch - eine Dürre treibt Menschen aus der Heimat weg, also ist sie ein Push-Faktor (Umwelt)."
        }
      }
    ]
  },

  // ===================================================================
  // Lektion 6: Folgen der Zuwanderung ("Profitabel fuer das Land")
  // ===================================================================
  {
    id: 6,
    title: "Folgen der Zuwanderung",
    explanation: {
      html: `
        <h2>Was bringt Zuwanderung dem Land?</h2>
        <p>Am Stammtisch hört man oft: "Ausländer kosten uns nur Geld." Der Zeitungstext M2
        ("Profitabel für das Land", S. 172) zeigt mit Zahlen: <strong>das Gegenteil stimmt</strong>.
        Zuwanderung bringt Deutschland sogar einen Gewinn.</p>

        <div class="analogy-box">
          <strong>Wie ein neuer Mitspieler im Team:</strong> Ein gut ausgebildeter Zuwanderer ist wie ein
          starker Neuzugang in einer Mannschaft. Er bringt mehr ein, als er kostet - das Team wird besser
          und gewinnt. Genauso "rechnet sich" Zuwanderung für ein Land.
        </div>

        <h3>Die positiven Folgen (aus M2)</h3>
        <div class="info-card">
          <strong>1. Mehr Geld für den Staat.</strong> Zuwanderer zahlen unterm Strich <strong>mehr
          Steuern und Sozialabgaben</strong>, als sie an Leistungen zurückbekommen. Das bringt dem Staat
          einen <strong>Nettogewinn</strong>.
        </div>
        <div class="info-card">
          <strong>2. Dringend gebrauchte Arbeitskräfte.</strong> In Deutschland fehlen Arbeitskräfte
          (Fachkräftemangel). Zuwanderer füllen diese Lücken.
        </div>
        <div class="info-card">
          <strong>3. Je besser ausgebildet, desto größer der Gewinn.</strong> Der Nutzen ist umso höher,
          <strong>je besser qualifiziert</strong> der Zuwanderer ist. Deshalb lohnt es sich, gezielt um
          kluge Köpfe (Studium, Ausbildung) zu werben - so wie es Kanada und Australien längst tun.
        </div>

        <div class="info-card">
          <strong>Was sind Sozialabgaben?</strong> Das sind die <strong>Beiträge zur gesetzlichen
          Kranken-, Renten- und Arbeitslosenversicherung</strong>. Wer arbeitet, zahlt davon
          automatisch jeden Monat einen Teil.
        </div>

        <h3>Noch mehr positive Folgen (allgemein)</h3>
        <ul>
          <li><strong>Gegen die Überalterung:</strong> Deutschland wird immer älter. Junge Zuwanderer
          arbeiten und zahlen in die Rentenkasse ein - das hilft den Renten.</li>
          <li><strong>Kulturelle Vielfalt:</strong> neue Ideen, Sprachen, Essen und Sichtweisen
          bereichern das Land.</li>
        </ul>

        <div class="why-context">
          <strong>Warum lernen wir das?</strong> In der Arbeit kommt genau die Buchaufgabe dran
          (S. 173, Nr. 3): <em>"Beschreibe die positiven Folgen der Zuwanderung für Deutschland (M2)."</em>
          Die drei Punkte oben sind deine Antwort.
        </div>

        <div class="tip-box">
          <strong>Merksatz für die Arbeit:</strong> Zuwanderung bringt <strong>Geld</strong> (mehr Steuern
          und Sozialabgaben als Kosten), <strong>Arbeitskräfte</strong> (gegen den Fachkräftemangel) und
          <strong>Vielfalt</strong> - und hilft gegen die Überalterung.
        </div>
      `
    },
    example: {
      title: "Beispiel: Eine Aufgabe wie in der Arbeit",
      steps: [
        {
          label: "Die Aufgabe",
          html: `<p><em>"Beschreibe zwei positive Folgen der Zuwanderung für Deutschland."</em>
            So eine Aufgabe könnte in der Arbeit stehen. Wie antwortest du?</p>`
        },
        {
          label: "Folge 1 ausformulieren",
          html: `<p>Eine positive Folge ist, dass Zuwanderer <strong>mehr Steuern und Sozialabgaben zahlen,
            als sie an Leistungen bekommen</strong>. Dadurch macht der Staat sogar einen Gewinn.</p>`
        },
        {
          label: "Folge 2 ausformulieren",
          html: `<p>Eine zweite positive Folge ist, dass Deutschland <strong>dringend Arbeitskräfte
            braucht</strong>. Zuwanderer schließen diese Lücke - besonders gut ausgebildete sind ein
            großer Gewinn für die Wirtschaft.</p>`
        }
      ]
    },
    exercisesIntro: "Denk an den Merksatz: Geld - Arbeitskräfte - Vielfalt (und gegen die Überalterung).",
    exercises: [
      {
        type: "multiple-choice",
        question: "Was sagt der Text M2 (\"Profitabel für das Land\") über Zuwanderer und Steuern?",
        options: [
          "Sie zahlen mehr Steuern und Sozialabgaben, als sie an Leistungen bekommen.",
          "Sie zahlen gar keine Steuern.",
          "Sie kosten den Staat unterm Strich sehr viel Geld.",
          "Steuern haben mit Zuwanderung nichts zu tun."
        ],
        correct: 0,
        explanation: "Richtig! Genau das ist die Kernaussage von M2: Unterm Strich zahlen Zuwanderer mehr ein, als sie herausbekommen - ein Gewinn für den Staat.",
        wrongExplanations: {
          1: "Im Gegenteil: Wer arbeitet, zahlt Steuern und Sozialabgaben. Der Text betont das ausdrücklich.",
          2: "Das ist genau die Stammtisch-Behauptung, die der Text mit Zahlen <em>widerlegt</em>. Sie zahlen mehr ein, als sie kosten.",
          3: "Doch - der Text rechnet ja gerade vor, dass Zuwanderer dem Staat mehr Steuern bringen."
        }
      },
      {
        type: "matching",
        question: "Ordne die positiven Folgen ihrer Erklärung zu:",
        pairs: [
          { left: "mehr Steuern", right: "Zuwanderer zahlen mehr ein, als sie kosten - Gewinn für den Staat" },
          { left: "Arbeitskräfte", right: "Deutschland braucht sie wegen des Fachkräftemangels" },
          { left: "gegen Überalterung", right: "junge Zuwanderer zahlen in die Rentenkasse ein" },
          { left: "Vielfalt", right: "neue Ideen, Sprachen und Kulturen bereichern das Land" }
        ],
        explanation: "Geld, Arbeitskräfte, Renten-Hilfe und Vielfalt - das sind die positiven Folgen."
      },
      {
        type: "fill-in-blank",
        question: "Ergänze: Was sind Sozialabgaben?",
        text: "Sozialabgaben sind die Beiträge zur gesetzlichen {{blank}}-, Renten- und {{blank}}versicherung.",
        blanks: [
          { correct: "Kranken", alternatives: ["kranken", "Krankenversicherung"] },
          { correct: "Arbeitslosen", alternatives: ["arbeitslosen", "Arbeitslosenversicherung"] }
        ],
        explanation: "Sozialabgaben = Kranken-, Renten- und Arbeitslosenversicherung."
      },
      {
        type: "free-text",
        question: "<strong>Klausuraufgabe (S. 173, Nr. 3):</strong> Beschreibe die positiven Folgen der Zuwanderung für Deutschland (nach M2). Schreibe 3-5 Sätze.",
        hint: "Nenne mindestens zwei bis drei Folgen und erkläre sie kurz. Denk an: Geld (Steuern/Sozialabgaben), Arbeitskräfte, Vielfalt.",
        minWords: 30,
        modelAnswer: "Zuwanderung hat für Deutschland mehrere positive Folgen. Erstens zahlen Zuwanderer unterm Strich mehr Steuern und Sozialabgaben, als sie an Leistungen bekommen - der Staat macht damit sogar einen Gewinn. Zweitens braucht Deutschland dringend Arbeitskräfte, weil viele Fachkräfte fehlen; Zuwanderer schließen diese Lücke, und je besser sie ausgebildet sind, desto größer ist der Nutzen. Drittens helfen junge Zuwanderer gegen die Überalterung, weil sie arbeiten und in die Rentenkasse einzahlen. Außerdem bringt Zuwanderung kulturelle Vielfalt mit neuen Ideen und Sichtweisen."
      }
    ]
  }

]);
