"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"

// Иконки (пример использует иконки из lucide-react)
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
  ru: {
    title: "Невидимые Unicode-символы",
    subtitle: "Полная коллекция невидимых Unicode-символов и пробелов",
    table: {
      unicode: "Unicode",
      description: "Описание",
      html: "HTML",
      example: "Пример",
      copy: "Копировать",
    },
    toast: {
      copiedTitle: "Скопировано!",
      copiedDescription: "Символ скопирован в буфер обмена",
    },
  },
  // ... дополнительные переводы при необходимости ...
}

const locale = "ru"
const t = translations[locale]

export default function UnicodeTable() {
  const { toast } = useToast()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [showInfo, setShowInfo] = useState<number | null>(null)

  const unicodeChars: UnicodeChar[] = [
    {
      unicode: "U+0020",
      description: "Пробел",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "Стандартный пробел, используемый в тексте. Генерируется при нажатии клавиши пробел.",
    },
    {
      unicode: "U+00A0",
      description: "Неразрывный пробел",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "Похож на обычный пробел, но не допускает разрыва строки.",
    },
    {
      unicode: "U+2000",
      description: "En Quad",
      html: "&#8192;",
      example: " ",
      character: " ",
      notes: "Пробел, ширина которого соответствует ширине шрифта (в em).",
    },
    {
      unicode: "U+2001",
      description: "Em Quad",
      html: "&#8193;",
      example: " ",
      character: " ",
      notes: "Пробел, высота которого соответствует высоте шрифта (в em).",
    },
    {
      unicode: "U+2002",
      description: "En Space",
      html: "&#8194;",
      example: " ",
      character: " ",
      notes: "Пробел шириной в один en (половина em).",
    },
    {
      unicode: "U+2003",
      description: "Em Space",
      html: "&#8195;",
      example: " ",
      character: " ",
      notes: "Пробел шириной в один em.",
    },
    {
      unicode: "U+2004",
      description: "Пробел, равный трети em",
      html: "&#8196;",
      example: " ",
      character: " ",
      notes: "Пробел, занимающий треть ширины em.",
    },
    {
      unicode: "U+2005",
      description: "Пробел, равный четверти em",
      html: "&#8197;",
      example: " ",
      character: " ",
      notes: "Пробел, занимающий четверть ширины em.",
    },
    {
      unicode: "U+2006",
      description: "Пробел, равный одной шестой em",
      html: "&#8198;",
      example: " ",
      character: " ",
      notes: "Пробел, занимающий одну шестую ширины em.",
    },
    {
      unicode: "U+2007",
      description: "Пробел для цифр",
      html: "&#8199;",
      example: " ",
      character: " ",
      notes: "Пробел, имеющий ту же ширину, что и цифра в моноширинном шрифте.",
    },
    {
      unicode: "U+2008",
      description: "Пробел для знаков препинания",
      html: "&#8200;",
      example: " ",
      character: " ",
      notes: "Пробел, ширина которого соответствует ширине точки или знака препинания.",
    },
    {
      unicode: "U+2009",
      description: "Тонкий пробел",
      html: "&#8201;",
      example: " ",
      character: " ",
      notes: "Пробел, занимающий примерно одну пятую (иногда одну шестую) ширины em.",
    },
    {
      unicode: "U+200A",
      description: "Минимальный пробел",
      html: "&#8202;",
      example: " ",
      character: " ",
      notes: "Очень тонкий пробел, тоньше тонкого пробела.",
    },
    {
      unicode: "U+200B",
      description: "Пробел нулевой ширины",
      html: "&#8203;",
      example: "​",
      character: "​",
      notes: "Не занимает ширину, но позволяет перенос строк. Один из наиболее часто используемых невидимых символов.",
    },
    {
      unicode: "U+200C",
      description: "Non-Joiner нулевой ширины",
      html: "&#8204;",
      example: "‌",
      character: "‌",
      notes: "Предотвращает объединение символов, если они обычно сливаются (используется, например, в арабском письме).",
    },
    {
      unicode: "U+200D",
      description: "Joiner нулевой ширины",
      html: "&#8205;",
      example: "‍",
      character: "‍",
      notes: "Заставляет символы сливаться, когда они обычно не сливаются. Используется в последовательностях эмодзи для создания составных эмодзи.",
    },
    {
      unicode: "U+200E",
      description: "Маркер слева направо",
      html: "&#8206;",
      example: "‎",
      character: "‎",
      notes: "Невидимый маркер, влияющий на алгоритм двунаправленного отображения, заставляя текст выводиться слева направо.",
    },
    {
      unicode: "U+200F",
      description: "Маркер справа налево",
      html: "&#8207;",
      example: "‏",
      character: "‏",
      notes: "Невидимый маркер, влияющий на алгоритм двунаправленного отображения, заставляя текст выводиться справа налево.",
    },
    {
      unicode: "U+205F",
      description: "Средний математический пробел",
      html: "&#8287;",
      example: " ",
      character: " ",
      notes: "Пробел, используемый в математической нотации, обычно равный 4/18 em.",
    },
    {
      unicode: "U+2060",
      description: "Word Joiner",
      html: "&#8288;",
      example: "⁠",
      character: "⁠",
      notes: "Похож на пробел без разрыва нулевой ширины, но без «наследия». Предотвращает разрывы строк.",
    },
    {
      unicode: "U+2061",
      description: "Применение функции",
      html: "&#8289;",
      example: "⁡",
      character: "⁡",
      notes: "Невидимый оператор, используемый в математической нотации для указания применения функции.",
    },
    {
      unicode: "U+2062",
      description: "Невидимое умножение",
      html: "&#8290;",
      example: "⁢",
      character: "⁢",
      notes: "Невидимый оператор умножения, используемый в математической нотации.",
    },
    {
      unicode: "U+2063",
      description: "Невидимый разделитель",
      html: "&#8291;",
      example: "⁣",
      character: "⁣",
      notes: "Невидимый разделительный символ, используемый в математической нотации, похож на запятую.",
    },
    {
      unicode: "U+2064",
      description: "Невидимое сложение",
      html: "&#8292;",
      example: "⁤",
      character: "⁤",
      notes: "Невидимый оператор сложения, используемый в математической нотации.",
    },
    {
      unicode: "U+3000",
      description: "Идеографический пробел",
      html: "&#12288;",
      example: "　",
      character: "　",
      notes: "Пробел полной ширины, используемый в типографике Восточной Азии, равный по ширине идеографическому символу.",
    },
    {
      unicode: "U+3164",
      description: "Hangul Filler",
      html: "&#12644;",
      example: "ㅤ",
      character: "ㅤ",
      notes: "Используется в корейском тексте в качестве заполнителя. Один из самых популярных невидимых символов в социальных сетях.",
    },
    {
      unicode: "U+FEFF",
      description: "Zero Width No-Break Space (BOM)",
      html: "&#65279;",
      example: "﻿",
      character: "﻿",
      notes: "Изначально использовался как маркер порядка байтов в начале текстовых файлов. Также предотвращает разрывы строк.",
    },
    {
      unicode: "U+180E",
      description: "Монгольский разделитель гласных",
      html: "&#6158;",
      example: " ",
      character: " ",
      notes: "Используется в монгольском тексте для разделения гласных. Некоторые платформы отображают его как невидимый.",
    },
    {
      unicode: "U+2800",
      description: "Пустой шаблон Брайля",
      html: "&#10240;",
      example: "⠀",
      character: "⠀",
      notes: "Пустой шаблон Брайля. Часто выглядит как видимый пробел, но работает как невидимый символ на многих платформах.",
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
                <TableHead className="text-yellow-300 bg-[#182244] text-center">Действия</TableHead>
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
