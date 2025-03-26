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
        title: "Gekopieerd!",
        description: "Onzichtbare tekst gekopieerd naar klembord",
      })
    } catch (err) {
      toast({
        title: "Kopiëren mislukt",
        description: "Probeer alstublieft een andere methode",
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
          title: "Ongeldige grootte",
          description: "Voer een getal in tussen 1 en 1000",
          variant: "destructive",
        })
        return
      }

      const type = getTypeFromSelection(selectedType)
      const invisibleText = generateInvisibleText(size, type as any)

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "Gegenereerd!",
        description: `${size} onzichtbare tekens gegenereerd`,
      })
    } catch (error) {
      toast({
        title: "Generatie mislukt",
        description: "Er is een fout opgetreden bij het genereren van de onzichtbare tekst",
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
          title: "Ongeldige grootte",
          description: "Voer een getal in tussen 1 en 10000",
          variant: "destructive",
        })
        return
      }

      const invisibleText = generateInvisibleText(size, "space")

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "Gegenereerd!",
        description: `${size} onzichtbare tekens gegenereerd`,
      })
    } catch (error) {
      toast({
        title: "Generatie mislukt",
        description: "Er is een fout opgetreden bij het genereren van de onzichtbare tekst",
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
            Onzichtbare Tekst
          </h1>
          <p className="text-zinc-600 dark:text-zinc-100 text-lg text-center">
            Genereer onbeperkte lege ruimtes en kopieer/plak snel onzichtbare tekst.
          </p>
        </div>
      </section>
      
      <section className="mx-auto pb-16 px-6" id="types-of-unicode-invisible-text">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Methode 1: Kopieer en plak lege ruimte met de knop */}
          <div className="p-6 rounded-lg shadow-md bg-background dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Methode 1: Kopieer en plak lege ruimte met de knop
            </h2>

            <button
              onClick={handleCopyHangulFiller}
              className="bg-[#001F5B] mb-4 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              <Copy size={16} />
              Kopieer Hangul Filler
            </button>

            <p className="mt-4">
              Klik eenvoudigweg op de knop "Kopieer". Zodra je klikt, wordt de onzichtbare tekst naar het klembord gekopieerd en kun je deze overal plakken.
            </p>

            <p className="mt-4">
              Als deze methode niet werkt, gebruik dan Methode 2 of 3.
            </p>
          </div>

          {/* Methode 2: Selecteer en Kopieer */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">Methode 2: Selecteer en Kopieer</h2>

            <p className="mb-4">
              Klik op de knop "Selecteer" om de lege tekst in het onderstaande vak te markeren. Gebruik CTRL+C op Windows of Command (⌘)+C op Mac om de onzichtbare tekens naar het klembord te kopiëren.
            </p>

            <p className="mb-4">
              Om de gekopieerde lege tekst te controleren, plak deze in het testgebied of klik op de groene knop rechtsboven om het in actie te zien.
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
                Kopieer
              </button>
            </div>
          </div>

          {/* Methode 3: Genereer Aangepaste Onzichtbare Tekst */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Methode 3: Genereer Aangepaste Onzichtbare Tekst Naar Behoefte
            </h2>

            <p className="mb-4">
              Met deze innovatieve methode kun je het aantal onzichtbare tekens dat je wilt genereren invoeren in het veld, op "Genereer" klikken en vervolgens op de knop "Kopieer Lege Tekst" drukken om de onzichtbare string naar het klembord te kopiëren.
            </p>

            <p className="mb-4">
              We hebben deze versie verbeterd door je de mogelijkheid te geven om het Unicode-teken type te kiezen.
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
                Genereer
              </button>
            </div>
          </div>

          {/* Methode 4: Genereer Onbeperkt Onzichtbare Tekens */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Methode 4: Genereer Onbeperkt Onzichtbare Tekens
            </h2>

            <p className="mb-4">
              Met deze methode kun je onbeperkt onzichtbare tekens genereren. Bijvoorbeeld, als je een onzichtbaar bericht wilt sturen dat 4 tot 5 pagina’s beslaat, dan is deze innovatieve methode de perfecte oplossing om lege ruimtes te kopiëren en plakken.
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
                Genereer
              </button>
            </div>

            <p className="mt-4 text-center text-sm">
              Voor meer geavanceerde onzichtbare teksttools, bezoek{" "}
              <a href="https://InvisibleSymbol.com" className="underline">
                InvisibleSymbol.com
              </a>
            </p>
          </div>
        </div>
        {/* Testgebied */}
        <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
          <h2 className="text-lg font-bold mb-4">Testgebied</h2>
          <p className="mb-4">
            Plak het lege teken in het tekstvak om te testen. Als de grijze tekst verdwijnt, werkt jouw lege tekst.
          </p>
          <textarea
            ref={testAreaRef}
            value={testAreaText}
            onChange={(e) => {
              setTestAreaText(e.target.value)
              setCharacterCount(e.target.value.length)
            }}
            className="w-full h-32 p-2 rounded-lg mb-2 border border-black/10 dark:bg-white/50 bg-zinc-50 outline-none"
            placeholder="De gegenereerde onzichtbare tekst verschijnt hier"
          />

          <div className="flex justify-between items-center ">
            <div>Tekens: {characterCount}</div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(testAreaText)}
                className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]"
                title="Kopieer naar klembord"
              >
                <Copy size={16} className="text-yellow-300" />
              </button>
              <button onClick={clearTestArea} className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]" title="Leeg testgebied">
                <Trash size={16} className="text-yellow-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
