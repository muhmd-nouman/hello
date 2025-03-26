import type { Metadata } from "next/types"
import InvisibleTextGenerator from "./components/invisible-text-generator"
import About from "./components/About"
import UnicodeTable from "./components/UnicodeTable"
import WhyUseInvisibleText from "./components/WhyUse"
import PracticalUseCases from "./components/PracticalUseCases"

export const metadata: Metadata = {
  title: "Generator Teks Tak Terlihat - Buat dan Salin Karakter Unicode Tak Terlihat",
  description:
    "Hasilkan karakter teks tak terlihat untuk media sosial, pembuatan konten, dan lainnya. Buat, uji, dan salin karakter Unicode tak terlihat dengan mudah menggunakan alat gratis kami.",
  keywords: "teks tak terlihat, karakter tak terlihat, teks kosong, spasi unicode, spasi lebar nol, generator teks",
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 w-full">
        <InvisibleTextGenerator />
        <About />
        <UnicodeTable />
        <WhyUseInvisibleText />
        <PracticalUseCases />
      </main>
    </div>
  )
}

