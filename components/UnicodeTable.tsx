"use client"

import React from "react";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"

// Icons (example uses lucide-react icons)
import { Copy, Check, Info } from "lucide-react"

interface UnicodeChar {
  unicode: string
  description: string
  html: string
  example: string
  character: string
  notes?: string
}

const translations = {
  en: {
    title: "Unicode Invisible Characters",
    subtitle: "A comprehensive collection of invisible Unicode characters and spaces",
    table: {
      unicode: "Unicode",
      description: "Description",
      html: "HTML",
      example: "Example",
      copy: "Copy",
    },
    toast: {
      copiedTitle: "Copied!",
      copiedDescription: "Character copied to clipboard",
    },
  },
  // ... other translations ...
}

// Choose your locale here
const locale = "en"
const t = translations[locale]

export default function UnicodeTable() {
  const { toast } = useToast()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [showInfo, setShowInfo] = useState<number | null>(null)

  const unicodeChars: UnicodeChar[] = [
    {
      unicode: "U+0020",
      description: "Space",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "The standard space character used in text. This is the character produced when pressing the space bar.",
    },
    {
      unicode: "U+00A0",
      description: "No-Break Space",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "Similar to a regular space, but prevents line breaks from occurring at its position.",
    },
    {
      unicode: "U+2000",
      description: "En Quad",
      html: "&#8192;",
      example: " ",
      character: " ",
      notes: "A space equal to the width of the font (em width).",
    },
    {
      unicode: "U+2001",
      description: "Em Quad",
      html: "&#8193;",
      example: " ",
      character: " ",
      notes: "A space equal to the height of the font (em height).",
    },
    {
      unicode: "U+2002",
      description: "En Space",
      html: "&#8194;",
      example: " ",
      character: " ",
      notes: "A space that's one en wide (half an em).",
    },
    {
      unicode: "U+2003",
      description: "Em Space",
      html: "&#8195;",
      example: " ",
      character: " ",
      notes: "A space that's one em wide.",
    },
    {
      unicode: "U+2004",
      description: "Three-Per-Em Space",
      html: "&#8196;",
      example: " ",
      character: " ",
      notes: "A space that's one-third of an em wide.",
    },
    {
      unicode: "U+2005",
      description: "Four-Per-Em Space",
      html: "&#8197;",
      example: " ",
      character: " ",
      notes: "A space that's one-fourth of an em wide.",
    },
    {
      unicode: "U+2006",
      description: "Six-Per-Em Space",
      html: "&#8198;",
      example: " ",
      character: " ",
      notes: "A space that's one-sixth of an em wide.",
    },
    {
      unicode: "U+2007",
      description: "Figure Space",
      html: "&#8199;",
      example: " ",
      character: " ",
      notes: "A space equal to the width of a digit in fonts where all digits have the same width.",
    },
    {
      unicode: "U+2008",
      description: "Punctuation Space",
      html: "&#8200;",
      example: " ",
      character: " ",
      notes: "A space equal to the width of a period/full stop.",
    },
    {
      unicode: "U+2009",
      description: "Thin Space",
      html: "&#8201;",
      example: " ",
      character: " ",
      notes: "A space that's one-fifth (sometimes one-sixth) of an em wide.",
    },
    {
      unicode: "U+200A",
      description: "Hair Space",
      html: "&#8202;",
      example: " ",
      character: " ",
      notes: "A very thin space, thinner than a thin space.",
    },
    {
      unicode: "U+200B",
      description: "Zero Width Space",
      html: "&#8203;",
      example: "​",
      character: "​",
      notes: "Has no width but allows line breaking. One of the most commonly used invisible characters.",
    },
    {
      unicode: "U+200C",
      description: "Zero Width Non-Joiner",
      html: "&#8204;",
      example: "‌",
      character: "‌",
      notes: "Prevents characters from joining when they would normally join (used in scripts like Arabic).",
    },
    {
      unicode: "U+200D",
      description: "Zero Width Joiner",
      html: "&#8205;",
      example: "‍",
      character: "‍",
      notes:
        "Causes characters to join when they normally wouldn't. Used in emoji sequences to create combined emojis.",
    },
    {
      unicode: "U+200E",
      description: "Left-to-Right Mark",
      html: "&#8206;",
      example: "‎",
      character: "‎",
      notes: "Invisible marker that affects the bidirectional algorithm, forcing text to be treated as left-to-right.",
    },
    {
      unicode: "U+200F",
      description: "Right-to-Left Mark",
      html: "&#8207;",
      example: "‏",
      character: "‏",
      notes: "Invisible marker that affects the bidirectional algorithm, forcing text to be treated as right-to-left.",
    },
    {
      unicode: "U+205F",
      description: "Medium Mathematical Space",
      html: "&#8287;",
      example: " ",
      character: " ",
      notes: "A space used in mathematical notation, typically 4/18 of an em.",
    },
    {
      unicode: "U+2060",
      description: "Word Joiner",
      html: "&#8288;",
      example: "⁠",
      character: "⁠",
      notes: "Similar to Zero Width No-Break Space but with no legacy baggage. Prevents line breaks.",
    },
    {
      unicode: "U+2061",
      description: "Function Application",
      html: "&#8289;",
      example: "⁡",
      character: "⁡",
      notes: "Invisible operator used in mathematical notation to indicate function application.",
    },
    {
      unicode: "U+2062",
      description: "Invisible Times",
      html: "&#8290;",
      example: "⁢",
      character: "⁢",
      notes: "Invisible multiplication operator used in mathematical notation.",
    },
    {
      unicode: "U+2063",
      description: "Invisible Separator",
      html: "&#8291;",
      example: "⁣",
      character: "⁣",
      notes: "Invisible separator used in mathematical notation, like a comma.",
    },
    {
      unicode: "U+2064",
      description: "Invisible Plus",
      html: "&#8292;",
      example: "⁤",
      character: "⁤",
      notes: "Invisible addition operator used in mathematical notation.",
    },
    {
      unicode: "U+3000",
      description: "Ideographic Space",
      html: "&#12288;",
      example: "　",
      character: "　",
      notes: "Full-width space used in East Asian typography, as wide as an ideographic character.",
    },
    {
      unicode: "U+3164",
      description: "Hangul Filler",
      html: "&#12644;",
      example: "ㅤ",
      character: "ㅤ",
      notes: "Used in Korean text as a placeholder. One of the most popular invisible characters for social media.",
    },
    {
      unicode: "U+FEFF",
      description: "Zero Width No-Break Space (BOM)",
      html: "&#65279;",
      example: "﻿",
      character: "﻿",
      notes: "Originally used as a Byte Order Mark at the beginning of text files. Also prevents line breaks.",
    },
    {
      unicode: "U+180E",
      description: "Mongolian Vowel Separator",
      html: "&#6158;",
      example: " ",
      character: " ",
      notes: "Used in Mongolian text to separate vowels. Some platforms render it as invisible.",
    },
    {
      unicode: "U+2800",
      description: "Braille Pattern Blank",
      html: "&#10240;",
      example: "⠀",
      character: "⠀",
      notes:
        "The blank/empty Braille pattern. Often appears as a visible space but works as an invisible character on many platforms.",
    },
  ]

  const handleCopy = (char: string, index: number) => {
    navigator.clipboard.writeText(char)
    toast({
      title: t.toast.copiedTitle,
      description: t.toast.copiedDescription,
    })
    setCopiedIndex(index)
    // Reset after a short delay
    setTimeout(() => setCopiedIndex(null), 1500)
  }

  const toggleInfo = (index: number) => {
    if (showInfo === index) {
      setShowInfo(null)
    } else {
      setShowInfo(index)
    }
  }

  return (
    <section className="mx-auto py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl text-center font-bold text-black dark:text-yellow-300 mb-4">{t.title}</h2>
        <p className="text-center mb-8 dark:text-white/80">{t.subtitle}</p>

        {/* Adjust the outer container color to match your site */}
        <div className="w-full bg-[#0B0E19] rounded-lg overflow-hidden border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-yellow-300 bg-[#182244]">{t.table.unicode}</TableHead>
                <TableHead className="text-yellow-300 bg-[#182244]">{t.table.description}</TableHead>
                <TableHead className="text-yellow-300 bg-[#182244]">{t.table.html}</TableHead>
                <TableHead className="text-yellow-300 bg-[#182244]">{t.table.example}</TableHead>
                <TableHead className="text-yellow-300 bg-[#182244] text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {unicodeChars.map((char, index) => (
                <React.Fragment key={index}>
                  <TableRow className={index % 2 === 0 ? "bg-white dark:bg-yellow-100/50 hover:bg-white/90 dark:hover:bg-yellow-100 text-zinc-700 dark:text-[#0B0E19]" : "bg-white/95 dark:bg-yellow-200/50 hover:bg-white/90 dark:hover:bg-yellow-200 dark:text-[#0B0E19]"}>
                    <TableCell>{char.unicode}</TableCell>
                    <TableCell>{char.description}</TableCell>
                    <TableCell>{char.html}</TableCell>
                    <TableCell>[{char.example}]</TableCell>
                    <TableCell className="flex justify-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-none bg-blue-950 hover:bg-blue-900 text-yellow-200 hover:text-yellow-200"
                        onClick={() => handleCopy(char.character, index)}
                      >
                        {copiedIndex === index ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                      {char.notes && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-none bg-blue-950 hover:bg-blue-900 text-yellow-200 hover:text-yellow-200"
                          onClick={() => toggleInfo(index)}
                        >
                          <Info className="w-4 h-4" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                  {showInfo === index && char.notes && (
                    <TableRow className="bg-white/70 dark:bg-yellow-300">
                      <TableCell colSpan={5} className="text-black text-sm py-2 px-4">
                        <div className="p-2">{char.notes}</div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}

