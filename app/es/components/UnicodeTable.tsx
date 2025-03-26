"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"

// Íconos (ejemplo usa íconos de lucide-react)
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
  es: {
    title: "Caracteres Unicode Invisibles",
    subtitle: "Una colección completa de caracteres Unicode invisibles y espacios",
    table: {
      unicode: "Unicode",
      description: "Descripción",
      html: "HTML",
      example: "Ejemplo",
      copy: "Copiar",
    },
    toast: {
      copiedTitle: "¡Copiado!",
      copiedDescription: "Carácter copiado al portapapeles",
    },
  },
  // ... otras traducciones ...
}

// Escoge tu locale aquí
const locale = "es"
const t = translations[locale]

export default function UnicodeTable() {
  const { toast } = useToast()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [showInfo, setShowInfo] = useState<number | null>(null)

  const unicodeChars: UnicodeChar[] = [
    {
      unicode: "U+0020",
      description: "Espacio",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "El carácter de espacio estándar usado en el texto. Es el carácter que se genera al presionar la barra espaciadora.",
    },
    {
      unicode: "U+00A0",
      description: "Espacio sin separación",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "Similar a un espacio común, pero impide saltos de línea en su posición.",
    },
    {
      unicode: "U+2000",
      description: "En Quad",
      html: "&#8192;",
      example: " ",
      character: " ",
      notes: "Un espacio equivalente al ancho de la fuente (ancho en 'em').",
    },
    {
      unicode: "U+2001",
      description: "Em Quad",
      html: "&#8193;",
      example: " ",
      character: " ",
      notes: "Un espacio equivalente a la altura de la fuente (alto en 'em').",
    },
    {
      unicode: "U+2002",
      description: "En Space",
      html: "&#8194;",
      example: " ",
      character: " ",
      notes: "Un espacio que tiene el ancho de un en (la mitad de un em).",
    },
    {
      unicode: "U+2003",
      description: "Em Space",
      html: "&#8195;",
      example: " ",
      character: " ",
      notes: "Un espacio que tiene el ancho de un em.",
    },
    {
      unicode: "U+2004",
      description: "Espacio de un tercio de Em",
      html: "&#8196;",
      example: " ",
      character: " ",
      notes: "Un espacio que equivale a un tercio del ancho de un em.",
    },
    {
      unicode: "U+2005",
      description: "Espacio de un cuarto de Em",
      html: "&#8197;",
      example: " ",
      character: " ",
      notes: "Un espacio que equivale a un cuarto del ancho de un em.",
    },
    {
      unicode: "U+2006",
      description: "Espacio de un sexto de Em",
      html: "&#8198;",
      example: " ",
      character: " ",
      notes: "Un espacio que equivale a un sexto del ancho de un em.",
    },
    {
      unicode: "U+2007",
      description: "Espacio para dígitos",
      html: "&#8199;",
      example: " ",
      character: " ",
      notes: "Un espacio con el mismo ancho que un dígito en fuentes con dígitos de ancho fijo.",
    },
    {
      unicode: "U+2008",
      description: "Espacio para puntuación",
      html: "&#8200;",
      example: " ",
      character: " ",
      notes: "Un espacio con el ancho de un punto o final de oración.",
    },
    {
      unicode: "U+2009",
      description: "Espacio delgado",
      html: "&#8201;",
      example: " ",
      character: " ",
      notes: "Un espacio que equivale a aproximadamente un quinto (a veces un sexto) de un em.",
    },
    {
      unicode: "U+200A",
      description: "Espacio de cabello",
      html: "&#8202;",
      example: " ",
      character: " ",
      notes: "Un espacio muy delgado, más delgado que el espacio delgado.",
    },
    {
      unicode: "U+200B",
      description: "Espacio de ancho cero",
      html: "&#8203;",
      example: "​",
      character: "​",
      notes: "No ocupa ancho, pero permite saltos de línea. Es uno de los caracteres invisibles más utilizados.",
    },
    {
      unicode: "U+200C",
      description: "No-conector de ancho cero",
      html: "&#8204;",
      example: "‌",
      character: "‌",
      notes: "Evita que los caracteres se unan cuando normalmente lo harían (utilizado en escrituras como la árabe).",
    },
    {
      unicode: "U+200D",
      description: "Conector de ancho cero",
      html: "&#8205;",
      example: "‍",
      character: "‍",
      notes: "Hace que los caracteres se unan cuando normalmente no lo harían. Se utiliza en secuencias de emoji para crear emojis combinados.",
    },
    {
      unicode: "U+200E",
      description: "Marcador de izquierda a derecha",
      html: "&#8206;",
      example: "‎",
      character: "‎",
      notes: "Marcador invisible que afecta el algoritmo bidireccional, forzando el texto a tratarse de izquierda a derecha.",
    },
    {
      unicode: "U+200F",
      description: "Marcador de derecha a izquierda",
      html: "&#8207;",
      example: "‏",
      character: "‏",
      notes: "Marcador invisible que afecta el algoritmo bidireccional, forzando el texto a tratarse de derecha a izquierda.",
    },
    {
      unicode: "U+205F",
      description: "Espacio matemático medio",
      html: "&#8287;",
      example: " ",
      character: " ",
      notes: "Un espacio utilizado en notación matemática, típicamente 4/18 de un em.",
    },
    {
      unicode: "U+2060",
      description: "Conector de palabra",
      html: "&#8288;",
      example: "⁠",
      character: "⁠",
      notes: "Similar al espacio sin separación de ancho cero pero sin cargas históricas. Impide saltos de línea.",
    },
    {
      unicode: "U+2061",
      description: "Aplicación de función",
      html: "&#8289;",
      example: "⁡",
      character: "⁡",
      notes: "Operador invisible usado en notación matemática para indicar la aplicación de una función.",
    },
    {
      unicode: "U+2062",
      description: "Multiplicación invisible",
      html: "&#8290;",
      example: "⁢",
      character: "⁢",
      notes: "Operador de multiplicación invisible usado en notación matemática.",
    },
    {
      unicode: "U+2063",
      description: "Separador invisible",
      html: "&#8291;",
      example: "⁣",
      character: "⁣",
      notes: "Separador invisible usado en notación matemática, similar a una coma.",
    },
    {
      unicode: "U+2064",
      description: "Suma invisible",
      html: "&#8292;",
      example: "⁤",
      character: "⁤",
      notes: "Operador de suma invisible usado en notación matemática.",
    },
    {
      unicode: "U+3000",
      description: "Espacio ideográfico",
      html: "&#12288;",
      example: "　",
      character: "　",
      notes: "Espacio de ancho completo utilizado en la tipografía de idiomas del Este de Asia, con el mismo ancho que un carácter ideográfico.",
    },
    {
      unicode: "U+3164",
      description: "Relleno Hangul",
      html: "&#12644;",
      example: "ㅤ",
      character: "ㅤ",
      notes: "Utilizado en textos coreanos como marcador. Uno de los caracteres invisibles más populares en las redes sociales.",
    },
    {
      unicode: "U+FEFF",
      description: "Espacio sin separación de ancho cero (BOM)",
      html: "&#65279;",
      example: "﻿",
      character: "﻿",
      notes: "Originalmente usado como Marca de Orden de Bytes al inicio de archivos de texto. También impide saltos de línea.",
    },
    {
      unicode: "U+180E",
      description: "Separador de vocales mongol",
      html: "&#6158;",
      example: " ",
      character: " ",
      notes: "Utilizado en textos mongoles para separar vocales. Algunas plataformas lo muestran como invisible.",
    },
    {
      unicode: "U+2800",
      description: "Patrón Braille en blanco",
      html: "&#10240;",
      example: "⠀",
      character: "⠀",
      notes: "El patrón Braille en blanco/vacío. A menudo aparece como un espacio visible, pero funciona como un carácter invisible en muchas plataformas.",
    },
  ]

  const handleCopy = (char: string, index: number) => {
    navigator.clipboard.writeText(char)
    toast({
      title: t.toast.copiedTitle,
      description: t.toast.copiedDescription,
    })
    setCopiedIndex(index)
    // Reiniciar después de un corto intervalo
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

        {/* Ajusta el color del contenedor exterior para que coincida con tu sitio */}
        <div className="w-full bg-[#0B0E19] rounded-lg overflow-hidden border border-yellow-300/50">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-yellow-300 bg-[#182244]">{t.table.unicode}</TableHead>
                <TableHead className="text-yellow-300 bg-[#182244]">{t.table.description}</TableHead>
                <TableHead className="text-yellow-300 bg-[#182244]">{t.table.html}</TableHead>
                <TableHead className="text-yellow-300 bg-[#182244]">{t.table.example}</TableHead>
                <TableHead className="text-yellow-300 bg-[#182244] text-center">Acciones</TableHead>
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
