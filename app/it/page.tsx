import type { Metadata } from "next/types"
import InvisibleTextGenerator from "./components/invisible-text-generator"
import About from "./components/About"
import UnicodeTable from "./components/UnicodeTable"
import WhyUseInvisibleText from "./components/WhyUse"
import PracticalUseCases from "./components/PracticalUseCases"

export const metadata: Metadata = {
  title: "Generatore di Testo Invisibile - Crea e Copia Caratteri Unicode Invisibili",
  description:
    "Genera caratteri di testo invisibili per social media, creazione di contenuti e altro. Crea, testa e copia facilmente caratteri Unicode invisibili con il nostro strumento gratuito.",
  keywords:
    "testo invisibile, caratteri invisibili, testo vuoto, spazi unicode, spazio a larghezza zero, generatore di testo",
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

