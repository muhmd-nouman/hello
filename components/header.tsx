"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import {ModeToggle} from "@/components/mode-toggle"
import { LanguageSelector } from "@/components/language-selector"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#02194d]/20 dark:bg-[#02194d]/20 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container mx-auto px-6 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="invisible-text-logo" width="24" height="24" className="w-10 h-10" />
          <span className="hidden font-bold sm:inline-block">INVISIBLETEXT</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link>
          <Link href="/terms" className="text-sm font-medium transition-colors hover:text-primary">
            Terms
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
          <Link href="/privacy" className="text-sm font-medium transition-colors hover:text-primary">
            Privacy
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSelector />
          <ModeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden container py-4 pb-6 mx-auto px-6">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/#generator"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Generator
            </Link>
            <Link
              href="/#preview"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Preview
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

