"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"
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
  it: {
    title: "Caratteri Unicode Invisibili",
    subtitle: "Una raccolta completa di caratteri Unicode invisibili e spazi",
    table: {
      unicode: "Unicode",
      description: "Descrizione",
      html: "HTML",
      example: "Esempio",
      copy: "Copia",
    },
    toast: {
      copiedTitle: "Copiato!",
      copiedDescription: "Carattere copiato negli appunti",
    },
  },
  
}
const locale = "it"
const t = translations[locale]

export default function UnicodeTable() {
  const { toast } = useToast()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [showInfo, setShowInfo] = useState<number | null>(null)

  const unicodeChars: UnicodeChar[] = [
    {
      unicode: "U+0020",
      description: "Spazio",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "Il carattere spazio standard utilizzato nel testo. Viene generato premendo la barra spaziatrice.",
    },
    {
      unicode: "U+00A0",
      description: "Spazio Non Interrotto",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "Simile a uno spazio normale, ma impedisce i ritorni a capo in quel punto.",
    },
    {
      unicode: "U+2000",
      description: "En Quad",
      html: "&#8192;",
      example: " ",
      character: " ",
      notes: "Uno spazio equivalente alla larghezza della tipografia (in em).",
    },
    {
      unicode: "U+2001",
      description: "Em Quad",
      html: "&#8193;",
      example: " ",
      character: " ",
      notes: "Uno spazio equivalente all’altezza della tipografia (in em).",
    },
    {
      unicode: "U+2002",
      description: "En Space",
      html: "&#8194;",
      example: " ",
      character: " ",
      notes: "Uno spazio della larghezza di un en (la metà di un em).",
    },
    {
      unicode: "U+2003",
      description: "Em Space",
      html: "&#8195;",
      example: " ",
      character: " ",
      notes: "Uno spazio della larghezza di un em.",
    },
    {
      unicode: "U+2004",
      description: "Spazio di Un Terzo di Em",
      html: "&#8196;",
      example: " ",
      character: " ",
      notes: "Uno spazio che occupa un terzo di un em.",
    },
    {
      unicode: "U+2005",
      description: "Spazio di Un Quarto di Em",
      html: "&#8197;",
      example: " ",
      character: " ",
      notes: "Uno spazio che occupa un quarto di un em.",
    },
    {
      unicode: "U+2006",
      description: "Spazio di Un Sesto di Em",
      html: "&#8198;",
      example: " ",
      character: " ",
      notes: "Uno spazio che occupa un sesto di un em.",
    },
    {
      unicode: "U+2007",
      description: "Spazio per Cifre",
      html: "&#8199;",
      example: " ",
      character: " ",
      notes: "Uno spazio della stessa larghezza di una cifra in caratteri a larghezza fissa.",
    },
    {
      unicode: "U+2008",
      description: "Spazio di Punteggiatura",
      html: "&#8200;",
      example: " ",
      character: " ",
      notes: "Uno spazio equivalente alla larghezza di un punto o di un segno di punteggiatura.",
    },
    {
      unicode: "U+2009",
      description: "Spazio Sottile",
      html: "&#8201;",
      example: " ",
      character: " ",
      notes: "Uno spazio che occupa circa un quinto (a volte un sesto) di un em.",
    },
    {
      unicode: "U+200A",
      description: "Spazio Minimo",
      html: "&#8202;",
      example: " ",
      character: " ",
      notes: "Uno spazio molto sottile, ancora più sottile dello spazio sottile.",
    },
    {
      unicode: "U+200B",
      description: "Zero Width Space",
      html: "&#8203;",
      example: "​",
      character: "​",
      notes: "Non occupa larghezza ma permette i ritorni a capo. Uno dei caratteri invisibili più usati.",
    },
    {
      unicode: "U+200C",
      description: "Zero Width Non-Joiner",
      html: "&#8204;",
      example: "‌",
      character: "‌",
      notes: "Impedisce che i caratteri si uniscano quando normalmente lo farebbero (usato in scritture come l'arabo).",
    },
    {
      unicode: "U+200D",
      description: "Zero Width Joiner",
      html: "&#8205;",
      example: "‍",
      character: "‍",
      notes: "Induce l'unione dei caratteri che normalmente non si unirebbero. Usato nelle sequenze emoji per creare emoji combinati.",
    },
    {
      unicode: "U+200E",
      description: "Marcatura da Sinistra a Destra",
      html: "&#8206;",
      example: "‎",
      character: "‎",
      notes: "Marcatura invisibile che influenza l'algoritmo bidirezionale, forzando il testo a essere visualizzato da sinistra a destra.",
    },
    {
      unicode: "U+200F",
      description: "Marcatura da Destra a Sinistra",
      html: "&#8207;",
      example: "‏",
      character: "‏",
      notes: "Marcatura invisibile che influenza l'algoritmo bidirezionale, forzando il testo a essere visualizzato da destra a sinistra.",
    },
    {
      unicode: "U+205F",
      description: "Spazio Matematico Medio",
      html: "&#8287;",
      example: " ",
      character: " ",
      notes: "Uno spazio utilizzato nella notazione matematica, tipicamente pari a 4/18 di un em.",
    },
    {
      unicode: "U+2060",
      description: "Word Joiner",
      html: "&#8288;",
      example: "⁠",
      character: "⁠",
      notes: "Simile al Zero Width No-Break Space ma senza bagagli storici. Impedisce i ritorni a capo.",
    },
    {
      unicode: "U+2061",
      description: "Applicazione di Funzione",
      html: "&#8289;",
      example: "⁡",
      character: "⁡",
      notes: "Operatore invisibile usato in notazione matematica per indicare l'applicazione di una funzione.",
    },
    {
      unicode: "U+2062",
      description: "Moltiplicazione Invisibile",
      html: "&#8290;",
      example: "⁢",
      character: "⁢",
      notes: "Operatore di moltiplicazione invisibile utilizzato in notazione matematica.",
    },
    {
      unicode: "U+2063",
      description: "Separatore Invisibile",
      html: "&#8291;",
      example: "⁣",
      character: "⁣",
      notes: "Separatore invisibile usato in notazione matematica, simile a una virgola.",
    },
    {
      unicode: "U+2064",
      description: "Addizione Invisibile",
      html: "&#8292;",
      example: "⁤",
      character: "⁤",
      notes: "Operatore di addizione invisibile utilizzato in notazione matematica.",
    },
    {
      unicode: "U+3000",
      description: "Spazio Ideografico",
      html: "&#12288;",
      example: "　",
      character: "　",
      notes: "Spazio a larghezza intera utilizzato nella tipografia dell'Est asiatico, pari in larghezza a un carattere ideografico.",
    },
    {
      unicode: "U+3164",
      description: "Hangul Filler",
      html: "&#12644;",
      example: "ㅤ",
      character: "ㅤ",
      notes: "Utilizzato nel testo coreano come segnaposto. Uno dei caratteri invisibili più popolari sui social network.",
    },
    {
      unicode: "U+FEFF",
      description: "Zero Width No-Break Space (BOM)",
      html: "&#65279;",
      example: "﻿",
      character: "﻿",
      notes: "Inizialmente usato come Byte Order Mark all'inizio dei file di testo. Impedisce anche i ritorni a capo.",
    },
    {
      unicode: "U+180E",
      description: "Separatore di Vocali Mongolo",
      html: "&#6158;",
      example: " ",
      character: " ",
      notes: "Utilizzato nel testo mongolo per separare le vocali. Alcune piattaforme lo mostrano come invisibile.",
    },
    {
      unicode: "U+2800",
      description: "Motivo Braille Vuoto",
      html: "&#10240;",
      example: "⠀",
      character: "⠀",
      notes: "Il motivo Braille vuoto. Spesso appare come uno spazio visibile ma funziona come un carattere invisibile su molte piattaforme.",
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
                <TableHead className="text-yellow-300 bg-[#182244] text-center">Azioni</TableHead>
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
