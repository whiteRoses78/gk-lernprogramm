/**
 * Modul 1 - Familie & Erziehung (GK-Arbeit).
 *   L1 Die drei Erziehungsstile (autoritaer, demokratisch, permissiv) - Buch S. 128
 *   L2 Familienformen (Kern-, Gross-, Patchwork-, Regenbogenfamilie) - Buch S. 134 (M1)
 *   L3 Familienpolitik: Kindergeld, Elterngeld, Elternzeit, Betreuungsplatz - Buch S. 134 (M1)
 *
 * Jede Lektion: Erklaerung (mit Analogie/Tipp/Warnung) -> Beispiel -> Uebungen.
 * Zielgruppe: Leonie, Klasse 8, Realschule BW, M-Niveau. Einfache Sprache, Alltagsanalogien.
 */

window.LESSON_DATA = (window.LESSON_DATA || []).concat([

  // ===================================================================
  // Lektion 1: Die drei Erziehungsstile
  // ===================================================================
  {
    id: 1,
    title: "Die drei Erziehungsstile",
    explanation: {
      html: `
        <h2>Wie erziehen Eltern? Drei Stile</h2>
        <p>Wenn es in der Familie Streit gibt - zum Beispiel ums Aufräumen oder ums Handy -
        reagieren Eltern ganz unterschiedlich. In der Gemeinschaftskunde unterscheidet man
        <strong>drei Erziehungsstile</strong>. Die mit sehr unterschiedlichen Folgen für das Kind.</p>

        <div class="analogy-box">
          <strong>Stell dir drei Fußball-Trainer vor:</strong><br>
          - Der <strong>autoritäre Trainer</strong> bestimmt alles allein. Widerrede gibt es nicht,
          wer einen Fehler macht, muss Strafrunden laufen.<br>
          - Der <strong>demokratische Trainer</strong> bespricht die Taktik mit dem Team. Es gibt klare
          Regeln, aber er erklärt auch, warum.<br>
          - Der <strong>permissive Trainer</strong> lässt die Mannschaft einfach machen. Er mischt sich
          fast nie ein - jeder spielt, wie er will.
        </div>

        <svg viewBox="0 0 420 92" role="img" aria-label="Spektrum der Erziehungsstile: autoritaer hat viele Regeln, permissiv keine, demokratisch liegt als Mittelweg dazwischen" style="max-width:400px;width:100%;height:auto;display:block;margin:1rem auto;font-family:sans-serif;">
          <line x1="45" y1="42" x2="375" y2="42" stroke="#9ca3af" stroke-width="3"/>
          <text x="45" y="20" font-size="11" fill="#6b7280">viele Regeln</text>
          <text x="375" y="20" text-anchor="end" font-size="11" fill="#6b7280">keine Regeln</text>
          <circle cx="75" cy="42" r="8" fill="#dc2626"/>
          <circle cx="210" cy="42" r="10" fill="#16a34a"/>
          <circle cx="345" cy="42" r="8" fill="#ca8a04"/>
          <text x="75" y="68" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="bold">autoritär</text>
          <text x="210" y="68" text-anchor="middle" font-size="12" fill="#16a34a" font-weight="bold">demokratisch</text>
          <text x="345" y="68" text-anchor="middle" font-size="12" fill="#ca8a04" font-weight="bold">permissiv</text>
          <text x="210" y="85" text-anchor="middle" font-size="10" fill="#16a34a">der goldene Mittelweg</text>
        </svg>

        <h3>1. Autoritärer Erziehungsstil</h3>
        <p><em>"Du machst das, weil ich es sage!"</em> Hier gilt <strong>Befehl und Gehorsam</strong>.
        Die Eltern bestimmen, das Kind hat zu folgen. Auf die Wünsche des Kindes wird wenig Rücksicht
        genommen. Es gibt <strong>strenge Regeln</strong>: Gutes Verhalten wird belohnt, Fehlverhalten
        mit <strong>Strafen</strong> bestraft. Typische Sätze: <em>"Du musst..."</em>, <em>"Mach das sofort!"</em></p>

        <h3>2. Demokratischer Erziehungsstil</h3>
        <p>Eltern und Kind begegnen sich <strong>auf Augenhöhe</strong>. Das Kind wird ernst genommen
        und darf bei wichtigen Entscheidungen mitreden. Es gibt zwar <strong>klare Regeln und Grenzen</strong>,
        aber sie werden <strong>erklärt und begründet</strong>. Bei Streit suchen alle gemeinsam nach einer
        Lösung. Beispiel: <em>"Wenn du dein Zimmer aufgeräumt hast, gehen wir zusammen raus."</em></p>

        <h3>3. Permissiver Erziehungsstil</h3>
        <p>Die Eltern halten sich <strong>fast völlig zurück</strong>. Es gibt kaum Regeln, kaum Grenzen
        und keine Konsequenzen. Geholfen wird nur, wenn das Kind selbst darum bittet. Das Kind entscheidet
        fast alles selbst. Das Motto: <em>"Mach, wenn du möchtest."</em>
        <span class="hinweis">(Permissiv bedeutet "erlaubend, nachgiebig".)</span></p>

        <h3>Vor- und Nachteile im Vergleich</h3>
        <table class="icon-table">
          <tr><th>Stil</th><th>Vorteile</th><th>Nachteile</th></tr>
          <tr>
            <td><strong>autoritär</strong></td>
            <td>klare Regeln, das Kind weiß genau, was erlaubt ist; Ordnung und Orientierung</td>
            <td>Angst statt Verständnis; das Kind wird unselbstständig oder rebelliert; wenig Selbstvertrauen</td>
          </tr>
          <tr>
            <td><strong>demokratisch</strong></td>
            <td>das Kind lernt Selbstständigkeit und Verantwortung; gutes Selbstvertrauen; man kann über alles reden</td>
            <td>kostet Zeit und Geduld; ständiges Aushandeln kann anstrengend sein</td>
          </tr>
          <tr>
            <td><strong>permissiv</strong></td>
            <td>viel Freiheit; das Kind kann sich frei entfalten</td>
            <td>keine Orientierung; das Kind ist oft überfordert; lernt kaum Rücksicht und Grenzen</td>
          </tr>
        </table>

        <div class="why-context">
          <strong>Warum lernen wir das?</strong> In der Arbeit sollst du die drei Stile nicht nur
          <em>beschreiben</em>, sondern auch <em>begründen</em>, welcher am besten ist. Dafür musst du die
          Vor- und Nachteile kennen - die stehen oben in der Tabelle.
        </div>

        <div class="tip-box">
          <strong>So beantwortest du "Welcher Stil ist am besten?":</strong> Die meisten nennen den
          <strong>demokratischen</strong> Stil - und begründen das so: Das Kind bekommt <em>beides</em>,
          nämlich <strong>klare Grenzen</strong> (wie beim autoritären) <strong>und Freiheit/Mitsprache</strong>
          (wie beim permissiven). So lernt es Selbstständigkeit, ohne die Orientierung zu verlieren.
          Er ist also der <em>goldene Mittelweg</em>.
        </div>

        <div class="warning-box">
          <strong>Typischer Fehler:</strong> "Autoritär" und "autoritativ" verwechseln. In deinem Buch
          heißt der strenge Stil <strong>autoritär</strong> (Befehl und Gehorsam). Verwechsle ihn auch
          nicht mit <strong>permissiv</strong> - permissiv ist das genaue Gegenteil: dort gibt es fast
          keine Regeln.
        </div>
      `
    },
    example: {
      title: "Beispiel: Leonie will länger am Handy bleiben",
      steps: [
        {
          label: "Die Situation",
          html: `<p>Es ist 22 Uhr, eigentlich Schlafenszeit. Leonie möchte aber noch eine Stunde am
            Handy bleiben. Wie reagieren Eltern in den drei Stilen?</p>`
        },
        {
          label: "Autoritär",
          html: `<p><em>"Handy aus, sofort ins Bett - keine Diskussion! Sonst ist das Handy morgen weg."</em><br>
            &rarr; Befehl, keine Begründung, Strafe angedroht. Das ist <strong>autoritär</strong>.</p>`
        },
        {
          label: "Demokratisch",
          html: `<p><em>"Ich verstehe, dass es spannend ist. Aber morgen ist Schule und du brauchst Schlaf.
            Wir hatten 21:30 Uhr abgemacht. Heute noch 10 Minuten, dann ist Schluss - okay?"</em><br>
            &rarr; Das Kind wird ernst genommen, die Regel wird begründet, man findet einen Kompromiss.
            Das ist <strong>demokratisch</strong>.</p>`
        },
        {
          label: "Permissiv",
          html: `<p><em>"Mach, was du möchtest, ich sag da nichts."</em><br>
            &rarr; Keine Regel, keine Grenze. Das ist <strong>permissiv</strong>.</p>`
        }
      ]
    },
    exercisesIntro: "Achte bei jedem Beispiel auf die <strong>Signale</strong>: Befehl + Strafe = autoritär, gemeinsam reden + begründen = demokratisch, keine Regeln = permissiv.",
    exercises: [
      {
        type: "multiple-choice",
        question: "<em>\"Mach deine Hausaufgaben sofort, sonst gibt es zwei Wochen Hausarrest!\"</em> - Welcher Erziehungsstil ist das?",
        options: ["autoritär", "demokratisch", "permissiv", "kein bestimmter Stil"],
        correct: 0,
        explanation: "Richtig! Ein Befehl (\"sofort\") plus eine angedrohte Strafe (Hausarrest), ohne Begründung - das ist typisch <strong>autoritär</strong>.",
        wrongExplanations: {
          1: "Demokratisch wäre es, wenn die Eltern die Regel begründen und gemeinsam mit dem Kind eine Lösung suchen. Hier wird nur befohlen und gedroht.",
          2: "Permissiv wäre genau das Gegenteil: gar keine Vorgaben. Hier gibt es einen strengen Befehl - das ist autoritär.",
          3: "Doch, das ist ein klarer Stil: Befehl + Strafe = autoritär."
        }
      },
      {
        type: "multiple-choice",
        question: "Welcher Erziehungsstil gilt meistens als der beste - und warum?",
        options: [
          "der demokratische, weil das Kind Grenzen UND Mitsprache bekommt",
          "der autoritäre, weil strenge Strafen am meisten bringen",
          "der permissive, weil Kinder ganz ohne Regeln am glücklichsten sind",
          "es ist völlig egal, alle Stile sind gleich gut"
        ],
        correct: 0,
        explanation: "Genau! Der <strong>demokratische</strong> Stil ist der goldene Mittelweg: klare Grenzen wie beim autoritären, aber auch Freiheit und Mitsprache wie beim permissiven. So lernt das Kind Selbstständigkeit mit Orientierung.",
        wrongExplanations: {
          1: "Strafen erzeugen oft Angst statt Verständnis und machen Kinder unselbstständig. Der autoritäre Stil gilt nicht als der beste.",
          2: "Ganz ohne Regeln fehlt Kindern die Orientierung - sie sind oft überfordert. Der permissive Stil gilt nicht als der beste.",
          3: "Die Stile haben sehr unterschiedliche Folgen. In der Arbeit sollst du ja gerade begründen, welcher am besten ist."
        }
      },
      {
        type: "matching",
        question: "Ordne jedem Erziehungsstil den passenden Satz zu:",
        pairs: [
          { left: "autoritär", right: "\"Das machst du, weil ich es sage - sonst gibt es Strafe!\"" },
          { left: "demokratisch", right: "\"Lass uns gemeinsam eine Regel finden, die für beide passt.\"" },
          { left: "permissiv", right: "\"Mach einfach, was du möchtest, ich mische mich nicht ein.\"" }
        ],
        explanation: "Befehl + Strafe = autoritär, gemeinsam aushandeln = demokratisch, keine Vorgaben = permissiv."
      },
      {
        type: "fill-in-blank",
        question: "Fülle die Lücken zum demokratischen Erziehungsstil:",
        text: "Beim demokratischen Erziehungsstil begegnen sich Eltern und Kind auf {{blank}}. Es gibt zwar klare {{blank}}, aber sie werden begründet. Bei Streit suchen alle gemeinsam nach einer {{blank}}.",
        blanks: [
          { correct: "Augenhöhe", alternatives: ["augenhoehe", "augenhöhe"] },
          { correct: "Regeln", alternatives: ["Regeln und Grenzen", "Grenzen"] },
          { correct: "Lösung", alternatives: ["loesung", "lösung", "Kompromiss"] }
        ],
        explanation: "Augenhöhe, klare Regeln (die begründet werden) und gemeinsame Lösungssuche sind die Kennzeichen des demokratischen Stils."
      },
      {
        type: "free-text",
        question: "<strong>Klausuraufgabe (S. 128):</strong> Welcher Erziehungsstil ist deiner Meinung nach am besten? Begründe deine Antwort in 3-5 Sätzen.",
        hint: "Nenne zuerst klar einen Stil. Dann begründe mit den Vor- und Nachteilen. Tipp: Vergleiche ihn mit den beiden anderen.",
        minWords: 25,
        modelAnswer: "Ich finde den demokratischen Erziehungsstil am besten. Beim autoritären Stil hat das Kind zwar klare Regeln, aber es lernt aus Angst zu gehorchen und wird unselbstständig. Beim permissiven Stil fehlen dagegen Grenzen, sodass das Kind oft überfordert ist und keine Orientierung hat. Der demokratische Stil verbindet das Beste aus beiden: Es gibt klare Regeln, aber sie werden begründet, und das Kind darf mitreden. So lernt es Verantwortung und Selbstständigkeit, ohne den Halt zu verlieren."
      }
    ]
  },

  // ===================================================================
  // Lektion 2: Familienformen
  // ===================================================================
  {
    id: 2,
    title: "Familienformen",
    explanation: {
      html: `
        <h2>Familie ist nicht gleich Familie</h2>
        <p>Früher dachten viele bei "Familie" nur an Vater, Mutter und Kinder. Heute leben Menschen
        in ganz <strong>verschiedenen Familienformen</strong> zusammen - und alle sind Familie.</p>

        <div class="analogy-box">
          <strong>Wie Eis-Sorten:</strong> Eis ist Eis - aber es gibt Vanille, Schoko, Erdbeere und
          viele Mischungen. Genauso ist Familie Familie, nur in verschiedenen "Sorten". Du musst die
          wichtigsten Sorten am Namen und an einem typischen Merkmal erkennen.
        </div>

        <h3>Die wichtigsten Familienformen</h3>
        <table class="icon-table">
          <tr><th>Familienform</th><th>Das musst du dir merken</th></tr>
          <tr>
            <td><strong>Kernfamilie</strong></td>
            <td>Eltern leben mit ihren <strong>eigenen, minderjährigen Kindern</strong> in einem Haushalt.
            Die "klassische" Kleinfamilie: Mama, Papa, Kind(er).</td>
          </tr>
          <tr>
            <td><strong>Großfamilie</strong></td>
            <td>Mehrere <strong>Generationen</strong> leben zusammen in einem Haushalt -
            z.B. Großeltern, Eltern und Kinder unter einem Dach.</td>
          </tr>
          <tr>
            <td><strong>Patchworkfamilie</strong></td>
            <td>Eine "zusammengewürfelte" Familie: Die Kinder stammen aus <strong>früheren Beziehungen</strong>
            der Eltern. Oft "meine, deine und unsere" Kinder.</td>
          </tr>
          <tr>
            <td><strong>Regenbogenfamilie</strong></td>
            <td>Eine Familie mit <strong>zwei gleichgeschlechtlichen Eltern</strong> -
            also zwei Mütter oder zwei Väter mit Kind(ern).</td>
          </tr>
          <tr>
            <td><strong>Alleinerziehende</strong><br>(Einelternfamilie)</td>
            <td><strong>Ein Elternteil</strong> lebt allein mit dem Kind / den Kindern zusammen.</td>
          </tr>
        </table>

        <div class="why-context">
          <strong>Warum lernen wir das?</strong> Im Buch (S. 134) gibt es ein Memory-Spiel, bei dem du
          Begriffe und Erklärungen zusammenbringen musst. In der Arbeit sollst du jede Familienform
          <strong>am Namen erklären</strong> können - genau das übst du hier.
        </div>

        <div class="tip-box">
          <strong>Merkhilfen:</strong><br>
          - <strong>Patch</strong>work kommt vom englischen "patch" = Flicken. Aus mehreren Teilen
          zusammengeflickt - wie eine Decke aus Stoffresten.<br>
          - <strong>Regen</strong>bogen = die bunte Fahne steht für gleichgeschlechtliche Liebe.<br>
          - <strong>Kern</strong> = der innerste, kleinste Teil: nur Eltern + Kinder.
        </div>

        <div class="warning-box">
          <strong>Achtung:</strong> Eine <strong>Großfamilie</strong> ist nicht einfach eine Familie
          mit vielen Kindern! Entscheidend ist, dass mehrere <strong>Generationen zusammen</strong>
          in einem Haushalt leben (Oma/Opa mit dabei).
        </div>
      `
    },
    example: {
      title: "Beispiel: Welche Familienform ist das?",
      steps: [
        {
          label: "Familie A",
          html: `<p><em>Mia lebt mit ihrer Mutter, ihrem Stiefvater und dessen Sohn aus erster Ehe
            zusammen.</em><br>&rarr; Die Kinder stammen aus früheren Beziehungen &rarr;
            <strong>Patchworkfamilie</strong>.</p>`
        },
        {
          label: "Familie B",
          html: `<p><em>Tom wohnt mit seinen Eltern und seinen Großeltern im selben Haus.</em><br>
            &rarr; Drei Generationen unter einem Dach &rarr; <strong>Großfamilie</strong>.</p>`
        },
        {
          label: "Familie C",
          html: `<p><em>Lena lebt mit ihren zwei Müttern zusammen.</em><br>
            &rarr; Zwei gleichgeschlechtliche Eltern &rarr; <strong>Regenbogenfamilie</strong>.</p>`
        }
      ]
    },
    exercisesIntro: "Tipp: Frag dich immer - <strong>Wer</strong> wohnt zusammen? Daran erkennst du die Familienform.",
    exercises: [
      {
        type: "matching",
        question: "Ordne jeder Familienform die richtige Erklärung zu:",
        pairs: [
          { left: "Kernfamilie", right: "Eltern leben mit ihren minderjährigen Kindern in einem Haushalt." },
          { left: "Großfamilie", right: "Mehrere Generationen leben zusammen in einem Haushalt." },
          { left: "Patchworkfamilie", right: "Die Kinder stammen aus früheren Beziehungen der Eltern." },
          { left: "Regenbogenfamilie", right: "Die Kinder leben mit zwei gleichgeschlechtlichen Eltern." }
        ],
        explanation: "Genau diese vier Begriffe kommen im Memory (M1, S. 134) und in der Arbeit dran."
      },
      {
        type: "multiple-choice",
        question: "Eine Oma, ihre Tochter und deren Kinder leben alle zusammen in einem Haus. Welche Familienform ist das?",
        options: ["Großfamilie", "Kernfamilie", "Patchworkfamilie", "Regenbogenfamilie"],
        correct: 0,
        explanation: "Richtig! Drei Generationen (Oma - Mutter - Kinder) unter einem Dach = <strong>Großfamilie</strong>.",
        wrongExplanations: {
          1: "Die Kernfamilie ist nur Eltern + ihre Kinder. Hier wohnt aber auch die Oma mit - das macht es zur Großfamilie.",
          2: "Patchwork wäre es, wenn die Kinder aus früheren Beziehungen stammen würden. Hier geht es um mehrere Generationen = Großfamilie.",
          3: "Regenbogenfamilie hieße: zwei gleichgeschlechtliche Eltern. Davon steht hier nichts. Mehrere Generationen = Großfamilie."
        }
      },
      {
        type: "fill-in-blank",
        question: "Vervollständige die Definitionen:",
        text: "Bei der {{blank}} leben Eltern mit ihren eigenen minderjährigen Kindern zusammen. Bei der {{blank}} stammen die Kinder aus früheren Beziehungen der Eltern.",
        blanks: [
          { correct: "Kernfamilie", alternatives: ["kernfamilie"] },
          { correct: "Patchworkfamilie", alternatives: ["patchworkfamilie", "Patchwork", "Patchwork-Familie"] }
        ],
        explanation: "Kernfamilie = Eltern + eigene Kinder. Patchworkfamilie = Kinder aus früheren Beziehungen."
      },
      {
        type: "multiple-choice",
        question: "Welche Aussage über die Regenbogenfamilie stimmt?",
        options: [
          "In ihr leben Kinder mit zwei gleichgeschlechtlichen Eltern.",
          "In ihr leben besonders viele Kinder.",
          "In ihr leben drei Generationen zusammen.",
          "In ihr lebt nur ein Elternteil mit dem Kind."
        ],
        correct: 0,
        explanation: "Richtig! Regenbogenfamilie = zwei Mütter oder zwei Väter mit Kind(ern).",
        wrongExplanations: {
          1: "Mit der Kinderzahl hat die Regenbogenfamilie nichts zu tun. Entscheidend sind zwei gleichgeschlechtliche Eltern.",
          2: "Drei Generationen zusammen wäre die Großfamilie. Regenbogenfamilie = zwei gleichgeschlechtliche Eltern.",
          3: "Nur ein Elternteil wäre eine Einelternfamilie (Alleinerziehende). Regenbogenfamilie = zwei gleichgeschlechtliche Eltern."
        }
      }
    ]
  },

  // ===================================================================
  // Lektion 3: Familienpolitik - was der Staat zahlt
  // ===================================================================
  {
    id: 3,
    title: "Familienpolitik – was der Staat zahlt",
    explanation: {
      html: `
        <h2>Wie der Staat Familien unterstützt</h2>
        <p>Kinder kosten Geld und Zeit. Damit Eltern das schaffen, hilft der Staat mit verschiedenen
        Leistungen. Vier davon solltest du sicher kennen und <strong>auseinanderhalten</strong> können.</p>

        <div class="analogy-box">
          <strong>Stell dir den Staat wie einen Trainer vor,</strong> der seinem Team (den Familien) hilft:
          Mal gibt er <em>Geld</em> (Kindergeld, Elterngeld), mal gibt er <em>Zeit</em> (Elternzeit),
          mal sorgt er für einen <em>Platz</em> (Betreuungsplatz in der Kita). Merke dir bei jeder
          Leistung: Ist es Geld, Zeit oder ein Platz?
        </div>

        <svg viewBox="0 0 420 118" role="img" aria-label="Drei Schubladen: Geld (Kindergeld, Elterngeld), Zeit (Elternzeit), Platz (Betreuungsplatz)" style="max-width:400px;width:100%;height:auto;display:block;margin:1rem auto;font-family:sans-serif;">
          <rect x="12" y="22" width="124" height="84" rx="8" fill="#eff6ff" stroke="#2563EB" stroke-width="2"/>
          <text x="74" y="46" text-anchor="middle" font-size="14" fill="#1d4ed8" font-weight="bold">GELD</text>
          <text x="74" y="70" text-anchor="middle" font-size="11" fill="#1f2937">Kindergeld</text>
          <text x="74" y="88" text-anchor="middle" font-size="11" fill="#1f2937">Elterngeld</text>
          <rect x="148" y="22" width="124" height="84" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
          <text x="210" y="46" text-anchor="middle" font-size="14" fill="#15803d" font-weight="bold">ZEIT</text>
          <text x="210" y="74" text-anchor="middle" font-size="11" fill="#1f2937">Elternzeit</text>
          <rect x="284" y="22" width="124" height="84" rx="8" fill="#fef3c7" stroke="#ca8a04" stroke-width="2"/>
          <text x="346" y="46" text-anchor="middle" font-size="14" fill="#a16207" font-weight="bold">PLATZ</text>
          <text x="346" y="74" text-anchor="middle" font-size="10.5" fill="#1f2937">Betreuungsplatz</text>
        </svg>

        <h3>Die vier wichtigsten Leistungen</h3>
        <table class="icon-table">
          <tr><th>Leistung</th><th>Was ist das?</th></tr>
          <tr>
            <td><strong>Kindergeld</strong><br><span class="hinweis">(Geld)</span></td>
            <td>Der Staat zahlt <strong>jeden Monat Geld pro Kind</strong> (rund 255 € im Monat).
            Es gibt das Kindergeld bis 18 - und weiter bis 25, wenn das Kind noch in der
            <strong>Ausbildung</strong> oder im Studium ist.</td>
          </tr>
          <tr>
            <td><strong>Elterngeld</strong><br><span class="hinweis">(Geld)</span></td>
            <td>Wenn ein Elternteil nach der Geburt zu Hause beim Baby bleibt und deshalb weniger
            arbeitet, <strong>ersetzt der Staat einen Teil des fehlenden Lohns</strong> (ca. zwei Drittel),
            für bis zu 14 Monate.</td>
          </tr>
          <tr>
            <td><strong>Elternzeit</strong><br><span class="hinweis">(Zeit)</span></td>
            <td>Eltern dürfen sich nach der Geburt <strong>bis zu 3 Jahre (36 Monate) von der Arbeit
            freistellen</strong> lassen, um sich um das Kind zu kümmern. Der <strong>Arbeitsplatz bleibt
            erhalten</strong> - danach darf man zurück in den Job.</td>
          </tr>
          <tr>
            <td><strong>Betreuungsplatz</strong><br><span class="hinweis">(Platz)</span></td>
            <td>Jedes Kind hat <strong>ab dem vollendeten 1. Lebensjahr ein Recht auf einen
            Betreuungsplatz</strong> (Kita oder Tagesmutter). So können die Eltern wieder arbeiten gehen.</td>
          </tr>
        </table>

        <div class="why-context">
          <strong>Warum lernen wir das?</strong> Diese Begriffe stecken im Memory M1 (S. 134) - nicht nur
          die Familien-Namen, sondern auch die "Nicht-Familie"-Begriffe wie Elterngeld und Betreuungsplatz.
          In der Arbeit musst du sie <strong>beschreiben</strong> können.
        </div>

        <div class="warning-box">
          <strong>Der Klassiker zum Verwechseln: Elterngeld &harr; Elternzeit!</strong><br>
          - Eltern<strong>geld</strong> = <strong>Geld</strong> (Ersatz für den fehlenden Lohn).<br>
          - Eltern<strong>zeit</strong> = <strong>Zeit</strong> (Freistellung von der Arbeit, Job bleibt sicher).<br>
          Eselsbrücke: Das Wort verrät es - im "Geld" steckt Geld, in der "Zeit" steckt Zeit.
        </div>

        <div class="tip-box">
          <strong>Prüf-Trick:</strong> Sortiere jede Leistung in eine Schublade -
          <em>Geld</em> (Kindergeld, Elterngeld), <em>Zeit</em> (Elternzeit) oder <em>Platz</em>
          (Betreuungsplatz). Dann verwechselst du nichts mehr.
        </div>
      `
    },
    example: {
      title: "Beispiel: Familie Bauer bekommt ein Baby",
      steps: [
        {
          label: "Die Situation",
          html: `<p>Bei Familie Bauer wird ein Baby geboren. Welche staatlichen Leistungen können sie nutzen?</p>`
        },
        {
          label: "Zeit zum Kümmern",
          html: `<p>Frau Bauer möchte erstmal zu Hause beim Baby bleiben. Sie nimmt <strong>Elternzeit</strong>
            - sie wird bis zu 3 Jahre von der Arbeit freigestellt, ihr Job bleibt aber sicher.</p>`
        },
        {
          label: "Geld in dieser Zeit",
          html: `<p>Weil ihr in dieser Zeit der Lohn fehlt, bekommt sie <strong>Elterngeld</strong> -
            der Staat ersetzt etwa zwei Drittel ihres früheren Einkommens, für bis zu 14 Monate.</p>`
        },
        {
          label: "Geld jeden Monat + Platz",
          html: `<p>Zusätzlich bekommt die Familie für das Kind jeden Monat <strong>Kindergeld</strong>.
            Wenn das Kind 1 Jahr alt ist, hat es ein Recht auf einen <strong>Betreuungsplatz</strong>
            in der Kita - dann kann Frau Bauer wieder arbeiten gehen.</p>`
        }
      ]
    },
    exercisesIntro: "Frag dich bei jeder Leistung: Ist das <strong>Geld</strong>, <strong>Zeit</strong> oder ein <strong>Platz</strong>?",
    exercises: [
      {
        type: "matching",
        question: "Ordne jede staatliche Leistung ihrer Erklärung zu:",
        pairs: [
          { left: "Kindergeld", right: "monatliche Geldzahlung pro Kind, bis 18 (in Ausbildung bis 25)" },
          { left: "Elterngeld", right: "ersetzt einen Teil des fehlenden Lohns nach der Geburt" },
          { left: "Elternzeit", right: "Freistellung von der Arbeit bis zu 3 Jahre, Job bleibt sicher" },
          { left: "Betreuungsplatz", right: "Recht auf einen Kita-Platz ab dem 1. Lebensjahr" }
        ],
        explanation: "Geld: Kindergeld + Elterngeld. Zeit: Elternzeit. Platz: Betreuungsplatz."
      },
      {
        type: "multiple-choice",
        question: "Was ist der Unterschied zwischen Elterngeld und Elternzeit?",
        options: [
          "Elterngeld ist Geld als Lohnersatz, Elternzeit ist eine Freistellung von der Arbeit.",
          "Das ist genau dasselbe, nur zwei Wörter dafür.",
          "Elterngeld ist die Freistellung, Elternzeit ist das Geld.",
          "Beides bekommt man nur ohne Kinder."
        ],
        correct: 0,
        explanation: "Richtig! Eltern<strong>geld</strong> = Geld (Lohnersatz). Eltern<strong>zeit</strong> = Zeit (Freistellung, Job bleibt sicher).",
        wrongExplanations: {
          1: "Nein, das sind zwei verschiedene Dinge: Elterngeld ist Geld, Elternzeit ist die Freistellung von der Arbeit.",
          2: "Genau andersherum: Eltern<strong>geld</strong> ist das Geld, Eltern<strong>zeit</strong> ist die Freistellung. Das Wort verrät es.",
          3: "Beides gibt es ja gerade wegen der Kinder - nach der Geburt eines Kindes."
        }
      },
      {
        type: "fill-in-blank",
        question: "Fülle die Lücken:",
        text: "Den Anspruch auf einen Betreuungsplatz hat ein Kind ab dem vollendeten {{blank}}. Elternzeit kann man sich bis zu {{blank}} Jahre lang nehmen.",
        blanks: [
          { correct: "1. Lebensjahr", alternatives: ["ersten Lebensjahr", "1 Lebensjahr", "ersten lebensjahr", "1. lebensjahr", "1. Geburtstag", "ersten Geburtstag"] },
          { correct: "3", alternatives: ["drei", "36 Monate", "36"] }
        ],
        explanation: "Betreuungsplatz: ab dem 1. Geburtstag. Elternzeit: bis zu 3 Jahre (36 Monate)."
      },
      {
        type: "multiple-choice",
        question: "Bis zu welchem Alter kann es Kindergeld geben, wenn das Kind eine Ausbildung macht?",
        options: ["bis 25", "bis 18", "bis 21", "bis 30"],
        correct: 0,
        explanation: "Richtig! Normalerweise bis 18 - aber wenn das Kind noch in Ausbildung oder Studium ist, bis 25.",
        wrongExplanations: {
          1: "Bis 18 gilt allgemein. Macht das Kind aber eine Ausbildung oder studiert, gibt es Kindergeld bis 25.",
          2: "Knapp daneben: In Ausbildung wird Kindergeld bis 25 gezahlt.",
          3: "So lange nicht. Die Grenze in der Ausbildung liegt bei 25 Jahren."
        }
      }
    ]
  }

]);
