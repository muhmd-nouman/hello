import Link from "next/link"

export default function AboutInvisibleText() {
  return (
    <>
      <section className="mx-auto py-16" id="introduction-to-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">
            Introductie tot{" "}
            <Link href="https://www.invisibletext.me" className="hover:underline">
              Onzichtbare Tekst
            </Link>
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">
            Onzichtbare teksten zijn speciale Unicode-tekens die geen symbool of spatie weergeven. Ze hebben unieke Unicode-waarden en nemen ruimte in de tekst in zonder zichtbaar te zijn. Deze tekens zijn nuttig voor een niet-opvallende tekstopmaak in diverse toepassingen.
          </p>
        </div>
      </section>
      <section className="mx-auto py-16" id="what-is-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">
            Wat is Onzichtbare Tekst?
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">
            Onzichtbare tekens zijn met het blote oog niet waarneembaar, maar hebben belangrijke toepassingen. Deze Unicode-tekens, vaak met null-breedte of speciale opmaakmethoden, creëren lege ruimtes zonder de spatiebalk te gebruiken.
          </p>
        </div>
      </section>
      <section className="mx-auto py-16" id="types-of-unicode-invisible-text">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold text-black dark:text-yellow-300 mb-6">
            Soorten Onzichtbare Unicode-Tekens
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Zero-Width Space (U+200B)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                De Zero-Width Space (ZWSP) is een onzichtbaar teken dat geen visuele ruimte inneemt, maar door computers als geldig teken wordt herkend. Het werkt als een spatie, maar met een breedte van nul, zodat tekst gescheiden kan worden zonder zichtbare gaten. ZWSP is bijzonder handig voor het maken van regeleinden op platforms die traditionele opmaak niet ondersteunen, voor het toevoegen van woordafbrekingen in lange teksten zonder zichtbare spaties, of voor het creëren van gebruikersnamen en berichten die leeg lijken. Dit teken is breed compatibel en werkt in de meeste applicaties, websites en platforms.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Hangul Filler (U+3164)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg"> ㅤ</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                De Hangul Filler is een speciaal onzichtbaar teken, oorspronkelijk ontworpen voor de verwerking van Koreaanse (Hangul) teksten. In tegenstelling tot de zero-width space neemt de Hangul Filler wel visuele breedte in, waardoor hij ideaal is om daadwerkelijk lege ruimtes te creëren. Dit teken is uitstekend geschikt voor het maken van lege berichten, het toevoegen van aanzienlijke onzichtbare spatiëring tussen zichtbare tekst, en het maken van gebruikersnamen die compleet leeg lijken. De Hangul Filler is breed compatibel en werkt in de meeste moderne applicaties en websites.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Zero-Width Joiner (U+200D)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                De Zero-Width Joiner (ZWJ) is een onzichtbaar teken dat twee naast elkaar staande tekens op een bijzondere manier verbindt. Hoewel het hoofdzakelijk wordt gebruikt in talen zoals Arabisch en Hindi om de verbinding tussen letters te regelen, wordt het ook ingezet in emoji-reeksen om gecombineerde emoji’s (zoals de familie-emoji) te creëren. Voor onzichtbare tekst kan de ZWJ worden gebruikt om onzichtbare breuken in de tekst te maken zonder de lay-out te beïnvloeden, unieke gebruikersnaamformaten te creëren, of zelfs bepaalde tekenfilters te omzeilen. De ZWJ wordt breed ondersteund op moderne platforms.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Zero-Width Non-Joiner (U+200C)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                De Zero-Width Non-Joiner (ZWNJ) is een onzichtbaar teken dat voorkomt dat twee aangrenzende tekens samen worden gevoegd wanneer dat normaal gesproken wel zou gebeuren. Hoewel het specifieke toepassingen kent in talen met verbindende scripts zoals Perzisch en Arabisch, kan de ZWNJ voor onzichtbare tekst op vergelijkbare wijze worden gebruikt als andere null-breedte tekens. Het is uitstekend geschikt voor het creëren van onzichtbare breuken in de tekst, het uniek opmaken van gebruikersnamen of het toevoegen van onzichtbare markeringen binnen een tekst. De ZWNJ is goed compatibel en werkt betrouwbaar in de meeste moderne applicaties en websites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
