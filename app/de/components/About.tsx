import Link from "next/link"

export default function AboutInvisibleText() {
  return (
    <>
      <section className="mx-auto py-16" id="introduction-to-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">
            Einführung in{" "}
            <Link href="https://www.invisibletext.me" className="hover:underline">
              Unsichtbaren Text
            </Link>
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">
            Unsichtbare Texte sind spezielle Unicode-Zeichen, die kein Symbol oder Leerzeichen anzeigen. Sie besitzen einzigartige Unicode-Werte und belegen Platz im Text, ohne sichtbar zu sein. Diese Zeichen sind nützlich für unauffällige Textformatierung in verschiedenen Anwendungen.
          </p>
        </div>
      </section>
      <section className="mx-auto py-16" id="what-is-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">
            Was ist Unsichtbarer Text?
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">
            Unsichtbare Zeichen sind für das menschliche Auge nicht sichtbar, erfüllen aber wichtige Funktionen. Diese Unicode-Zeichen, häufig einschließlich Zeichen mit Nullbreite oder spezieller Formatierungsmethoden, erzeugen Leerzeichen, ohne dass die Leertaste verwendet wird.
          </p>
        </div>
      </section>
      <section className="mx-auto py-16" id="types-of-unicode-invisible-text">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold text-black dark:text-yellow-300 mb-6">
            Typen Unsichtbarer Unicode-Zeichen
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Nullbreiten-Leerzeichen (U+200B)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                Das Nullbreiten-Leerzeichen (ZWSP) ist ein unsichtbares Zeichen, das keinen sichtbaren Raum einnimmt, aber von Computern als gültiges Zeichen erkannt wird. Es funktioniert wie ein Leerzeichen, hat jedoch keine Breite, sodass der Text ohne sichtbare Lücken getrennt werden kann. ZWSP ist besonders nützlich, um in Plattformen, die traditionelle Formatierung nicht unterstützen, Zeilenumbrüche zu erzeugen oder um lange Texte ohne sichtbare Leerzeichen zu trennen.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Hangul-Füllzeichen (U+3164)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg"> ㅤ</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                Das Hangul-Füllzeichen ist ein spezielles unsichtbares Zeichen, das ursprünglich für die Verarbeitung koreanischer (Hangul) Texte entwickelt wurde. Im Gegensatz zum Nullbreiten-Leerzeichen nimmt das Hangul-Füllzeichen sichtbare Breite ein, was es ideal macht, um tatsächlich leere Räume zu erzeugen. Dieses Zeichen eignet sich hervorragend, um leere Nachrichten zu erstellen, unsichtbare Abstände zwischen sichtbarem Text hinzuzufügen und um Benutzernamen zu gestalten, die völlig leer erscheinen.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Nullbreiten-Zusammenfüger (U+200D)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                Der Nullbreiten-Zusammenfüger (ZWJ) ist ein unsichtbares Zeichen, das zwei angrenzende Zeichen auf besondere Weise miteinander verbindet. Es wird vor allem in Sprachen wie Arabisch und Hindi verwendet, um den Verbindungsstil der Buchstaben zu steuern, und kommt auch in Emoji-Sequenzen zum Einsatz, um zusammengesetzte Emojis (wie Familien-Emojis) zu erstellen. Für unsichtbaren Text kann ZWJ genutzt werden, um unsichtbare Trennungen einzufügen, ohne das Layout zu beeinflussen.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Nullbreiten-Trenner (U+200C)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                Der Nullbreiten-Trenner (ZWNJ) ist ein unsichtbares Zeichen, das verhindert, dass zwei nebeneinanderliegende Zeichen zusammengefügt werden, wenn sie normalerweise verbunden würden. Obwohl er spezielle Anwendungen in vernetzten Schriftsystemen wie Persisch und Arabisch hat, kann ZWNJ auch verwendet werden, um unsichtbare Unterbrechungen im Text zu erzeugen oder um einzigartige Benutzernamen zu formatieren.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
