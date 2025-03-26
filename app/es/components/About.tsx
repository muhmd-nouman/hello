import Link from "next/link"

export default function AboutInvisibleText() {
  return (
    <>
      <section className="mx-auto py-16" id="introduction-to-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">
            Introducción al{" "}
            <Link href="https://www.invisibletext.me" className="hover:underline">
              Texto Invisible
            </Link>
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">
            Los textos invisibles son caracteres Unicode especiales que no muestran ningún símbolo ni espacio. Tienen valores Unicode únicos y ocupan espacio en el texto sin ser visibles. Estos caracteres son útiles para el formateo de texto sin interrupciones en diversas aplicaciones.
          </p>
        </div>
      </section>
      <section className="mx-auto py-16" id="what-is-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">
            ¿Qué es el Texto Invisible?
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">
            Los caracteres invisibles no son visibles a simple vista, pero tienen usos importantes. Estos caracteres Unicode, que a menudo incluyen caracteres de ancho cero o métodos de formateo, crean espacios en blanco sin necesidad de la tecla de espacio.
          </p>
        </div>
      </section>
      <section className="mx-auto py-16" id="types-of-unicode-invisible-text">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold text-black dark:text-yellow-300 mb-6">
            Tipos de Caracteres Unicode Invisibles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Espacio de Ancho Cero (U+200B)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                El Espacio de Ancho Cero (ZWSP) es un carácter invisible que no ocupa espacio visual, pero es reconocido como un carácter válido por los ordenadores. Funciona como un espacio, pero con ancho cero, permitiendo separar el texto sin huecos visibles. El ZWSP es especialmente útil para crear saltos de línea en plataformas que no soportan un formateo tradicional, agregar divisiones de palabra en textos largos sin espacios visibles o crear nombres de usuario y mensajes que parecen vacíos. Este carácter es ampliamente compatible y funciona en la mayoría de aplicaciones, sitios web y plataformas.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Relleno Hangul (U+3164)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg"> ㅤ</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                El Relleno Hangul es un carácter invisible especial, diseñado originalmente para el procesamiento de texto coreano (Hangul). A diferencia del espacio de ancho cero, el Relleno Hangul ocupa ancho visible, lo que lo hace perfecto para crear espacios realmente vacíos. Este carácter es excelente para generar mensajes en blanco, añadir espacios invisibles considerables entre texto visible y crear nombres de usuario que parezcan estar completamente vacíos. El Relleno Hangul es altamente compatible entre plataformas y funciona en la mayoría de las aplicaciones y sitios modernos.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Conector de Ancho Cero (U+200D)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                El Conector de Ancho Cero (ZWJ) es un carácter invisible que une dos caracteres adyacentes de maneras especiales. Aunque se usa principalmente en idiomas como árabe e hindi para controlar la conexión entre letras, también se emplea en secuencias de emojis para crear emojis combinados (como el emoji de familia). Para fines de texto invisible, el ZWJ puede utilizarse para crear divisiones invisibles en el texto sin afectar el diseño, formar formatos únicos para nombres de usuario o incluso sortear ciertos filtros de caracteres. El ZWJ es ampliamente soportado en plataformas modernas y resulta especialmente útil en aplicaciones de mensajería.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                No-Conector de Ancho Cero (U+200C)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                El No-Conector de Ancho Cero (ZWNJ) es un carácter invisible que impide que dos caracteres adyacentes se junten cuando normalmente lo harían. Aunque tiene usos específicos en idiomas con escrituras conectadas, como el persa y el árabe, para fines de texto invisible el ZWNJ se puede usar de manera similar a otros caracteres de ancho cero. Es ideal para crear divisiones invisibles en el texto, formatear nombres de usuario de maneras únicas o añadir marcadores invisibles en el texto. El ZWNJ es compatible con la mayoría de las aplicaciones y sitios web modernos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
