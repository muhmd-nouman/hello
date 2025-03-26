import type { Metadata } from "next/types"
import HeroSection from "@/components/hero-section"
import TextGenerator from "@/components/text-generator"
import PreviewSection from "@/components/preview-section"
import FaqSection from "@/components/faq-section"
import InvisibleTextGenerator from "@/components/invisible-text-generator"
import About from "@/components/About"
import UnicodeTable from "@/components/UnicodeTable"
import WhyUseInvisibleText from "@/components/WhyUse"
import PracticalUseCases from "@/components/PracticalUseCases"


export const metadata: Metadata = {
  title: "Invisible Text Generator - Create & Copy Invisible Unicode Characters",
  description:
    "Generate invisible text characters for social media, content creation, and more. Create, test, and copy invisible Unicode characters easily with our free tool.",
  keywords: "invisible text, invisible characters, blank text, unicode spaces, zero width space, text generator"
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
        <PreviewSection />
        <FaqSection />
      </main>
    </div>
  )
}

