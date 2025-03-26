"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"

// Icons (exemplo utiliza ícones do lucide-react)
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
  pt: {
    title: "Caracteres Unicode Invisíveis",
    subtitle: "Uma coleção abrangente de caracteres Unicode invisíveis e espaços",
    table: {
      unicode: "Unicode",
      description: "Descrição",
      html: "HTML",
      example: "Exemplo",
      copy: "Copiar",
    },
    toast: {
      copiedTitle: "Copiado!",
      copiedDescription: "Caractere copiado para a área de transferência",
    },
  },
  // ... outras traduções ...
}

// Defina o seu locale aqui
const locale = "pt"
const t = translations[locale]

export default function UnicodeTable() {
  const { toast } = useToast()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [showInfo, setShowInfo] = useState<number | null>(null)

  const unicodeChars: UnicodeChar[] = [
    {
      unicode: "U+0020",
      description: "Espaço",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "O caractere de espaço padrão utilizado no texto. É o caractere gerado ao pressionar a barra de espaço.",
    },
    {
      unicode: "U+00A0",
      description: "Espaço Sem Quebra",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "Semelhante a um espaço comum, mas impede quebras de linha em sua posição.",
    },
    {
      unicode: "U+2000",
      description: "En Quad",
      html: "&#8192;",
      example: " ",
      character: " ",
      notes: "Um espaço equivalente à largura da fonte (largura em 'em').",
    },
    {
      unicode: "U+2001",
      description: "Em Quad",
      html: "&#8193;",
      example: " ",
      character: " ",
      notes: "Um espaço equivalente à altura da fonte (altura em 'em').",
    },
    {
      unicode: "U+2002",
      description: "En Space",
      html: "&#8194;",
      example: " ",
      character: " ",
      notes: "Um espaço com a largura de um en (metade de um em).",
    },
    {
      unicode: "U+2003",
      description: "Em Space",
      html: "&#8195;",
      example: " ",
      character: " ",
      notes: "Um espaço com a largura de um em.",
    },
    {
      unicode: "U+2004",
      description: "Espaço de Um Terço de Em",
      html: "&#8196;",
      example: " ",
      character: " ",
      notes: "Um espaço com um terço da largura de um em.",
    },
    {
      unicode: "U+2005",
      description: "Espaço de Um Quarto de Em",
      html: "&#8197;",
      example: " ",
      character: " ",
      notes: "Um espaço com um quarto da largura de um em.",
    },
    {
      unicode: "U+2006",
      description: "Espaço de Um Sexto de Em",
      html: "&#8198;",
      example: " ",
      character: " ",
      notes: "Um espaço com um sexto da largura de um em.",
    },
    {
      unicode: "U+2007",
      description: "Espaço para Dígitos",
      html: "&#8199;",
      example: " ",
      character: " ",
      notes: "Um espaço com a mesma largura de um dígito em fontes com dígitos de largura fixa.",
    },
    {
      unicode: "U+2008",
      description: "Espaço para Pontuação",
      html: "&#8200;",
      example: " ",
      character: " ",
      notes: "Um espaço com a largura de um ponto/final de frase.",
    },
    {
      unicode: "U+2009",
      description: "Espaço Fino",
      html: "&#8201;",
      example: " ",
      character: " ",
      notes: "Um espaço com aproximadamente um quinto (às vezes um sexto) de um em.",
    },
    {
      unicode: "U+200A",
      description: "Espaço de Cabelo",
      html: "&#8202;",
      example: " ",
      character: " ",
      notes: "Um espaço muito fino, mais fino que o espaço fino.",
    },
    {
      unicode: "U+200B",
      description: "Espaço de Largura Zero",
      html: "&#8203;",
      example: "​",
      character: "​",
      notes: "Não ocupa largura, mas permite quebras de linha. Um dos caracteres invisíveis mais utilizados.",
    },
    {
      unicode: "U+200C",
      description: "Não-Conector de Largura Zero",
      html: "&#8204;",
      example: "‌",
      character: "‌",
      notes: "Previne a junção de caracteres que normalmente se uniriam (utilizado em scripts como o árabe).",
    },
    {
      unicode: "U+200D",
      description: "Conector de Largura Zero",
      html: "&#8205;",
      example: "‍",
      character: "‍",
      notes: "Faz com que caracteres se juntem quando normalmente não se uniriam. Usado em sequências de emoji para criar emojis combinados.",
    },
    {
      unicode: "U+200E",
      description: "Marcador da Esquerda para a Direita",
      html: "&#8206;",
      example: "‎",
      character: "‎",
      notes: "Marcador invisível que afeta o algoritmo bidirecional, forçando o texto a ser tratado como da esquerda para a direita.",
    },
    {
      unicode: "U+200F",
      description: "Marcador da Direita para a Esquerda",
      html: "&#8207;",
      example: "‏",
      character: "‏",
      notes: "Marcador invisível que afeta o algoritmo bidirecional, forçando o texto a ser tratado como da direita para a esquerda.",
    },
    {
      unicode: "U+205F",
      description: "Espaço Matemático Médio",
      html: "&#8287;",
      example: " ",
      character: " ",
      notes: "Um espaço utilizado em notação matemática, tipicamente 4/18 de um em.",
    },
    {
      unicode: "U+2060",
      description: "Conector de Palavra",
      html: "&#8288;",
      example: "⁠",
      character: "⁠",
      notes: "Semelhante ao Espaço Sem Quebra de Largura Zero, mas sem histórico. Impede quebras de linha.",
    },
    {
      unicode: "U+2061",
      description: "Aplicação de Função",
      html: "&#8289;",
      example: "⁡",
      character: "⁡",
      notes: "Operador invisível usado em notação matemática para indicar aplicação de função.",
    },
    {
      unicode: "U+2062",
      description: "Multiplicação Invisível",
      html: "&#8290;",
      example: "⁢",
      character: "⁢",
      notes: "Operador de multiplicação invisível utilizado em notação matemática.",
    },
    {
      unicode: "U+2063",
      description: "Separador Invisível",
      html: "&#8291;",
      example: "⁣",
      character: "⁣",
      notes: "Separador invisível usado em notação matemática, semelhante a uma vírgula.",
    },
    {
      unicode: "U+2064",
      description: "Adição Invisível",
      html: "&#8292;",
      example: "⁤",
      character: "⁤",
      notes: "Operador de adição invisível utilizado em notação matemática.",
    },
    {
      unicode: "U+3000",
      description: "Espaço Ideográfico",
      html: "&#12288;",
      example: "　",
      character: "　",
      notes: "Espaço de largura total utilizado na tipografia de idiomas do Leste Asiático, com a mesma largura de um caractere ideográfico.",
    },
    {
      unicode: "U+3164",
      description: "Preenchedor Hangul",
      html: "&#12644;",
      example: "ㅤ",
      character: "ㅤ",
      notes: "Utilizado em textos coreanos como um marcador. Um dos caracteres invisíveis mais populares nas redes sociais.",
    },
    {
      unicode: "U+FEFF",
      description: "Espaço Sem Quebra de Largura Zero (BOM)",
      html: "&#65279;",
      example: "﻿",
      character: "﻿",
      notes: "Originalmente utilizado como Marca de Ordem de Bytes no início de arquivos de texto. Também impede quebras de linha.",
    },
    {
      unicode: "U+180E",
      description: "Separador de Vogais Mongóis",
      html: "&#6158;",
      example: " ",
      character: " ",
      notes: "Utilizado em textos mongóis para separar vogais. Algumas plataformas o exibem como invisível.",
    },
    {
      unicode: "U+2800",
      description: "Padrão Braille em Branco",
      html: "&#10240;",
      example: "⠀",
      character: "⠀",
      notes: "O padrão Braille em branco/vazio. Frequentemente aparece como um espaço visível, mas funciona como caractere invisível em muitas plataformas.",
    },
  ]

  const handleCopy = (char: string, index: number) => {
    navigator.clipboard.writeText(char)
    toast({
      title: t.toast.copiedTitle,
      description: t.toast.copiedDescription,
    })
    setCopiedIndex(index)
    // Reinicia após um curto intervalo
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

        {/* Ajuste a cor do container externo para combinar com seu site */}
        <div className="w-full bg-[#0B0E19] rounded-lg overflow-hidden border border-yellow-300/50">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-yellow-300 bg-[#182244]">{t.table.unicode}</TableHead>
                <TableHead className="text-yellow-300 bg-[#182244]">{t.table.description}</TableHead>
                <TableHead className="text-yellow-300 bg-[#182244]">{t.table.html}</TableHead>
                <TableHead className="text-yellow-300 bg-[#182244]">{t.table.example}</TableHead>
                <TableHead className="text-yellow-300 bg-[#182244] text-center">Ações</TableHead>
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
