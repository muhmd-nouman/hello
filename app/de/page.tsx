import type { Metadata } from "next/types"
import InvisibleTextGenerator from "./components/invisible-text-generator"
import About from "./components/About"
import UnicodeTable from "./components/UnicodeTable"
import WhyUseInvisibleText from "./components/WhyUse"
import PracticalUseCases from "./components/PracticalUseCases"

export const metadata: Metadata = {
  title: "Unsichtbarer Text Generator - Erstellen und Kopieren von unsichtbaren Unicode-Zeichen",
  description:
    "Generieren Sie unsichtbare Textzeichen für soziale Medien, Content-Erstellung und mehr. Erstellen, testen und kopieren Sie unsichtbare Unicode-Zeichen einfach mit unserem kostenlosen Tool.",
  keywords:
    "unsichtbarer text, unsichtbare zeichen, leerer text, unicode-leerzeichen, nullbreite-leerzeichen, textgenerator",
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

