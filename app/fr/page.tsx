import type { Metadata } from "next/types"
import InvisibleTextGenerator from "./components/invisible-text-generator"
import About from "./components/About"
import UnicodeTable from "./components/UnicodeTable"
import WhyUseInvisibleText from "./components/WhyUse"
import PracticalUseCases from "./components/PracticalUseCases"

export const metadata: Metadata = {
  title: "Générateur de Texte Invisible - Créer et Copier des Caractères Unicode Invisibles",
  description:
    "Générez des caractères de texte invisibles pour les réseaux sociaux, la création de contenu et plus encore. Créez, testez et copiez facilement des caractères Unicode invisibles avec notre outil gratuit.",
  keywords:
    "texte invisible, caractères invisibles, texte blanc, espaces unicode, espace de largeur zéro, générateur de texte",
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

