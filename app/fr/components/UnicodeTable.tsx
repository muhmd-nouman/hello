"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"

// Icônes (exemple utilisant les icônes de lucide-react)
import { Copy, Check, Info } from "lucide-react"
import React from "react"

interface UnicodeChar {
  unicode: string
  description: string
  html: string
  example: string
  character: string
  notes?: string
}

const translations = {
  fr: {
    title: "Caractères Unicode Invisibles",
    subtitle: "Une collection complète de caractères Unicode invisibles et d'espaces",
    table: {
      unicode: "Unicode",
      description: "Description",
      html: "HTML",
      example: "Exemple",
      copy: "Copier",
    },
    toast: {
      copiedTitle: "Copié !",
      copiedDescription: "Caractère copié dans le presse-papiers",
    },
  },
  // ... autres traductions si nécessaire ...
}

const locale = "fr"
const t = translations[locale]

export default function UnicodeTable() {
  const { toast } = useToast()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [showInfo, setShowInfo] = useState<number | null>(null)

  const unicodeChars: UnicodeChar[] = [
    {
      unicode: "U+0020",
      description: "Espace",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "Le caractère espace standard utilisé dans le texte. C'est le caractère généré en appuyant sur la barre d'espace.",
    },
    {
      unicode: "U+00A0",
      description: "Espace insécable",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "Semblable à un espace normal, mais empêche les retours à la ligne à cet endroit.",
    },
    {
      unicode: "U+2000",
      description: "En Quad",
      html: "&#8192;",
      example: " ",
      character: " ",
      notes: "Un espace équivalent à la largeur de la police (en em).",
    },
    {
      unicode: "U+2001",
      description: "Em Quad",
      html: "&#8193;",
      example: " ",
      character: " ",
      notes: "Un espace équivalent à la hauteur de la police (en em).",
    },
    {
      unicode: "U+2002",
      description: "En Space",
      html: "&#8194;",
      example: " ",
      character: " ",
      notes: "Un espace dont la largeur est égale à un en (la moitié d'un em).",
    },
    {
      unicode: "U+2003",
      description: "Em Space",
      html: "&#8195;",
      example: " ",
      character: " ",
      notes: "Un espace dont la largeur est égale à un em.",
    },
    {
      unicode: "U+2004",
      description: "Trois par Em Space",
      html: "&#8196;",
      example: " ",
      character: " ",
      notes: "Un espace qui occupe un tiers d'un em.",
    },
    {
      unicode: "U+2005",
      description: "Quatre par Em Space",
      html: "&#8197;",
      example: " ",
      character: " ",
      notes: "Un espace qui occupe un quart d'un em.",
    },
    {
      unicode: "U+2006",
      description: "Six par Em Space",
      html: "&#8198;",
      example: " ",
      character: " ",
      notes: "Un espace qui occupe un sixième d'un em.",
    },
    {
      unicode: "U+2007",
      description: "Espace chiffre",
      html: "&#8199;",
      example: " ",
      character: " ",
      notes: "Un espace ayant la même largeur qu'un chiffre dans une police à largeur fixe.",
    },
    {
      unicode: "U+2008",
      description: "Espace de ponctuation",
      html: "&#8200;",
      example: " ",
      character: " ",
      notes: "Un espace équivalent à la largeur d'un point ou d'un signe de ponctuation.",
    },
    {
      unicode: "U+2009",
      description: "Espace fin",
      html: "&#8201;",
      example: " ",
      character: " ",
      notes: "Un espace d'environ un cinquième (parfois un sixième) d'un em.",
    },
    {
      unicode: "U+200A",
      description: "Espace mince",
      html: "&#8202;",
      example: " ",
      character: " ",
      notes: "Un espace très fin, encore plus fin que l'espace fin.",
    },
    {
      unicode: "U+200B",
      description: "Zero Width Space",
      html: "&#8203;",
      example: "​",
      character: "​",
      notes: "N'occupe aucune largeur mais permet les retours à la ligne. L'un des caractères invisibles les plus utilisés.",
    },
    {
      unicode: "U+200C",
      description: "Zero Width Non-Joiner",
      html: "&#8204;",
      example: "‌",
      character: "‌",
      notes: "Empêche la jonction de caractères qui se rejoindraient normalement (utilisé dans les écritures comme l'arabe).",
    },
    {
      unicode: "U+200D",
      description: "Zero Width Joiner",
      html: "&#8205;",
      example: "‍",
      character: "‍",
      notes: "Fait se joindre des caractères qui ne se joindraient normalement pas. Utilisé dans les séquences d'emoji pour créer des emoji combinés.",
    },
    {
      unicode: "U+200E",
      description: "Marque de gauche à droite",
      html: "&#8206;",
      example: "‎",
      character: "‎",
      notes: "Marque invisible qui influence l'algorithme bidirectionnel, forçant le texte à s'afficher de gauche à droite.",
    },
    {
      unicode: "U+200F",
      description: "Marque de droite à gauche",
      html: "&#8207;",
      example: "‏",
      character: "‏",
      notes: "Marque invisible qui influence l'algorithme bidirectionnel, forçant le texte à s'afficher de droite à gauche.",
    },
    {
      unicode: "U+205F",
      description: "Espace mathématique moyen",
      html: "&#8287;",
      example: " ",
      character: " ",
      notes: "Un espace utilisé en notation mathématique, généralement 4/18 d'un em.",
    },
    {
      unicode: "U+2060",
      description: "Word Joiner",
      html: "&#8288;",
      example: "⁠",
      character: "⁠",
      notes: "Semblable au Zero Width No-Break Space mais sans antécédents. Empêche les retours à la ligne.",
    },
    {
      unicode: "U+2061",
      description: "Application de fonction",
      html: "&#8289;",
      example: "⁡",
      character: "⁡",
      notes: "Opérateur invisible utilisé en notation mathématique pour indiquer l'application d'une fonction.",
    },
    {
      unicode: "U+2062",
      description: "Multiplication Invisible",
      html: "&#8290;",
      example: "⁢",
      character: "⁢",
      notes: "Opérateur de multiplication invisible utilisé en notation mathématique.",
    },
    {
      unicode: "U+2063",
      description: "Séparateur Invisible",
      html: "&#8291;",
      example: "⁣",
      character: "⁣",
      notes: "Séparateur invisible utilisé en notation mathématique, semblable à une virgule.",
    },
    {
      unicode: "U+2064",
      description: "Addition Invisible",
      html: "&#8292;",
      example: "⁤",
      character: "⁤",
      notes: "Opérateur d'addition invisible utilisé en notation mathématique.",
    },
    {
      unicode: "U+3000",
      description: "Espace idéographique",
      html: "&#12288;",
      example: "　",
      character: "　",
      notes: "Espace pleine largeur utilisé en typographie d'Asie de l'Est, équivalent à la largeur d'un caractère idéographique.",
    },
    {
      unicode: "U+3164",
      description: "Hangul Filler",
      html: "&#12644;",
      example: "ㅤ",
      character: "ㅤ",
      notes: "Utilisé dans le texte coréen comme espace réservé. L'un des caractères invisibles les plus populaires sur les réseaux sociaux.",
    },
    {
      unicode: "U+FEFF",
      description: "Zero Width No-Break Space (BOM)",
      html: "&#65279;",
      example: "﻿",
      character: "﻿",
      notes: "Initialement utilisé comme marqueur d'ordre d'octets au début des fichiers texte. Empêche également les retours à la ligne.",
    },
    {
      unicode: "U+180E",
      description: "Séparateur de voyelles mongol",
      html: "&#6158;",
      example: " ",
      character: " ",
      notes: "Utilisé dans le texte mongol pour séparer les voyelles. Certaines plateformes l'affichent comme invisible.",
    },
    {
      unicode: "U+2800",
      description: "Motif Braille Vide",
      html: "&#10240;",
      example: "⠀",
      character: "⠀",
      notes: "Motif Braille vide. Apparaît souvent comme un espace visible mais fonctionne comme un caractère invisible sur de nombreuses plateformes.",
    },
  ]

  const handleCopy = (char: string, index: number) => {
    navigator.clipboard.writeText(char)
    toast({
      title: t.toast.copiedTitle,
      description: t.toast.copiedDescription,
    })
    setCopiedIndex(index)
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
        <h2 className="text-2xl md:text-3xl text-center font-bold text-yellow-200 mb-4">{t.title}</h2>
        <p className="text-center mb-8 text-white/80">{t.subtitle}</p>

        <div className="w-full bg-[#0B0E19] rounded-lg overflow-hidden border border-yellow-300/50">
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
                  <TableRow className={index % 2 === 0 ? "bg-yellow-100/50 hover:bg-yellow-100 text-[#0B0E19]" : "bg-yellow-200/50 hover:bg-yellow-200 text-[#0B0E19]"}>
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
                    <TableRow className="bg-blue-950/50">
                      <TableCell colSpan={5} className="text-white text-sm py-2 px-4">
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
