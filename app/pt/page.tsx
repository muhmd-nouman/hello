import type { Metadata } from "next/types"
import InvisibleTextGenerator from "./components/invisible-text-generator"
import About from "./components/About"
import UnicodeTable from "./components/UnicodeTable"
import WhyUseInvisibleText from "./components/WhyUse"
import PracticalUseCases from "./components/PracticalUseCases"

export const metadata: Metadata = {
  title: "Gerador de Texto Invisível - Crie e Copie Caracteres Unicode Invisíveis",
  description:
    "Gere caracteres de texto invisíveis para redes sociais, criação de conteúdo e mais. Crie, teste e copie caracteres Unicode invisíveis facilmente com nossa ferramenta gratuita.",
  keywords:
    "texto invisível, caracteres invisíveis, texto em branco, espaços unicode, espaço de largura zero, gerador de texto",
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

