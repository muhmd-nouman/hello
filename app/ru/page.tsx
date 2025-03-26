import type { Metadata } from "next/types"
import InvisibleTextGenerator from "./components/invisible-text-generator"
import About from "./components/About"
import UnicodeTable from "./components/UnicodeTable"
import WhyUseInvisibleText from "./components/WhyUse"
import PracticalUseCases from "./components/PracticalUseCases"


export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <InvisibleTextGenerator />
      <About />
      <UnicodeTable />
      <WhyUseInvisibleText />
      <PracticalUseCases />
      
    </div>
  )
}

