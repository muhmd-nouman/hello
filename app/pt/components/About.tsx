import Link from "next/link"

export default function AboutInvisibleText() {
  return (
    <>
      <section className="mx-auto py-16" id="introduction-to-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">
            Introdução ao{" "}
            <Link href="https://www.invisibletext.me" className="hover:underline">
              Texto Invisível
            </Link>
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">
            Textos invisíveis são caracteres Unicode especiais que não exibem nenhum símbolo ou espaço. Eles possuem valores Unicode únicos e ocupam espaço no texto sem serem visíveis. Esses caracteres são úteis para formatação de texto sem interrupções em várias aplicações.
          </p>
        </div>
      </section>
      <section className="mx-auto py-16" id="what-is-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">
            O que é Texto Invisível?
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">
            Caracteres invisíveis não são visíveis a olho nu, mas ainda possuem usos importantes. Esses caracteres Unicode, muitas vezes incluindo caracteres de largura zero ou métodos de formatação, criam espaços em branco sem utilizar a tecla de espaço.
          </p>
        </div>
      </section>
      <section className="mx-auto py-16" id="types-of-unicode-invisible-text">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold text-black dark:text-yellow-300 mb-6">
            Tipos de Caracteres Unicode Invisíveis
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Espaço de Largura Zero (U+200B)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                O Espaço de Largura Zero (ZWSP) é um caractere invisível que não ocupa espaço visual, mas é reconhecido como um caractere válido pelos computadores. Ele funciona como um espaço, porém com largura zero, permitindo que o texto seja separado sem lacunas visíveis. O ZWSP é especialmente útil para criar quebras de linha em plataformas que não suportam formatação tradicional, adicionar quebras de palavra em textos longos sem espaços visíveis ou criar nomes de usuário e mensagens com aparência vazia. Este caractere é amplamente compatível e funciona na maioria das aplicações, sites e plataformas.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Preenchedor Hangul (U+3164)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg"> ㅤ</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                O Preenchedor Hangul é um caractere invisível especial, originalmente projetado para o processamento de texto coreano (Hangul). Ao contrário do espaço de largura zero, o Preenchedor Hangul ocupa largura visível, tornando-o perfeito para criar espaços realmente vazios que ocupam espaço. Este caractere é excelente para criar mensagens em branco, adicionar espaçamentos invisíveis substanciais entre textos visíveis e elaborar nomes de usuário que aparentam estar completamente vazios. O Preenchedor Hangul possui excelente compatibilidade entre plataformas e funciona na maioria das aplicações e sites modernos.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Conector de Largura Zero (U+200D)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                O Conector de Largura Zero (ZWJ) é um caractere invisível que conecta dois caracteres adjacentes de maneiras especiais. Embora seja usado principalmente em idiomas como árabe e hindi para controlar como as letras se conectam, ele também é utilizado em sequências de emojis para criar emojis combinados (como o emoji de família). Para fins de texto invisível, o ZWJ pode ser usado para criar quebras invisíveis no texto sem afetar o layout, criar formatações únicas para nomes de usuário ou até mesmo contornar certos filtros de caracteres. O ZWJ é amplamente suportado em plataformas modernas e é particularmente útil em aplicações de mensagens.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Não-Conector de Largura Zero (U+200C)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                O Não-Conector de Largura Zero (ZWNJ) é um caractere invisível que impede que dois caracteres adjacentes se juntem quando normalmente se uniriam. Embora possua usos específicos em idiomas com scripts que se conectam, como persa e árabe, para fins de texto invisível, o ZWNJ pode ser utilizado de forma semelhante a outros caracteres de largura zero. Ele é excelente para criar quebras invisíveis no texto, formatar nomes de usuário de maneiras únicas ou adicionar marcadores invisíveis dentro do texto. O ZWNJ tem boa compatibilidade entre plataformas e funciona de forma confiável na maioria das aplicações e sites modernos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
