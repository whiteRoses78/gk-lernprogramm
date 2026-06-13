/**
 * Modul 3 - Fit fuer die Arbeit (GK-Arbeit).
 *   L7 Gemischte Uebungen (alle Themen quer durcheinander)
 *   L8 Probe-Arbeit (im Format der echten Klassenarbeit, mit Schreibaufgaben)
 *
 * Hier wird nichts Neues erklaert - hier wird geprueft, ob alles sitzt.
 * Themen: Erziehungsstile, Familienformen, Familienpolitik, Migration, Push/Pull, Folgen der Zuwanderung.
 */

window.LESSON_DATA = (window.LESSON_DATA || []).concat([

  // ===================================================================
  // Lektion 7: Gemischte Uebungen
  // ===================================================================
  {
    id: 7,
    title: "Gemischte Übungen (alle Themen)",
    explanation: {
      html: `
        <h2>Alles bunt gemischt</h2>
        <p>Jetzt kommt alles durcheinander - genau wie in der echten Arbeit. Hier wird nichts Neues
        erklärt. Wenn du bei einer Aufgabe hängst, schlag in der passenden Lektion nochmal nach.</p>

        <div class="tip-box">
          <strong>So lernst du am meisten:</strong> Versuch jede Aufgabe <em>erst selbst</em> zu lösen,
          bevor du auf eine Antwort tippst. Wenn etwas falsch ist, lies die Erklärung in Ruhe -
          daraus lernst du fürs nächste Mal.
        </div>

        <div class="why-context">
          <strong>Warum gemischt üben?</strong> In der Arbeit steht auch nicht alles thematisch sortiert.
          Wer zwischen den Themen hin- und herspringen kann, ist wirklich sicher.
        </div>
      `
    },
    exercisesIntro: "6 gemischte Aufgaben aus allen Themen. Viel Erfolg!",
    exercises: [
      {
        type: "multiple-choice",
        question: "<em>\"Lass uns gemeinsam eine faire Regel fürs Handy finden.\"</em> - Welcher Erziehungsstil?",
        options: ["demokratisch", "autoritär", "permissiv", "kein Stil"],
        correct: 0,
        explanation: "Richtig - gemeinsam aushandeln und begründen = demokratisch.",
        wrongExplanations: {
          1: "Autoritär wäre ein Befehl mit Strafe. Hier wird gemeinsam verhandelt = demokratisch.",
          2: "Permissiv wäre gar keine Regel. Hier sucht man zusammen eine Regel = demokratisch.",
          3: "Doch: gemeinsam eine Regel aushandeln ist typisch demokratisch."
        }
      },
      {
        type: "matching",
        question: "Wildes Durcheinander - ordne richtig zu:",
        pairs: [
          { left: "Patchworkfamilie", right: "Kinder aus früheren Beziehungen der Eltern" },
          { left: "Elternzeit", right: "Freistellung von der Arbeit, bis zu 3 Jahre" },
          { left: "Push-Faktor", right: "Krieg in der Heimat" },
          { left: "Pull-Faktor", right: "Sicherheit im Zielland" },
          { left: "Migration", right: "dauerhafte Verlegung des Wohnsitzes über eine Grenze" }
        ],
        explanation: "Fünf Begriffe aus vier verschiedenen Lektionen - wenn du das kannst, sitzt der Stoff."
      },
      {
        type: "fill-in-blank",
        question: "Familienpolitik - fülle die Lücken:",
        text: "Eltern{{blank}} ist Geld als Lohnersatz nach der Geburt. Eltern{{blank}} ist die Freistellung von der Arbeit. Ein Kind hat ab dem 1. Lebensjahr ein Recht auf einen {{blank}}.",
        blanks: [
          { correct: "geld", alternatives: ["Geld"] },
          { correct: "zeit", alternatives: ["Zeit"] },
          { correct: "Betreuungsplatz", alternatives: ["betreuungsplatz", "Kita-Platz", "Kitaplatz"] }
        ],
        explanation: "Elterngeld = Geld, Elternzeit = Freistellung, Betreuungsplatz = Recht ab dem 1. Geburtstag."
      },
      {
        type: "multiple-choice",
        question: "Welcher Grund ist ein Pull-Faktor (zieht ins neue Land)?",
        options: ["gute Arbeitsplätze und Sicherheit", "Krieg und Verfolgung", "Hunger und Armut", "eine Flutkatastrophe"],
        correct: 0,
        explanation: "Richtig - gute Jobs und Sicherheit locken ins Zielland = Pull-Faktoren.",
        wrongExplanations: {
          1: "Krieg und Verfolgung treiben aus der Heimat weg = Push-Faktoren.",
          2: "Hunger und Armut sind wirtschaftliche Push-Faktoren (sie treiben weg).",
          3: "Eine Flutkatastrophe ist ein Umwelt-Push-Faktor."
        }
      },
      {
        type: "multiple-choice",
        question: "Eine Familie mit Oma, Opa, Eltern und Kindern im selben Haushalt ist eine ...?",
        options: ["Großfamilie", "Kernfamilie", "Regenbogenfamilie", "Patchworkfamilie"],
        correct: 0,
        explanation: "Richtig - mehrere Generationen zusammen = Großfamilie.",
        wrongExplanations: {
          1: "Kernfamilie ist nur Eltern + Kinder, ohne Großeltern.",
          2: "Regenbogenfamilie hieße zwei gleichgeschlechtliche Eltern.",
          3: "Patchwork hieße: Kinder aus früheren Beziehungen."
        }
      },
      {
        type: "free-text",
        question: "Erkläre in 2-3 Sätzen, warum ein Tourist kein Migrant ist.",
        hint: "Das Schlüsselwort ist 'dauerhaft'. Vergleiche Urlaub und Umzug.",
        minWords: 15,
        modelAnswer: "Ein Tourist ist kein Migrant, weil er seinen Wohnsitz nicht dauerhaft verlegt. Migration bedeutet eine dauerhafte Verlegung des Wohnsitzes über eine Grenze. Ein Tourist ist nur vorübergehend im Ausland und kehrt danach wieder in seine Heimat zurück."
      }
    ]
  },

  // ===================================================================
  // Lektion 8: Probe-Arbeit
  // ===================================================================
  {
    id: 8,
    title: "Probe-Arbeit",
    explanation: {
      html: `
        <h2>Die Probe-Arbeit - so läuft die echte Arbeit ab</h2>
        <p>Diese Übung ist wie eine kleine Klassenarbeit aufgebaut. Mach sie am besten, wenn du dich
        schon sicher fühlst - am liebsten in einem Rutsch und ohne nachzuschlagen.</p>

        <div class="tip-box">
          <strong>So holst du das Beste raus:</strong><br>
          - Nimm dir 20-30 Minuten in Ruhe.<br>
          - Antworte bei den Schreibaufgaben in <strong>ganzen Sätzen</strong>.<br>
          - Erst <em>selbst</em> schreiben, dann die Musterlösung aufdecken und vergleichen.
        </div>

        <div class="why-context">
          <strong>Das kommt laut Lernplan dran:</strong> drei Erziehungsstile (+ welcher am besten),
          Familienformen, Familienpolitik, der Begriff Migration, Push- und Pull-Faktoren sowie die
          positiven Folgen der Zuwanderung (M2).
        </div>
      `
    },
    exercisesIntro: "Stell dir vor, das hier ist die echte Arbeit. Los geht's!",
    exercises: [
      {
        type: "free-text",
        question: "<strong>Aufgabe 1:</strong> Beschreibe die drei Erziehungsstile (autoritär, demokratisch, permissiv) jeweils in einem Satz.",
        hint: "Pro Stil ein Kennzeichen: autoritär = Befehl/Strafe, demokratisch = gemeinsam/begründet, permissiv = keine Regeln.",
        minWords: 25,
        modelAnswer: "Beim autoritären Erziehungsstil gilt Befehl und Gehorsam: Die Eltern bestimmen alles und bestrafen Fehlverhalten. Beim demokratischen Erziehungsstil begegnen sich Eltern und Kind auf Augenhöhe, es gibt klare, aber begründete Regeln, und Konflikte werden gemeinsam gelöst. Beim permissiven Erziehungsstil halten sich die Eltern zurück, es gibt kaum Regeln, und das Kind entscheidet fast alles selbst."
      },
      {
        type: "free-text",
        question: "<strong>Aufgabe 2:</strong> Welcher Erziehungsstil ist deiner Meinung nach am besten? Begründe.",
        hint: "Erst Stil nennen, dann mit Vor- und Nachteilen begründen (Vergleich mit den anderen beiden).",
        minWords: 25,
        modelAnswer: "Ich halte den demokratischen Erziehungsstil für den besten. Beim autoritären Stil gehorcht das Kind nur aus Angst und wird unselbstständig, beim permissiven Stil fehlen ihm Grenzen und Orientierung. Der demokratische Stil verbindet beides: klare, aber begründete Regeln und gleichzeitig Mitsprache. So lernt das Kind Selbstständigkeit und Verantwortung, ohne den Halt zu verlieren."
      },
      {
        type: "matching",
        question: "<strong>Aufgabe 3:</strong> Ordne die Familienformen ihren Erklärungen zu.",
        pairs: [
          { left: "Kernfamilie", right: "Eltern mit ihren minderjährigen Kindern" },
          { left: "Großfamilie", right: "mehrere Generationen in einem Haushalt" },
          { left: "Patchworkfamilie", right: "Kinder aus früheren Beziehungen" },
          { left: "Regenbogenfamilie", right: "zwei gleichgeschlechtliche Eltern" }
        ],
        explanation: "Diese vier Familienformen solltest du sicher beschreiben können."
      },
      {
        type: "fill-in-blank",
        question: "<strong>Aufgabe 4:</strong> Vervollständige die Definition von Migration.",
        text: "Migration bedeutet eine {{blank}} Verlegung des Wohnsitzes über eine {{blank}} hinweg. Deshalb sind {{blank}} keine Migranten, weil sie nur vorübergehend im Ausland sind.",
        blanks: [
          { correct: "dauerhafte", alternatives: ["dauerhaft"] },
          { correct: "Grenze", alternatives: ["grenze", "Landesgrenze"] },
          { correct: "Touristen", alternatives: ["touristen", "Urlauber"] }
        ],
        explanation: "Dauerhaft + über eine Grenze. Touristen sind nur vorübergehend weg, also keine Migranten."
      },
      {
        type: "multiple-choice",
        question: "<strong>Aufgabe 5:</strong> Welche Reihe enthält nur Push-Faktoren?",
        options: [
          "Krieg, Armut, Dürre",
          "Sicherheit, gute Jobs, Schulbildung",
          "Krieg, Sicherheit, Armut",
          "gute Jobs, Hunger, Schulbildung"
        ],
        correct: 0,
        explanation: "Richtig! Krieg (politisch), Armut (wirtschaftlich) und Dürre (Umwelt) treiben alle aus der Heimat weg = Push-Faktoren.",
        wrongExplanations: {
          1: "Das sind alles Pull-Faktoren - sie ziehen ins neue Land, sie treiben nicht weg.",
          2: "Gemischt: Krieg und Armut sind Push, aber Sicherheit ist ein Pull-Faktor.",
          3: "Gemischt: Hunger ist Push, aber gute Jobs und Schulbildung sind Pull-Faktoren."
        }
      },
      {
        type: "free-text",
        question: "<strong>Aufgabe 6:</strong> Beschreibe zwei positive Folgen der Zuwanderung für Deutschland (M2).",
        hint: "Denk an: Geld (mehr Steuern/Sozialabgaben als Kosten), Arbeitskräfte gegen den Fachkräftemangel, Vielfalt.",
        minWords: 25,
        modelAnswer: "Eine positive Folge ist, dass Zuwanderer unterm Strich mehr Steuern und Sozialabgaben zahlen, als sie an Leistungen bekommen - der Staat macht damit sogar einen Gewinn. Eine zweite positive Folge ist, dass Deutschland dringend Arbeitskräfte braucht, weil viele Fachkräfte fehlen. Zuwanderer schließen diese Lücke, und besonders gut ausgebildete sind ein großer Gewinn für die Wirtschaft."
      }
    ]
  }

]);
