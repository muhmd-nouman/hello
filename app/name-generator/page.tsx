import type { Metadata } from "next"
import HeroSection from "@/components/hero-section2"
import NameGenerator from "@/components/name-generator"
import FeaturesSection from "@/components/features-section"
import FaqSection from "@/components/faq-section"
import { generateMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateMetadata({
  title: "Name Generator Tool - Create Unique Names Instantly",
  description:
    "Generate unique, creative names for people, businesses, domains, and more with our free name generator tool.",
  path: "/",
  alternateLanguages: {
    "en-US": "/",
    "es-ES": "/es",
    "fr-FR": "/fr",
    "de-DE": "/de",
  },
})

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Name Generator Tool",
            description:
              "Generate unique, creative names for people, businesses, domains, and more with our free name generator tool.",
            url: "https://name-generator-tool.com",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://name-generator-tool.com",
                },
              ],
            },
            mainEntity: {
              "@type": "SoftwareApplication",
              name: "Name Generator Tool",
              applicationCategory: "UtilityApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            },
          }),
        }}
      />
      <HeroSection />
      <NameGenerator />
      <FeaturesSection />
      <FaqSection />
    </div>
  )
}

