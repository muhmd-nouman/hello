import Link from "next/link"

export default function AboutInvisibleText() {
  return (
    <>
      <section className="mx-auto py-16" id="introduction-to-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">
            Introduzione al{" "}
            <Link href="https://www.invisibletext.me" className="hover:underline">
              Testo Invisibile
            </Link>
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">
            I testi invisibili sono caratteri Unicode speciali che non mostrano alcun simbolo o spazio. Hanno valori Unicode unici e occupano spazio nel testo senza essere visibili. Questi caratteri sono utili per formattazioni di testo non invasive in varie applicazioni.
          </p>
        </div>
      </section>
      <section className="mx-auto py-16" id="what-is-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">
            Cos'è il Testo Invisibile?
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">
            I caratteri invisibili non sono visibili all'occhio umano, ma hanno comunque usi importanti. Questi caratteri Unicode, che spesso includono caratteri a larghezza zero o metodi di formattazione, creano spazi vuoti senza utilizzare il tasto spazio.
          </p>
        </div>
      </section>
      <section className="mx-auto py-16" id="types-of-unicode-invisible-text">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold text-black dark:text-yellow-300 mb-6">
            Tipi di Caratteri Unicode Invisibili
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Spazio a Larghezza Zero (U+200B)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                Lo Spazio a Larghezza Zero (ZWSP) è un carattere invisibile che non occupa spazio visivo, ma è riconosciuto come un carattere valido dai computer. Funziona come uno spazio, ma con larghezza zero, permettendo di separare il testo senza lasciare interruzioni visibili. Il ZWSP è particolarmente utile per creare interruzioni di linea su piattaforme che non supportano il formattamento tradizionale, per aggiungere interruzioni di parola in testi lunghi senza spazi visibili o per creare nomi utente e messaggi che appaiono vuoti. Questo carattere è ampiamente compatibile e funziona nella maggior parte delle applicazioni, siti web e piattaforme.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Riempitore Hangul (U+3164)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg"> ㅤ</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                Il Riempitore Hangul è un carattere invisibile speciale, originariamente progettato per l’elaborazione del testo coreano (Hangul). A differenza dello spazio a larghezza zero, il Riempitore Hangul occupa una larghezza visibile, rendendolo ideale per creare spazi veramente vuoti. Questo carattere è eccellente per generare messaggi vuoti, aggiungere spazi invisibili sostanziali tra il testo visibile e per creare nomi utente che appaiono completamente vuoti. Il Riempitore Hangul è altamente compatibile e funziona nella maggior parte delle applicazioni e dei siti moderni.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Connettore a Larghezza Zero (U+200D)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                Il Connettore a Larghezza Zero (ZWJ) è un carattere invisibile che unisce due caratteri adiacenti in modi particolari. Sebbene sia principalmente usato in lingue come l’arabo e l’hindi per controllare la connessione delle lettere, viene anche impiegato nelle sequenze di emoji per creare emoji combinati (come l’emoji famiglia). Per il testo invisibile, il ZWJ può essere utilizzato per creare interruzioni invisibili nel testo senza influenzare il layout, per creare formati unici per i nomi utente o per bypassare determinati filtri di caratteri. Il ZWJ è ampiamente supportato sulle piattaforme moderne.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Non-Connettore a Larghezza Zero (U+200C)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                Il Non-Connettore a Larghezza Zero (ZWNJ) è un carattere invisibile che impedisce a due caratteri adiacenti di unirsi quando normalmente lo farebbero. Pur avendo usi specifici in lingue con scritture connesse come il persiano e l’arabo, per il testo invisibile il ZWNJ può essere usato in modo simile ad altri caratteri a larghezza zero. È ideale per creare interruzioni invisibili nel testo, formattare nomi utente in modi unici o aggiungere marcatori invisibili nel testo. Il ZWNJ è ben compatibile e funziona in modo affidabile nella maggior parte delle applicazioni e dei siti moderni.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
