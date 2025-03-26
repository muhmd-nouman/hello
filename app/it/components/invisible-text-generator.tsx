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
        title: "Copiato!",
        description: "Testo invisibile copiato negli appunti",
      })
    } catch (err) {
      toast({
        title: "Copia fallita",
        description: "Per favore, prova un altro metodo",
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
          title: "Dimensione non valida",
          description: "Inserisci un numero compreso tra 1 e 1000",
          variant: "destructive",
        })
        return
      }

      const type = getTypeFromSelection(selectedType)
      const invisibleText = generateInvisibleText(size, type as any)

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "Generato!",
        description: `${size} caratteri invisibili generati`,
      })
    } catch (error) {
      toast({
        title: "Generazione fallita",
        description: "Si è verificato un errore durante la generazione del testo invisibile",
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
          title: "Dimensione non valida",
          description: "Inserisci un numero compreso tra 1 e 10000",
          variant: "destructive",
        })
        return
      }

      const invisibleText = generateInvisibleText(size, "space")

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "Generato!",
        description: `${size} caratteri invisibili generati`,
      })
    } catch (error) {
      toast({
        title: "Generazione fallita",
        description: "Si è verificato un errore durante la generazione del testo invisibile",
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
            Testo Invisibile
          </h1>
          <p className="text-zinc-600 dark:text-zinc-100 text-lg text-center">
            Genera spazi vuoti illimitati e copia/incolla rapidamente testo invisibile.
          </p>
        </div>
      </section>
      
      <section className="mx-auto pb-16 px-6" id="types-of-unicode-invisible-text">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Metodo 1: Copia e incolla uno spazio vuoto con il pulsante */}
          <div className="p-6 rounded-lg shadow-md bg-background dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Metodo 1: Copia e incolla uno spazio vuoto con il pulsante
            </h2>

            <button
              onClick={handleCopyHangulFiller}
              className="bg-[#001F5B] mb-4 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              <Copy size={16} />
              Copia Hangul Filler
            </button>

            <p className="mt-4">
              Basta cliccare sul pulsante "Copia". Appena clicchi, il testo invisibile verrà copiato negli appunti e potrai incollarlo ovunque.
            </p>

            <p className="mt-4">
              Se questo metodo non funziona, utilizza il Metodo 2 o 3.
            </p>
          </div>

          {/* Metodo 2: Seleziona e Copia */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">Metodo 2: Seleziona e Copia</h2>

            <p className="mb-4">
              Clicca sul pulsante "Seleziona" per evidenziare il testo vuoto nell'area sottostante. Usa CTRL+C su Windows o Command (⌘)+C su Mac per copiare i caratteri invisibili negli appunti.
            </p>

            <p className="mb-4">
              Per verificare il testo copiato, incollalo nell'area di Test oppure clicca sul pulsante verde in alto a destra per vederlo in azione.
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
                Copia
              </button>
            </div>
          </div>

          {/* Metodo 3: Genera Testo Invisibile Personalizzato */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Metodo 3: Genera Testo Invisibile Personalizzato in base alle esigenze
            </h2>

            <p className="mb-4">
              Con questo metodo innovativo puoi inserire il numero di caratteri invisibili da generare nel campo, cliccare su "Genera" e poi premere il pulsante "Copia Testo Vuoto" per copiare la stringa invisibile negli appunti.
            </p>

            <p className="mb-4">
              Abbiamo migliorato questa versione offrendoti la possibilità di scegliere il tipo di carattere Unicode.
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
                Genera
              </button>
            </div>
          </div>

          {/* Metodo 4: Genera Caratteri Invisibili Illimitati */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Metodo 4: Genera Caratteri Invisibili Illimitati
            </h2>

            <p className="mb-4">
              Con questo metodo puoi generare caratteri invisibili senza limiti. Ad esempio, se desideri inviare un messaggio invisibile che occupa 4-5 pagine, questo metodo innovativo è la soluzione perfetta per copiare e incollare spazi vuoti.
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
                Genera
              </button>
            </div>

            <p className="mt-4 text-center text-sm">
              Per strumenti di testo invisibile più avanzati, visita{" "}
              <a href="https://InvisibleSymbol.com" className="underline">
                InvisibleSymbol.com
              </a>
            </p>
          </div>
        </div>
        {/* Area di Test */}
        <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
          <h2 className="text-lg font-bold mb-4">Area di Test</h2>
          <p className="mb-4">
            Per testare, incolla il carattere vuoto nella casella di testo. Se il testo grigio scompare, significa che il tuo testo vuoto funziona.
          </p>
          <textarea
            ref={testAreaRef}
            value={testAreaText}
            onChange={(e) => {
              setTestAreaText(e.target.value)
              setCharacterCount(e.target.value.length)
            }}
            className="w-full h-32 p-2 rounded-lg mb-2 border border-black/10 dark:bg-white/50 bg-zinc-50 outline-none"
            placeholder="Il testo invisibile generato apparirà qui"
          />

          <div className="flex justify-between items-center ">
            <div>Caratteri: {characterCount}</div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(testAreaText)}
                className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]"
                title="Copia negli appunti"
              >
                <Copy size={16} className="text-yellow-300" />
              </button>
              <button onClick={clearTestArea} className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]" title="Svuota area di test">
                <Trash size={16} className="text-yellow-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
