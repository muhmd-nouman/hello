"use client"

import { useState, useRef } from "react"
import { Copy, Trash } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { generateInvisibleText } from "@/lib/invisible-text"

export default function InvisibleTextGenerator() {
  const [testAreaText, setTestAreaText] = useState<string>("")
  const [characterCount, setCharacterCount] = useState<number>(0)
  const [customSize, setCustomSize] = useState<string>("1")
  const [unlimitedSize, setUnlimitedSize] = useState<string>("10")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedType, setSelectedType] = useState<string>("Hangul Filler")
  const testAreaRef = useRef<HTMLTextAreaElement>(null)
  const { toast } = useToast()

  const getTypeFromSelection = (selection: string) => {
    switch (selection) {
      case "Hangul Filler":
        return "space"
      case "Zero Width Joiner":
        return "joiner"
      case "Zero Width Non-Joiner":
        return "nonjoiner"
      case "Word Joiner":
        return "word"
      case "Invisible Separator":
        return "separator"
      default:
        return "random"
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        title: "Disalin!",
        description: "Teks tak terlihat telah disalin ke clipboard",
      })
    } catch (err) {
      toast({
        title: "Gagal menyalin",
        description: "Silakan coba metode lain",
        variant: "destructive",
      })
    }
  }

  const handleCopyHangulFiller = () => {
    const invisibleText = generateInvisibleText(5, "space")
    copyToClipboard(invisibleText)
  }

  const handleCopySelected = () => {
    if (testAreaRef.current) {
      const selectedText = testAreaRef.current.value
      copyToClipboard(selectedText)
    }
  }

  const handleGenerateCustom = async () => {
    try {
      setIsLoading(true)
      const size = Number.parseInt(customSize, 10)
      if (isNaN(size) || size < 1 || size > 1000) {
        toast({
          title: "Ukuran tidak valid",
          description: "Silakan masukkan angka antara 1 dan 1000",
          variant: "destructive",
        })
        return
      }

      const type = getTypeFromSelection(selectedType)
      const invisibleText = generateInvisibleText(size, type as any)

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "Berhasil Digenerasi!",
        description: `${size} karakter tak terlihat telah digenerasi`,
      })
    } catch (error) {
      toast({
        title: "Gagal Menggenerasi",
        description: "Terjadi kesalahan saat menggenerasi teks tak terlihat",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGenerateUnlimited = async () => {
    try {
      setIsLoading(true)
      const size = Number.parseInt(unlimitedSize, 10)
      if (isNaN(size) || size < 1 || size > 10000) {
        toast({
          title: "Ukuran tidak valid",
          description: "Silakan masukkan angka antara 1 dan 10000",
          variant: "destructive",
        })
        return
      }

      const invisibleText = generateInvisibleText(size, "space")

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "Berhasil Digenerasi!",
        description: `${size} karakter tak terlihat telah digenerasi`,
      })
    } catch (error) {
      toast({
        title: "Gagal Menggenerasi",
        description: "Terjadi kesalahan saat menggenerasi teks tak terlihat",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const clearTestArea = () => {
    setTestAreaText("")
    setCharacterCount(0)
  }

  return (
    <>
      <section className="py-6" id="hero">
        <div className="container mx-auto">
          <h1 className="text-3xl text-center text-black dark:text-yellow-300 font-bold mb-4">
            Teks Tak Terlihat
          </h1>
          <p className="text-zinc-600 dark:text-zinc-100 text-lg text-center">
            Hasilkan spasi kosong tanpa batas dan salin/tempel teks tak terlihat dengan cepat.
          </p>
        </div>
      </section>
      
      <section className="mx-auto pb-16 px-6" id="types-of-unicode-invisible-text">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Metode 1: Salin dan Tempel spasi kosong dengan tombol */}
          <div className="p-6 rounded-lg shadow-md bg-background dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Metode 1: Salin dan Tempel spasi kosong dengan tombol
            </h2>

            <button
              onClick={handleCopyHangulFiller}
              className="bg-[#001F5B] mb-4 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              <Copy size={16} />
              Salin Hangul Filler
            </button>

            <p className="mt-4">
              Cukup klik tombol "Salin". Begitu Anda mengklik, teks tak terlihat akan disalin ke clipboard dan dapat ditempel di mana saja.
            </p>

            <p className="mt-4">
              Jika metode ini tidak berhasil, gunakan Metode 2 atau 3.
            </p>
          </div>

          {/* Metode 2: Pilih dan Salin */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">Metode 2: Pilih dan Salin</h2>

            <p className="mb-4">
              Klik tombol Pilih untuk menyorot teks kosong pada kotak di bawah ini. Gunakan CTRL+C pada Windows atau Command (⌘)+C pada Mac untuk menyalin karakter tak terlihat ke clipboard.
            </p>

            <p className="mb-4">
              Untuk memeriksa teks yang telah disalin, tempelkan di area Uji atau klik tombol hijau di pojok kanan atas untuk melihatnya.
            </p>

            <div className="flex items-center gap-2 mt-4">
              <select
                className="flex-1 p-2 rounded-lg border border-black/10 dark:bg-white/50 bg-zinc-50 outline-none"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option>Hangul Filler</option>
              </select>
              <button
                onClick={handleCopySelected}
                className="bg-[#001F5B] text-white px-4 py-2 rounded-lg flex items-center justify-center"
                disabled={isLoading}
              >
                Salin
              </button>
            </div>
          </div>

          {/* Metode 3: Hasilkan Teks Tak Terlihat Kustom */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Metode 3: Hasilkan Teks Tak Terlihat Kustom Sesuai Kebutuhan
            </h2>

            <p className="mb-4">
              Dengan metode inovatif ini, Anda dapat memasukkan jumlah karakter tak terlihat yang ingin Anda hasilkan ke dalam kotak, klik tombol "Hasilkan", dan kemudian tekan tombol "Salin Teks Kosong" untuk menyalin string tak terlihat ke clipboard.
            </p>

            <p className="mb-4">
              Kami telah meningkatkan versi ini dengan memberikan pilihan jenis karakter Unicode.
            </p>

            <div className="flex items-center gap-2 mt-4">
              <select
                className="flex-1 p-2 rounded-lg border border-black/10 dark:bg-white/50 bg-zinc-50 outline-none"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option>Hangul Filler</option>
              </select>
              <input
                type="text"
                value={customSize}
                onChange={(e) => setCustomSize(e.target.value)}
                className="w-16 p-2 rounded-lg border border-black/10 dark:bg-white/50 bg-zinc-50 outline-none"
                placeholder="1"
              />
              <button
                onClick={handleGenerateCustom}
                className="bg-[#001F5B] text-white px-4 py-2 rounded-lg"
                disabled={isLoading}
              >
                Hasilkan
              </button>
            </div>
          </div>

          {/* Metode 4: Hasilkan Karakter Tak Terlihat Tanpa Batas */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Metode 4: Hasilkan Karakter Tak Terlihat Tanpa Batas
            </h2>

            <p className="mb-4">
              Dengan metode ini, Anda dapat menghasilkan karakter tak terlihat tanpa batas. Misalnya, jika Anda ingin mengirim pesan tak terlihat yang memenuhi 4 sampai 5 halaman, metode inovatif ini adalah solusi sempurna untuk menyalin dan menempel spasi kosong.
            </p>

            <div className="flex items-center gap-2 mt-4">
              <input
                type="text"
                value={unlimitedSize}
                onChange={(e) => setUnlimitedSize(e.target.value)}
                className="flex-1 p-2 rounded-lg border border-black/10 dark:bg-white/50 bg-zinc-50 outline-none"
                placeholder="10"
              />
              <button
                onClick={handleGenerateUnlimited}
                className="bg-[#001F5B] text-white px-4 py-2 rounded-lg"
                disabled={isLoading}
              >
                Hasilkan
              </button>
            </div>

            <p className="mt-4 text-center text-sm">
              Untuk alat teks tak terlihat yang lebih canggih, kunjungi{" "}
              <a href="https://InvisibleSymbol.com" className="underline">
                InvisibleSymbol.com
              </a>
            </p>
          </div>
        </div>
        {/* Area Uji */}
        <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
          <h2 className="text-lg font-bold mb-4">Area Uji</h2>
          <p className="mb-4">
            Untuk menguji, tempelkan karakter kosong ke dalam kotak teks. Jika teks abu-abu menghilang, berarti teks kosong Anda berfungsi.
          </p>
          <textarea
            ref={testAreaRef}
            value={testAreaText}
            onChange={(e) => {
              setTestAreaText(e.target.value)
              setCharacterCount(e.target.value.length)
            }}
            className="w-full h-32 p-2 rounded-lg mb-2 border border-black/10 dark:bg-white/50 bg-zinc-50 outline-none"
            placeholder="Karakter tak terlihat yang dihasilkan akan muncul di sini"
          />

          <div className="flex justify-between items-center ">
            <div>Karakter: {characterCount}</div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(testAreaText)}
                className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]"
                title="Salin ke clipboard"
              >
                <Copy size={16} className="text-yellow-300" />
              </button>
              <button onClick={clearTestArea} className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]" title="Bersihkan area uji">
                <Trash size={16} className="text-yellow-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
