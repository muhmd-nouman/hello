import type { Metadata } from "next/types"
import InvisibleTextGenerator from "./components/invisible-text-generator"
import About from "./components/About"
import UnicodeTable from "./components/UnicodeTable"
import WhyUseInvisibleText from "./components/WhyUse"
import PracticalUseCases from "./components/PracticalUseCases"

export const metadata: Metadata = {
  title: "Generador de Texto Invisible - Crea y Copia Caracteres Unicode Invisibles",
  description:
    "Genera caracteres de texto invisible para redes sociales, creación de contenido y más. Crea, prueba y copia caracteres Unicode invisibles fácilmente con nuestra herramienta gratuita.",
  keywords:
    "texto invisible, caracteres invisibles, texto en blanco, espacios unicode, espacio de ancho cero, generador de texto",
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

