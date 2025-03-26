"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"

// Iconen (voorbeeld gebruikt lucide-react iconen)
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
  nl: {
    title: "Onzichtbare Unicode-Tekens",
    subtitle: "Een uitgebreide collectie onzichtbare Unicode-tekens en spaties",
    table: {
      unicode: "Unicode",
      description: "Beschrijving",
      html: "HTML",
      example: "Voorbeeld",
      copy: "Kopieer",
    },
    toast: {
      copiedTitle: "Gekopieerd!",
      copiedDescription: "Teken gekopieerd naar klembord",
    },
  },
  // ... andere vertalingen indien nodig ...
}

const locale = "nl"
const t = translations[locale]

export default function UnicodeTable() {
  const { toast } = useToast()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [showInfo, setShowInfo] = useState<number | null>(null)

  const unicodeChars: UnicodeChar[] = [
    {
      unicode: "U+0020",
      description: "Spatie",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "Het standaard spatie-teken dat wordt gebruikt in tekst. Wordt gegenereerd door op de spatiebalk te drukken.",
    },
    {
      unicode: "U+00A0",
      description: "Niet-afbrekende spatie",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "Vergelijkbaar met een normale spatie, maar voorkomt dat er een regelbreuk optreedt.",
    },
    {
      unicode: "U+2000",
      description: "En Quad",
      html: "&#8192;",
      example: " ",
      character: " ",
      notes: "Een spatie die gelijk is aan de breedte van het lettertype (in em).",
    },
    {
      unicode: "U+2001",
      description: "Em Quad",
      html: "&#8193;",
      example: " ",
      character: " ",
      notes: "Een spatie die gelijk is aan de hoogte van het lettertype (in em).",
    },
    {
      unicode: "U+2002",
      description: "En Space",
      html: "&#8194;",
      example: " ",
      character: " ",
      notes: "Een spatie met de breedte van een en (de helft van een em).",
    },
    {
      unicode: "U+2003",
      description: "Em Space",
      html: "&#8195;",
      example: " ",
      character: " ",
      notes: "Een spatie met de breedte van een em.",
    },
    {
      unicode: "U+2004",
      description: "Drie per Em Space",
      html: "&#8196;",
      example: " ",
      character: " ",
      notes: "Een spatie die één derde van een em breed is.",
    },
    {
      unicode: "U+2005",
      description: "Vier per Em Space",
      html: "&#8197;",
      example: " ",
      character: " ",
      notes: "Een spatie die één vierde van een em breed is.",
    },
    {
      unicode: "U+2006",
      description: "Zes per Em Space",
      html: "&#8198;",
      example: " ",
      character: " ",
      notes: "Een spatie die één zesde van een em breed is.",
    },
    {
      unicode: "U+2007",
      description: "Cijferruimte",
      html: "&#8199;",
      example: " ",
      character: " ",
      notes: "Een spatie die dezelfde breedte heeft als een cijfer in een monospace-lettertype.",
    },
    {
      unicode: "U+2008",
      description: "Interpunctieruimte",
      html: "&#8200;",
      example: " ",
      character: " ",
      notes: "Een spatie die gelijk is aan de breedte van een punt of een interpunctieteken.",
    },
    {
      unicode: "U+2009",
      description: "Dunne spatie",
      html: "&#8201;",
      example: " ",
      character: " ",
      notes: "Een spatie die ongeveer een vijfde (soms een zesde) van een em breed is.",
    },
    {
      unicode: "U+200A",
      description: "Haarspatie",
      html: "&#8202;",
      example: " ",
      character: " ",
      notes: "Een zeer dunne spatie, dunner dan de dunne spatie.",
    },
    {
      unicode: "U+200B",
      description: "Zero Width Space",
      html: "&#8203;",
      example: "​",
      character: "​",
      notes: "Neemt geen breedte in maar maakt een regelbreuk mogelijk. Een van de meest gebruikte onzichtbare tekens.",
    },
    {
      unicode: "U+200C",
      description: "Zero Width Non-Joiner",
      html: "&#8204;",
      example: "‌",
      character: "‌",
      notes: "Voorkomt dat tekens samenkomen wanneer dat normaal gesproken wel zou gebeuren (gebruikt in bijvoorbeeld Arabisch).",
    },
    {
      unicode: "U+200D",
      description: "Zero Width Joiner",
      html: "&#8205;",
      example: "‍",
      character: "‍",
      notes: "Zorgt ervoor dat tekens samenkomen die normaal gesproken niet samen zouden komen. Gebruikt in emoji-reeksen om gecombineerde emoji’s te maken.",
    },
    {
      unicode: "U+200E",
      description: "Links-naar-Rechts Markering",
      html: "&#8206;",
      example: "‎",
      character: "‎",
      notes: "Een onzichtbare markering die het bidirectionele algoritme beïnvloedt en de tekst dwingt van links naar rechts te worden weergegeven.",
    },
    {
      unicode: "U+200F",
      description: "Rechts-naar-Links Markering",
      html: "&#8207;",
      example: "‏",
      character: "‏",
      notes: "Een onzichtbare markering die het bidirectionele algoritme beïnvloedt en de tekst dwingt van rechts naar links te worden weergegeven.",
    },
    {
      unicode: "U+205F",
      description: "Mathematische Ruimte Medium",
      html: "&#8287;",
      example: " ",
      character: " ",
      notes: "Een spatie die in de wiskundige notatie wordt gebruikt, doorgaans 4/18 van een em.",
    },
    {
      unicode: "U+2060",
      description: "Word Joiner",
      html: "&#8288;",
      example: "⁠",
      character: "⁠",
      notes: "Vergelijkbaar met Zero Width No-Break Space maar zonder historische ballast. Voorkomt regelbreuken.",
    },
    {
      unicode: "U+2061",
      description: "Functie Toepassing",
      html: "&#8289;",
      example: "⁡",
      character: "⁡",
      notes: "Een onzichtbare operator die in de wiskundige notatie wordt gebruikt om de toepassing van een functie aan te geven.",
    },
    {
      unicode: "U+2062",
      description: "Onzichtbare Vermenigvuldiging",
      html: "&#8290;",
      example: "⁢",
      character: "⁢",
      notes: "Een onzichtbare vermenigvuldigingsoperator die in de wiskundige notatie wordt gebruikt.",
    },
    {
      unicode: "U+2063",
      description: "Onzichtbare Scheidingsteken",
      html: "&#8291;",
      example: "⁣",
      character: "⁣",
      notes: "Een onzichtbaar scheidingsteken dat in de wiskundige notatie wordt gebruikt, vergelijkbaar met een komma.",
    },
    {
      unicode: "U+2064",
      description: "Onzichtbare Optelling",
      html: "&#8292;",
      example: "⁤",
      character: "⁤",
      notes: "Een onzichtbare opteloperator die in de wiskundige notatie wordt gebruikt.",
    },
    {
      unicode: "U+3000",
      description: "Ideografische Spatie",
      html: "&#12288;",
      example: "　",
      character: "　",
      notes: "Een spatie van volledige breedte, gebruikt in de Oost-Aziatische typografie en even breed als een ideografisch teken.",
    },
    {
      unicode: "U+3164",
      description: "Hangul Filler",
      html: "&#12644;",
      example: "ㅤ",
      character: "ㅤ",
      notes: "Gebruikt in Koreaanse teksten als tijdelijke aanduiding. Een van de populairste onzichtbare tekens op sociale media.",
    },
    {
      unicode: "U+FEFF",
      description: "Zero Width No-Break Space (BOM)",
      html: "&#65279;",
      example: "﻿",
      character: "﻿",
      notes: "Oorspronkelijk gebruikt als Byte Order Mark aan het begin van tekstbestanden. Voorkomt ook regelbreuken.",
    },
    {
      unicode: "U+180E",
      description: "Mongoolse Vocaalseparator",
      html: "&#6158;",
      example: " ",
      character: " ",
      notes: "Gebruikt in Mongoolse teksten om klinkers van elkaar te scheiden. Sommige platforms tonen dit als onzichtbaar.",
    },
    {
      unicode: "U+2800",
      description: "Braille Patroon Leeg",
      html: "&#10240;",
      example: "⠀",
      character: "⠀",
      notes: "Het lege Braille-patroon. Het verschijnt vaak als een zichtbare spatie maar werkt als een onzichtbaar teken op veel platforms.",
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
                <TableHead className="text-yellow-300 bg-[#182244] text-center">Acties</TableHead>
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
