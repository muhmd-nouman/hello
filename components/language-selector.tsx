"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

// Map language codes to their URL paths
const languageRoutes = {
  en: "/",
  es: "/es",
  fr: "/fr",
  de: "/de",
  it: "/it",
  pt: "/pt",
  id: "/id",
  nl: "/nl",
  ru: "/ru",
}

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "it", name: "Italiano" },
  { code: "pt", name: "Português" },
  { code: "id", name: "Bahasa Indonesia" },
  { code: "nl", name: "Dutch" },
  { code: "ru", name: "Russian" },
]

export function LanguageSelector() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLanguage, setCurrentLanguage] = useState("en")

  // Detect current language from URL
  useEffect(() => {
    const detectLanguage = () => {
      for (const [code, path] of Object.entries(languageRoutes)) {
        if (pathname === path || pathname.startsWith(path + "/")) {
          setCurrentLanguage(code)
          return
        }
      }
      // Default to English if no match
      setCurrentLanguage("en")
    }

    detectLanguage()
  }, [pathname])

  const handleLanguageChange = (code: string) => {
    setCurrentLanguage(code)
    const targetPath = languageRoutes[code as keyof typeof languageRoutes]
    router.push(targetPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-4 text-sm font-medium transition-colors hover:text-primary outline-none">
          <Globe className="h-6 w-6 hover:text-yellow-300" />
          <span className="sr-only">Select language</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={currentLanguage === language.code ? "" : ""}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

