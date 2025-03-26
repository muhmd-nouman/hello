"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"

// Ikon (contoh menggunakan ikon dari lucide-react)
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
  id: {
    title: "Karakter Unicode Tak Terlihat",
    subtitle: "Kumpulan lengkap karakter Unicode tak terlihat dan spasi",
    table: {
      unicode: "Unicode",
      description: "Deskripsi",
      html: "HTML",
      example: "Contoh",
      copy: "Salin",
    },
    toast: {
      copiedTitle: "Disalin!",
      copiedDescription: "Karakter disalin ke clipboard",
    },
  },
  // ... terjemahan lain jika diperlukan ...
}

const locale = "id"
const t = translations[locale]

export default function UnicodeTable() {
  const { toast } = useToast()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [showInfo, setShowInfo] = useState<number | null>(null)

  const unicodeChars: UnicodeChar[] = [
    {
      unicode: "U+0020",
      description: "Spasi",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "Karakter spasi standar yang digunakan dalam teks. Dihasilkan saat menekan tombol spasi.",
    },
    {
      unicode: "U+00A0",
      description: "Spasi Tanpa Pemisah",
      html: "&nbsp;",
      example: " ",
      character: " ",
      notes: "Mirip dengan spasi biasa, tetapi mencegah terjadinya pemutusan baris.",
    },
    {
      unicode: "U+2000",
      description: "En Quad",
      html: "&#8192;",
      example: " ",
      character: " ",
      notes: "Spasi yang lebarnya setara dengan lebar huruf (dalam satuan em).",
    },
    {
      unicode: "U+2001",
      description: "Em Quad",
      html: "&#8193;",
      example: " ",
      character: " ",
      notes: "Spasi yang tingginya setara dengan tinggi huruf (dalam satuan em).",
    },
    {
      unicode: "U+2002",
      description: "En Space",
      html: "&#8194;",
      example: " ",
      character: " ",
      notes: "Spasi yang lebarnya setara dengan satu en (setengah dari em).",
    },
    {
      unicode: "U+2003",
      description: "Em Space",
      html: "&#8195;",
      example: " ",
      character: " ",
      notes: "Spasi yang lebarnya setara dengan satu em.",
    },
    {
      unicode: "U+2004",
      description: "Tiga Per-Em Space",
      html: "&#8196;",
      example: " ",
      character: " ",
      notes: "Spasi yang lebarnya sepertiga dari satu em.",
    },
    {
      unicode: "U+2005",
      description: "Empat Per-Em Space",
      html: "&#8197;",
      example: " ",
      character: " ",
      notes: "Spasi yang lebarnya seperempat dari satu em.",
    },
    {
      unicode: "U+2006",
      description: "Enam Per-Em Space",
      html: "&#8198;",
      example: " ",
      character: " ",
      notes: "Spasi yang lebarnya sepertiga dari satu em.",
    },
    {
      unicode: "U+2007",
      description: "Spasi Angka",
      html: "&#8199;",
      example: " ",
      character: " ",
      notes: "Spasi dengan lebar yang sama seperti digit pada font dengan lebar tetap.",
    },
    {
      unicode: "U+2008",
      description: "Spasi Tanda Baca",
      html: "&#8200;",
      example: " ",
      character: " ",
      notes: "Spasi dengan lebar setara dengan tanda titik atau akhir kalimat.",
    },
    {
      unicode: "U+2009",
      description: "Spasi Tipis",
      html: "&#8201;",
      example: " ",
      character: " ",
      notes: "Spasi yang lebarnya sekitar seperlima (kadang seperenam) dari satu em.",
    },
    {
      unicode: "U+200A",
      description: "Spasi Rambut",
      html: "&#8202;",
      example: " ",
      character: " ",
      notes: "Spasi yang sangat tipis, lebih tipis daripada spasi tipis.",
    },
    {
      unicode: "U+200B",
      description: "Zero Width Space",
      html: "&#8203;",
      example: "​",
      character: "​",
      notes: "Tidak memiliki lebar tetapi memungkinkan pemutusan baris. Salah satu karakter tak terlihat yang paling umum digunakan.",
    },
    {
      unicode: "U+200C",
      description: "Zero Width Non-Joiner",
      html: "&#8204;",
      example: "‌",
      character: "‌",
      notes: "Mencegah karakter bergabung ketika seharusnya bergabung (digunakan dalam tulisan seperti Arab).",
    },
    {
      unicode: "U+200D",
      description: "Zero Width Joiner",
      html: "&#8205;",
      example: "‍",
      character: "‍",
      notes: "Menyebabkan karakter bergabung ketika seharusnya tidak. Digunakan dalam urutan emoji untuk membuat emoji gabungan.",
    },
    {
      unicode: "U+200E",
      description: "Penanda Kiri ke Kanan",
      html: "&#8206;",
      example: "‎",
      character: "‎",
      notes: "Penanda tak terlihat yang mempengaruhi algoritma bidirectional, memaksa teks ditampilkan dari kiri ke kanan.",
    },
    {
      unicode: "U+200F",
      description: "Penanda Kanan ke Kiri",
      html: "&#8207;",
      example: "‏",
      character: "‏",
      notes: "Penanda tak terlihat yang mempengaruhi algoritma bidirectional, memaksa teks ditampilkan dari kanan ke kiri.",
    },
    {
      unicode: "U+205F",
      description: "Spasi Matematika Sedang",
      html: "&#8287;",
      example: " ",
      character: " ",
      notes: "Spasi yang digunakan dalam notasi matematika, biasanya 4/18 dari satu em.",
    },
    {
      unicode: "U+2060",
      description: "Word Joiner",
      html: "&#8288;",
      example: "⁠",
      character: "⁠",
      notes: "Mirip dengan Zero Width No-Break Space tetapi tanpa beban sejarah. Mencegah pemutusan baris.",
    },
    {
      unicode: "U+2061",
      description: "Penerapan Fungsi",
      html: "&#8289;",
      example: "⁡",
      character: "⁡",
      notes: "Operator tak terlihat yang digunakan dalam notasi matematika untuk menunjukkan penerapan fungsi.",
    },
    {
      unicode: "U+2062",
      description: "Perkalian Tak Terlihat",
      html: "&#8290;",
      example: "⁢",
      character: "⁢",
      notes: "Operator perkalian tak terlihat yang digunakan dalam notasi matematika.",
    },
    {
      unicode: "U+2063",
      description: "Pemisah Tak Terlihat",
      html: "&#8291;",
      example: "⁣",
      character: "⁣",
      notes: "Pemisah tak terlihat yang digunakan dalam notasi matematika, mirip dengan koma.",
    },
    {
      unicode: "U+2064",
      description: "Penjumlahan Tak Terlihat",
      html: "&#8292;",
      example: "⁤",
      character: "⁤",
      notes: "Operator penjumlahan tak terlihat yang digunakan dalam notasi matematika.",
    },
    {
      unicode: "U+3000",
      description: "Spasi Ideografis",
      html: "&#12288;",
      example: "　",
      character: "　",
      notes: "Spasi lebar penuh yang digunakan dalam tipografi Asia Timur, selebar karakter ideografis.",
    },
    {
      unicode: "U+3164",
      description: "Hangul Filler",
      html: "&#12644;",
      example: "ㅤ",
      character: "ㅤ",
      notes: "Digunakan dalam teks Korea sebagai placeholder. Salah satu karakter tak terlihat yang paling populer di media sosial.",
    },
    {
      unicode: "U+FEFF",
      description: "Zero Width No-Break Space (BOM)",
      html: "&#65279;",
      example: "﻿",
      character: "﻿",
      notes: "Awalnya digunakan sebagai Byte Order Mark di awal berkas teks. Juga mencegah pemutusan baris.",
    },
    {
      unicode: "U+180E",
      description: "Pemisah Vokal Mongol",
      html: "&#6158;",
      example: " ",
      character: " ",
      notes: "Digunakan dalam teks Mongol untuk memisahkan vokal. Beberapa platform menampilkannya sebagai tak terlihat.",
    },
    {
      unicode: "U+2800",
      description: "Pola Braille Kosong",
      html: "&#10240;",
      example: "⠀",
      character: "⠀",
      notes: "Pola Braille kosong. Sering muncul sebagai spasi yang terlihat tetapi berfungsi sebagai karakter tak terlihat di banyak platform.",
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
    <section className="mx-auto py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl text-center font-bold text-yellow-300 mb-4">{t.title}</h2>
        <p className="text-center mb-8 text-white/80">{t.subtitle}</p>

        <div className="w-full bg-[#0B0E19] rounded-lg overflow-hidden border border-yellow-300/50 px-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-yellow-300 bg-[#182244]">{t.table.unicode}</TableHead>
                <TableHead className="text-yellow-300 bg-[#182244]">{t.table.description}</TableHead>
                <TableHead className="text-yellow-300 bg-[#182244]">{t.table.html}</TableHead>
                <TableHead className="text-yellow-300 bg-[#182244]">{t.table.example}</TableHead>
                <TableHead className="text-yellow-300 bg-[#182244] text-center">Aksi</TableHead>
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
