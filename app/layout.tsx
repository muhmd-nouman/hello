import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify weights if needed
  fallback: ["sans-serif"], // Add a fallback font
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.invisibletext.me"),
  title: {
    default: "Invisible Text Tool - Create Unique Names Instantly",
    template: "%s | Invisible Text Tool",
  },
  description:
    "Generate unique, creative names for people, businesses, domains, and more with our free Invisible Text tool.",
  keywords: [
    "Invisible Text",
    "random Invisible Text",
    "business Invisible Text",
    "domain Invisible Text",
    "character Invisible Text",
  ],
  authors: [{ name: "InvisibleText" }],
  creator: "InvisibleText",
  publisher: "InvisibleText",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "es-ES": "/es",
      "fr-FR": "/fr",
      "it-IT": "/it",
      "id-ID": "/id",
      "de-DE": "/de",
      "pt-PT": "/pt",
      "nl-NL": "/nl",
      "ru-RU": "/ru",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.invisibletext.me",
    title: "Invisible Text |ㅤ| - Create Unique Names Instantly",
    description:
      "Generate unique, creative names for people, businesses, domains, and more with our free Invisible Text tool.",
    siteName: "Invisible Text Tool",
    images: [
      {
        url: "https://www.invisibletext.me/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Invisible Text Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invisible Text Tool - Create Unique Names Instantly",
    description:
      "Generate unique, creative names for people, businesses, domains, and more with our free Invisible Text tool.",
    images: ["https://www.invisibletext.me/twitter-image.jpg"],
    creator: "@namegentool",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
    other: {
      me: ["my-email@example.com", "https://example.com/about-me"],
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical assets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured data for the website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Invisible Text Tool",
              url: "https://www.invisibletext.me",
              description:
                "Generate unique, creative names for people, businesses, domains, and more with our free Invisible Text tool.",
              applicationCategory: "UtilityApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "Invisible Text Tool",
                url: "https://www.invisibletext.me",
              },
            }),
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-zinc-50 dark:bg-[#02194d] text-black dark:text-white antialiased", poppins.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-1 max-w-6xl mx-auto text-black dark:text-white">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}




// import type React from "react"
// import { Inter } from "next/font/google"
// import { cn } from "@/lib/utils"
// import { ThemeProvider } from "@/components/theme-provider"
// import { Toaster } from "@/components/ui/toaster"
// import Header from "@/components/header"
// import { headers } from "next/headers"
// import "./globals.css"
// import Footer from "@/components/footer"

// const inter = Inter({ subsets: ["latin"] })

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   // Get language from headers (set by middleware)
//   const headersList = await headers()
//   const lang = headersList.get("x-language") || "en"

//   return (
//     <html lang={lang} suppressHydrationWarning>
//       <body className={cn("min-h-screen bg-background antialiased", inter.className)}>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
//           <Header />
//           {children}
//           <Footer />
//           <Toaster />
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

