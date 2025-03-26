import Link from "next/link"

export default function AboutInvisibleText() {
  return (
    <>
      <section className="mx-auto py-16" id="introduction-to-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">
            Introduction to <Link href="https://www.invisibletext.me" className="hover:underline">
              Invisible Text
            </Link>
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">Invisible texts are special Unicode characters that don't display any symbol or space. They have unique Unicode values and occupy space in the text without being visible. These characters are useful for non-disruptive text formatting in various applications.</p>
        </div>
      </section>
      <section className="mx-auto py-16" id="what-is-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">What Is Invisible Text?</h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">Invisible characters are not visible to the human eye but still have important uses. These Unicode characters, often including zero-width characters or formatting methods, create blank spaces without using the space key.</p>
        </div>
      </section>
      <section className="mx-auto py-16" id="types-of-unicode-invisible-text">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold text-black dark:text-yellow-300 mb-6">Types of Invisible Unicode Characters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">Zero-Width Space (U+200B)</h3>
              <div className="flex items-center justify-center mb-6">
              <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">The Zero-Width Space (ZWSP) is an invisible character that takes up no visual space but is recognized as a valid character by computers. It functions like a space but with zero width, allowing text to be separated without visible gaps. ZWSP is particularly useful for creating line breaks in platforms that don't support traditional formatting, adding word breaks in long text without visible spaces, or creating empty-looking usernames and messages. This character is widely compatible and works in most applications, websites, and platforms.</p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">Hangul Filler (U+3164)</h3>
              <div className="flex items-center justify-center mb-6">
              <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg"> ㅤ</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">The Hangul Filler is a special invisible character originally designed for Korean (Hangul) text processing. Unlike the zero-width space, the Hangul Filler actually occupies visible width, making it perfect for creating truly empty spaces that take up room. This character is excellent for creating blank messages, adding substantial invisible spacing between visible text, and crafting usernames that appear completely empty. The Hangul Filler has excellent cross-platform compatibility and works in most modern applications and websites.</p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">Zero-Width Joiner (U+200D)</h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">The Zero-Width Joiner (ZWJ) is an invisible character that connects two surrounding characters in special ways. While primarily used in languages like Arabic and Hindi to control how letters connect, it's also used in emoji sequences to create combination emojis (like the family emoji). For invisible text purposes, ZWJ can be used to create invisible breaks in text without affecting layout, create unique username formatting, or even to bypass certain character filters. The ZWJ is widely supported across modern platforms and is particularly useful in messaging applications.</p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">Zero-Width Non-Joiner (U+200C)</h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">The Zero-Width Non-Joiner (ZWNJ) is an invisible character that prevents two adjacent characters from joining when they would normally connect. While it has specific uses in languages with connecting scripts like Persian and Arabic, for invisible text purposes, ZWNJ can be used similarly to other zero-width characters. It's excellent for creating invisible breaks in text, formatting usernames in unique ways, or adding invisible markers within text. ZWNJ has good cross-platform compatibility and works reliably in most modern applications and websites.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

