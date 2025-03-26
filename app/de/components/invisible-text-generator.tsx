"use client"

import { useState, useRef } from "react"
import { Copy, Trash } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { generateInvisibleText } from "@/lib/invisible-text"

export default function InvisibleTextGenerator() {
  const [testAreaText, setTestAreaText] = useState<string>("")
  const [characterCount, setCharacterCount] = useState<number>(0)
  const [customSize, setCustomSize] = useState<string>("1")
  const [unlimitedSize, setUnlimitedSize] = useState<string>("10")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedType, setSelectedType] = useState<string>("Hangul Filler")
  const testAreaRef = useRef<HTMLTextAreaElement>(null)
  const { toast } = useToast()

  const getTypeFromSelection = (selection: string) => {
    switch (selection) {
      case "Hangul Filler":
        return "space"
      case "Zero Width Joiner":
        return "joiner"
      case "Zero Width Non-Joiner":
        return "nonjoiner"
      case "Word Joiner":
        return "word"
      case "Invisible Separator":
        return "separator"
      default:
        return "random"
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        title: "Kopiert!",
        description: "Unsichtbarer Text wurde in die Zwischenablage kopiert",
      })
    } catch (err) {
      toast({
        title: "Kopierfehler",
        description: "Bitte versuche eine andere Methode",
        variant: "destructive",
      })
    }
  }

  const handleCopyHangulFiller = () => {
    const invisibleText = generateInvisibleText(5, "space")
    copyToClipboard(invisibleText)
  }

  const handleCopySelected = () => {
    if (testAreaRef.current) {
      const selectedText = testAreaRef.current.value
      copyToClipboard(selectedText)
    }
  }

  const handleGenerateCustom = async () => {
    try {
      setIsLoading(true)
      const size = Number.parseInt(customSize, 10)
      if (isNaN(size) || size < 1 || size > 1000) {
        toast({
          title: "Ungültige Größe",
          description: "Bitte geben Sie eine Zahl zwischen 1 und 1000 ein",
          variant: "destructive",
        })
        return
      }

      const type = getTypeFromSelection(selectedType)
      const invisibleText = generateInvisibleText(size, type as any)

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "Erstellt!",
        description: `${size} unsichtbare Zeichen wurden generiert`,
      })
    } catch (error) {
      toast({
        title: "Erstellungsfehler",
        description: "Beim Generieren des unsichtbaren Textes ist ein Fehler aufgetreten",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGenerateUnlimited = async () => {
    try {
      setIsLoading(true)
      const size = Number.parseInt(unlimitedSize, 10)
      if (isNaN(size) || size < 1 || size > 10000) {
        toast({
          title: "Ungültige Größe",
          description: "Bitte geben Sie eine Zahl zwischen 1 und 10000 ein",
          variant: "destructive",
        })
        return
      }

      const invisibleText = generateInvisibleText(size, "space")

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "Erstellt!",
        description: `${size} unsichtbare Zeichen wurden generiert`,
      })
    } catch (error) {
      toast({
        title: "Erstellungsfehler",
        description: "Beim Generieren des unsichtbaren Textes ist ein Fehler aufgetreten",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const clearTestArea = () => {
    setTestAreaText("")
    setCharacterCount(0)
  }

  return (
    <>
      <section className="py-6" id="hero">
        <div className="container mx-auto">
          <h1 className="text-3xl text-center text-black dark:text-yellow-300 font-bold mb-4">
            Unsichtbarer Text
          </h1>
          <p className="text-zinc-600 dark:text-zinc-100 text-lg text-center">
            Erzeugen Sie unbegrenzte Leerzeichen und kopieren/einfügen Sie unsichtbaren Text im Handumdrehen.
          </p>
        </div>
      </section>
      
      <section className="mx-auto pb-16 px-6" id="types-of-unicode-invisible-text">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Methode 1: Leerzeichen per Knopfdruck kopieren und einfügen */}
          <div className="p-6 rounded-lg shadow-md bg-background dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Methode 1: Leerzeichen per Knopfdruck kopieren und einfügen
            </h2>

            <button
              onClick={handleCopyHangulFiller}
              className="bg-[#001F5B] mb-4 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              <Copy size={16} />
              Kopiere Hangul-Füllzeichen
            </button>

            <p className="mt-4">
              Klicken Sie einfach auf die Schaltfläche „Kopieren“. Sobald Sie klicken, wird der unsichtbare Text in die Zwischenablage kopiert und kann überall eingefügt werden.
            </p>

            <p className="mt-4">
              Wenn diese Methode nicht funktioniert, verwenden Sie bitte Methode 2 oder 3.
            </p>
          </div>

          {/* Methode 2: Auswählen und Kopieren */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">Methode 2: Auswählen und Kopieren</h2>

            <p className="mb-4">
              Klicken Sie auf den Button „Auswählen“, um den leeren Text im folgenden Feld zu markieren. Verwenden Sie STRG+C (Windows) oder Command (⌘)+C (Mac), um die unsichtbaren Zeichen in die Zwischenablage zu kopieren.
            </p>

            <p className="mb-4">
              Um den kopierten Leertext zu überprüfen, fügen Sie ihn in das Testfeld ein oder klicken Sie auf den grünen Button in der oberen rechten Ecke, um ihn anzuzeigen.
            </p>

            <div className="flex items-center gap-2 mt-4">
              <select
                className="flex-1 p-2 rounded-lg border border-black/10 dark:bg-white/50 bg-zinc-50 outline-none"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option>Hangul Filler</option>
              </select>
              <button
                onClick={handleCopySelected}
                className="bg-[#001F5B] text-white px-4 py-2 rounded-lg flex items-center justify-center"
                disabled={isLoading}
              >
                Kopieren
              </button>
            </div>
          </div>

          {/* Methode 3: Benutzerdefinierten unsichtbaren Text generieren */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Methode 3: Benutzerdefinierten unsichtbaren Text nach Bedarf generieren
            </h2>

            <p className="mb-4">
              Bei dieser innovativen Methode können Sie die Anzahl der unsichtbaren Zeichen, die Sie generieren möchten, in das Feld eingeben, den Button „Generieren“ klicken und anschließend den Button „Leertext kopieren“ betätigen, um den unsichtbaren String in die Zwischenablage zu kopieren.
            </p>

            <p className="mb-4">
              Wir haben diese Version verbessert, um Ihnen die Möglichkeit zu geben, den gewünschten Unicode-Zeichentyp auszuwählen.
            </p>

            <div className="flex items-center gap-2 mt-4">
              <select
                className="flex-1 p-2 rounded-lg border border-black/10 dark:bg-white/50 bg-zinc-50 outline-none"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option>Hangul Filler</option>
              </select>
              <input
                type="text"
                value={customSize}
                onChange={(e) => setCustomSize(e.target.value)}
                className="w-16 p-2 rounded-lg border border-black/10 dark:bg-white/50 bg-zinc-50 outline-none"
                placeholder="1"
              />
              <button
                onClick={handleGenerateCustom}
                className="bg-[#001F5B] text-white px-4 py-2 rounded-lg"
                disabled={isLoading}
              >
                Generieren
              </button>
            </div>
          </div>

          {/* Methode 4: Unbegrenzt unsichtbare Zeichen generieren */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Methode 4: Unbegrenzt unsichtbare Zeichen generieren
            </h2>

            <p className="mb-4">
              Mit dieser Methode können Sie unbegrenzt unsichtbare Zeichen generieren. Wenn Sie beispielsweise eine Nachricht mit unsichtbarem Text erstellen möchten, die 4 bis 5 Seiten umfasst, ist diese innovative Methode die ideale Lösung, um Leerzeichen zu kopieren und einzufügen.
            </p>

            <div className="flex items-center gap-2 mt-4">
              <input
                type="text"
                value={unlimitedSize}
                onChange={(e) => setUnlimitedSize(e.target.value)}
                className="flex-1 p-2 rounded-lg border border-black/10 dark:bg-white/50 bg-zinc-50 outline-none"
                placeholder="10"
              />
              <button
                onClick={handleGenerateUnlimited}
                className="bg-[#001F5B] text-white px-4 py-2 rounded-lg"
                disabled={isLoading}
              >
                Generieren
              </button>
            </div>

            <p className="mt-4 text-center text-sm">
              Für fortgeschrittene unsichtbare Textwerkzeuge besuchen Sie{" "}
              <a href="https://InvisibleSymbol.com" className="underline">
                InvisibleSymbol.com
              </a>
            </p>
          </div>
        </div>
        {/* Testbereich */}
        <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
          <h2 className="text-lg font-bold mb-4">Testbereich</h2>
          <p className="mb-4">
            Zum Testen fügen Sie das leere Zeichen in das Textfeld ein. Wenn der graue Text verschwindet, funktioniert Ihr Leertext.
          </p>
          <textarea
            ref={testAreaRef}
            value={testAreaText}
            onChange={(e) => {
              setTestAreaText(e.target.value)
              setCharacterCount(e.target.value.length)
            }}
            className="w-full h-32 p-2 rounded-lg mb-2 border border-black/10 dark:bg-white/50 bg-zinc-50 outline-none"
            placeholder="Generierte unsichtbare Zeichen erscheinen hier"
          />

          <div className="flex justify-between items-center ">
            <div>Zeichen: {characterCount}</div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(testAreaText)}
                className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]"
                title="In Zwischenablage kopieren"
              >
                <Copy size={16} className="text-yellow-300" />
              </button>
              <button onClick={clearTestArea} className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]" title="Testbereich löschen">
                <Trash size={16} className="text-yellow-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
