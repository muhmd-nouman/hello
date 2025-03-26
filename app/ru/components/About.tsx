import Link from "next/link"

export default function AboutInvisibleText() {
  return (
    <>
      <section className="mx-auto py-16" id="introduction-to-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">
            Введение в{" "}
            <Link href="https://www.invisibletext.me" className="hover:underline">
              Невидимый Текст
            </Link>
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">
            Невидимые тексты – это специальные символы Unicode, которые не отображают ни символ, ни пробел. Они имеют уникальные Unicode-значения и занимают место в тексте, оставаясь незаметными. Эти символы полезны для ненавязчивого форматирования текста в различных приложениях.
          </p>
        </div>
      </section>
      <section className="mx-auto py-16" id="what-is-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">
            Что такое невидимый текст?
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">
            Невидимые символы не видны невооруженным глазом, но они имеют важное практическое применение. Эти символы Unicode, часто включающие символы нулевой ширины или специальные методы форматирования, создают пустые пространства без использования клавиши пробела.
          </p>
        </div>
      </section>
      <section className="mx-auto py-16" id="types-of-unicode-invisible-text">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold text-black dark:text-yellow-300 mb-6">
            Типы невидимых символов Unicode
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Пробел нулевой ширины (U+200B)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                Пробел нулевой ширины (ZWSP) – это невидимый символ, который не занимает визуальное пространство, но распознается компьютерами как допустимый символ. Он функционирует как пробел, но с нулевой шириной, что позволяет разделять текст без видимых зазоров. ZWSP особенно полезен для создания переносов строк на платформах, не поддерживающих традиционное форматирование, для добавления разрывов слов в длинном тексте без видимых пробелов или для создания имен пользователей и сообщений, выглядящих пустыми. Этот символ широко совместим и работает в большинстве приложений, веб-сайтов и платформ.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Заполнитель Hangul (U+3164)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg"> ㅤ</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                Заполнитель Hangul – это специальный невидимый символ, изначально созданный для обработки корейского текста (Hangul). В отличие от пробела нулевой ширины, Заполнитель Hangul занимает видимую ширину, что делает его идеальным для создания действительно пустых пространств. Этот символ отлично подходит для создания пустых сообщений, добавления значительных невидимых интервалов между видимым текстом и для формирования имен пользователей, которые кажутся полностью пустыми. Заполнитель Hangul обладает высокой кроссплатформенной совместимостью и работает в большинстве современных приложений и веб-сайтов.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Соединитель нулевой ширины (U+200D)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                Соединитель нулевой ширины (ZWJ) – это невидимый символ, который соединяет два соседних символа особым образом. Хотя его основное применение – в языках, таких как арабский и хинди, для управления связностью букв, он также используется в последовательностях эмодзи для создания комбинированных эмодзи (например, эмодзи «семья»). Для невидимого текста ZWJ можно использовать для создания невидимых разрывов в тексте без изменения макета, создания уникальных форматов для имен пользователей или даже обхода некоторых фильтров символов. ZWJ широко поддерживается современными платформами.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Разъединитель нулевой ширины (U+200C)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                Разъединитель нулевой ширины (ZWNJ) – это невидимый символ, который предотвращает слияние двух соседних символов, когда они обычно объединяются. Хотя он имеет специфические применения в языках со связной письменностью, таких как персидский и арабский, для невидимого текста ZWNJ можно использовать аналогично другим символам нулевой ширины. Он отлично подходит для создания невидимых разрывов в тексте, форматирования имен пользователей оригинальным способом или добавления невидимых меток внутри текста. ZWNJ хорошо совместим и надежно работает в большинстве современных приложений и веб-сайтов.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
