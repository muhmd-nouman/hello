import Link from "next/link"

export default function AboutInvisibleText() {
  return (
    <>
      <section className="mx-auto py-16" id="introduction-to-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">
            Pengenalan ke{" "}
            <Link href="https://www.invisibletext.me" className="hover:underline">
              Teks Tak Terlihat
            </Link>
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">
            Teks tak terlihat adalah karakter Unicode khusus yang tidak menampilkan simbol atau spasi apa pun. Mereka memiliki nilai Unicode yang unik dan mengisi ruang dalam teks tanpa terlihat. Karakter-karakter ini berguna untuk pemformatan teks yang tidak mengganggu dalam berbagai aplikasi.
          </p>
        </div>
      </section>
      <section className="mx-auto py-16" id="what-is-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">
            Apa Itu Teks Tak Terlihat?
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">
            Karakter tak terlihat tidak dapat dilihat oleh mata manusia, namun memiliki kegunaan penting. Karakter Unicode ini, sering kali termasuk karakter nol-lebar atau metode pemformatan, menciptakan ruang kosong tanpa menggunakan tombol spasi.
          </p>
        </div>
      </section>
      <section className="mx-auto py-16" id="types-of-unicode-invisible-text">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold text-black dark:text-yellow-300 mb-6">
            Jenis Karakter Unicode Tak Terlihat
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
                Zero-Width Space (ZWSP) adalah karakter tak terlihat yang tidak mengambil ruang visual, namun tetap dikenali sebagai karakter yang sah oleh komputer. Ini berfungsi seperti spasi, namun dengan lebar nol, memungkinkan pemisahan teks tanpa celah yang terlihat. ZWSP sangat berguna untuk membuat pemutusan baris pada platform yang tidak mendukung pemformatan tradisional, menambahkan pemutusan kata pada teks panjang tanpa spasi yang terlihat, atau membuat nama pengguna dan pesan yang tampak kosong. Karakter ini kompatibel secara luas dan berfungsi di sebagian besar aplikasi, situs web, dan platform.
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
                Hangul Filler adalah karakter tak terlihat khusus yang awalnya dirancang untuk pengolahan teks Korea (Hangul). Berbeda dengan Zero-Width Space, Hangul Filler memiliki lebar yang terlihat, sehingga ideal untuk menciptakan ruang yang benar-benar kosong. Karakter ini sangat baik untuk membuat pesan kosong, menambahkan jarak yang tidak terlihat antara teks yang terlihat, dan membuat nama pengguna yang tampak benar-benar kosong. Hangul Filler memiliki kompatibilitas lintas platform yang sangat baik dan berfungsi di sebagian besar aplikasi dan situs web modern.
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
                Zero-Width Joiner (ZWJ) adalah karakter tak terlihat yang menggabungkan dua karakter yang berdekatan dengan cara khusus. Meskipun terutama digunakan dalam bahasa seperti Arab dan Hindi untuk mengontrol cara huruf bergabung, karakter ini juga digunakan dalam urutan emoji untuk membuat emoji gabungan (seperti emoji keluarga). Untuk keperluan teks tak terlihat, ZWJ dapat digunakan untuk membuat pemutusan tak terlihat dalam teks tanpa mempengaruhi tata letak, membuat format nama pengguna yang unik, atau bahkan untuk menghindari filter karakter tertentu. ZWJ didukung secara luas di platform modern.
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
                Zero-Width Non-Joiner (ZWNJ) adalah karakter tak terlihat yang mencegah dua karakter yang berdekatan bergabung saat seharusnya bergabung. Walaupun memiliki kegunaan khusus dalam bahasa dengan skrip yang menyambung seperti Persia dan Arab, ZWNJ dapat digunakan untuk teks tak terlihat serupa dengan karakter nol-lebar lainnya. Ini sangat baik untuk membuat pemutusan tak terlihat dalam teks, memformat nama pengguna dengan cara unik, atau menambahkan penanda tak terlihat di dalam teks. ZWNJ kompatibel dengan sebagian besar aplikasi dan situs web modern.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
