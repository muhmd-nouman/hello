"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"

// Icons (Beispiel verwendet lucide-react Icons)
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
  de: {
    title: "Unsichtbare Unicode-Zeichen",
    subtitle: "Eine umfassende Sammlung unsichtbarer Unicode-Zeichen und Leerzeichen",
    table: {
      unicode: "Unicode",
      description: "Beschreibung",
      html: "HTML",
      example: "Beispiel",
      copy: "Kopieren",
    },
    toast: {
      copiedTitle: "Kopiert!",
      copiedDescription: "Zeichen in die Zwischenablage kopiert",
    },
  },
  // ... weitere Übersetzungen ...
}

const locale = "de"
const t = translations[locale]

export default function UnicodeTable() {
  const { toast } = useToast()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [showInfo, setShowInfo] = useState<number | null>(null)

  const unicodeChars: UnicodeChar[] = [
    {
      unicode: "U+0020",
      description: "Leerzeichen",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "Das Standard-Leerzeichen, das beim Drücken der Leertaste erzeugt wird.",
    },
    {
      unicode: "U+00A0",
      description: "Geschütztes Leerzeichen",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "Ähnlich einem normalen Leerzeichen, verhindert jedoch Zeilenumbrüche.",
    },
    {
      unicode: "U+2000",
      description: "En Quad",
      html: "&#8192;",
      example: " ",
      character: " ",
      notes: "Ein Leerzeichen, das der Breite der Schrift (in em) entspricht.",
    },
    {
      unicode: "U+2001",
      description: "Em Quad",
      html: "&#8193;",
      example: " ",
      character: " ",
      notes: "Ein Leerzeichen, das der Höhe der Schrift (in em) entspricht.",
    },
    {
      unicode: "U+2002",
      description: "En Space",
      html: "&#8194;",
      example: " ",
      character: " ",
      notes: "Ein Leerzeichen, das einen en breit ist (halbes em).",
    },
    {
      unicode: "U+2003",
      description: "Em Space",
      html: "&#8195;",
      example: " ",
      character: " ",
      notes: "Ein Leerzeichen, das einem em breit ist.",
    },
    {
      unicode: "U+2004",
      description: "Drittel-Em-Leerzeichen",
      html: "&#8196;",
      example: " ",
      character: " ",
      notes: "Ein Leerzeichen, das ein Drittel eines em breit ist.",
    },
    {
      unicode: "U+2005",
      description: "Viertel-Em-Leerzeichen",
      html: "&#8197;",
      example: " ",
      character: " ",
      notes: "Ein Leerzeichen, das ein Viertel eines em breit ist.",
    },
    {
      unicode: "U+2006",
      description: "Sechstel-Em-Leerzeichen",
      html: "&#8198;",
      example: " ",
      character: " ",
      notes: "Ein Leerzeichen, das ein Sechstel eines em breit ist.",
    },
    {
      unicode: "U+2007",
      description: "Ziffernraum",
      html: "&#8199;",
      example: " ",
      character: " ",
      notes: "Ein Leerzeichen, das der Breite einer Ziffer in Fonts mit fester Breite entspricht.",
    },
    {
      unicode: "U+2008",
      description: "Interpunktionsraum",
      html: "&#8200;",
      example: " ",
      character: " ",
      notes: "Ein Leerzeichen, das der Breite eines Satzzeichens entspricht.",
    },
    {
      unicode: "U+2009",
      description: "Schmaler Raum",
      html: "&#8201;",
      example: " ",
      character: " ",
      notes: "Ein Leerzeichen, das etwa ein Fünftel (manchmal ein Sechstel) eines em breit ist.",
    },
    {
      unicode: "U+200A",
      description: "Haarraum",
      html: "&#8202;",
      example: " ",
      character: " ",
      notes: "Ein sehr schmaler Raum, schmaler als der schmale Raum.",
    },
    {
      unicode: "U+200B",
      description: "Zero-Width Space",
      html: "&#8203;",
      example: "​",
      character: "​",
      notes: "Nimmt keine Breite ein, erlaubt aber Zeilenumbrüche. Eines der am häufigsten verwendeten unsichtbaren Zeichen.",
    },
    {
      unicode: "U+200C",
      description: "Zero-Width Non-Joiner",
      html: "&#8204;",
      example: "‌",
      character: "‌",
      notes: "Verhindert, dass Zeichen zusammengefügt werden, wenn sie es normalerweise tun würden (wird in Schriften wie Arabisch verwendet).",
    },
    {
      unicode: "U+200D",
      description: "Zero-Width Joiner",
      html: "&#8205;",
      example: "‍",
      character: "‍",
      notes: "Veranlasst Zeichen, sich zu verbinden, wenn sie es normalerweise nicht tun würden. Wird in Emoji-Sequenzen zur Erstellung kombinierter Emojis genutzt.",
    },
    {
      unicode: "U+200E",
      description: "Links-nach-Rechts-Mark",
      html: "&#8206;",
      example: "‎",
      character: "‎",
      notes: "Ein unsichtbares Markierungssymbol, das den bidirektionalen Algorithmus beeinflusst und den Text von links nach rechts anzeigt.",
    },
    {
      unicode: "U+200F",
      description: "Rechts-nach-Links-Mark",
      html: "&#8207;",
      example: "‏",
      character: "‏",
      notes: "Ein unsichtbares Markierungssymbol, das den bidirektionalen Algorithmus beeinflusst und den Text von rechts nach links anzeigt.",
    },
    {
      unicode: "U+205F",
      description: "Mittelmathematischer Raum",
      html: "&#8287;",
      example: " ",
      character: " ",
      notes: "Ein in mathematischen Notationen verwendeter Raum, typischerweise 4/18 eines em.",
    },
    {
      unicode: "U+2060",
      description: "Word Joiner",
      html: "&#8288;",
      example: "⁠",
      character: "⁠",
      notes: "Ähnlich wie Zero-Width No-Break Space, aber ohne Altlasten. Verhindert Zeilenumbrüche.",
    },
    {
      unicode: "U+2061",
      description: "Funktionsanwendung",
      html: "&#8289;",
      example: "⁡",
      character: "⁡",
      notes: "Ein unsichtbarer Operator, der in der mathematischen Notation zur Anzeige der Funktionsanwendung verwendet wird.",
    },
    {
      unicode: "U+2062",
      description: "Unsichtbares Malzeichen",
      html: "&#8290;",
      example: "⁢",
      character: "⁢",
      notes: "Ein unsichtbarer Multiplikationsoperator, der in der mathematischen Notation verwendet wird.",
    },
    {
      unicode: "U+2063",
      description: "Unsichtbarer Trenner",
      html: "&#8291;",
      example: "⁣",
      character: "⁣",
      notes: "Ein unsichtbarer Trenner, der in der mathematischen Notation ähnlich einer Kommasetzung verwendet wird.",
    },
    {
      unicode: "U+2064",
      description: "Unsichtbares Plus",
      html: "&#8292;",
      example: "⁤",
      character: "⁤",
      notes: "Ein unsichtbarer Additionsoperator, der in der mathematischen Notation verwendet wird.",
    },
    {
      unicode: "U+3000",
      description: "Ideographischer Raum",
      html: "&#12288;",
      example: "　",
      character: "　",
      notes: "Ein Vollbreiten-Leerzeichen, das in der ostasiatischen Typografie verwendet wird und die Breite eines ideographischen Zeichens hat.",
    },
    {
      unicode: "U+3164",
      description: "Hangul Filler",
      html: "&#12644;",
      example: "ㅤ",
      character: "ㅤ",
      notes: "Wird im koreanischen Text als Platzhalter verwendet. Eines der beliebtesten unsichtbaren Zeichen in sozialen Netzwerken.",
    },
    {
      unicode: "U+FEFF",
      description: "Zero-Width No-Break Space (BOM)",
      html: "&#65279;",
      example: "﻿",
      character: "﻿",
      notes: "Ursprünglich als Byte Order Mark am Anfang von Textdateien verwendet. Verhindert auch Zeilenumbrüche.",
    },
    {
      unicode: "U+180E",
      description: "Mongolischer Vokaltrenner",
      html: "&#6158;",
      example: " ",
      character: " ",
      notes: "Wird im mongolischen Text zur Trennung von Vokalen verwendet. Einige Plattformen zeigen ihn als unsichtbar an.",
    },
    {
      unicode: "U+2800",
      description: "Braille-Muster Leer",
      html: "&#10240;",
      example: "⠀",
      character: "⠀",
      notes: "Das leere/vacante Braille-Muster. Wird oft als sichtbares Leerzeichen angezeigt, funktioniert aber auf vielen Plattformen als unsichtbares Zeichen.",
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
                <TableHead className="text-yellow-300 bg-[#182244] text-center">Aktionen</TableHead>
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
