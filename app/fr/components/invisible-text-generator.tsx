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
        title: "Copié !",
        description: "Texte invisible copié dans le presse-papiers",
      })
    } catch (err) {
      toast({
        title: "Échec de la copie",
        description: "Veuillez essayer une autre méthode",
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
          title: "Taille invalide",
          description: "Veuillez entrer un nombre entre 1 et 1000",
          variant: "destructive",
        })
        return
      }

      const type = getTypeFromSelection(selectedType)
      const invisibleText = generateInvisibleText(size, type as any)

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "Généré !",
        description: `${size} caractères invisibles générés`,
      })
    } catch (error) {
      toast({
        title: "Échec de la génération",
        description: "Une erreur est survenue lors de la génération du texte invisible",
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
          title: "Taille invalide",
          description: "Veuillez entrer un nombre entre 1 et 10000",
          variant: "destructive",
        })
        return
      }

      const invisibleText = generateInvisibleText(size, "space")

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "Généré !",
        description: `${size} caractères invisibles générés`,
      })
    } catch (error) {
      toast({
        title: "Échec de la génération",
        description: "Une erreur est survenue lors de la génération du texte invisible",
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
            Texte Invisible
          </h1>
          <p className="text-zinc-600 dark:text-zinc-100 text-lg text-center">
            Générez des espaces vides illimités et copiez/collez rapidement du texte invisible.
          </p>
        </div>
      </section>
      
      <section className="mx-auto pb-16 px-6" id="types-of-unicode-invisible-text">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Méthode 1 : Copier-coller un espace vide avec le bouton */}
          <div className="p-6 rounded-lg shadow-md bg-background dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Méthode 1 : Copier-coller un espace vide avec le bouton
            </h2>

            <button
              onClick={handleCopyHangulFiller}
              className="bg-[#001F5B] mb-4 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              <Copy size={16} />
              Copier Hangul Filler
            </button>

            <p className="mt-4">
              Cliquez simplement sur le bouton « Copier ». Dès que vous cliquerez, le texte invisible sera copié dans le presse-papiers et pourra être collé partout.
            </p>

            <p className="mt-4">
              Si cette méthode ne fonctionne pas, utilisez la méthode 2 ou 3.
            </p>
          </div>

          {/* Méthode 2 : Sélectionner et Copier */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">Méthode 2 : Sélectionner et Copier</h2>

            <p className="mb-4">
              Cliquez sur le bouton « Sélectionner » pour mettre en surbrillance le texte vide dans la zone ci-dessous. Utilisez CTRL+C sur Windows ou Command (⌘)+C sur Mac pour copier les caractères invisibles dans le presse-papiers.
            </p>

            <p className="mb-4">
              Pour vérifier le texte copié, collez-le dans la zone de test ou cliquez sur le bouton vert en haut à droite pour le voir en action.
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
                Copier
              </button>
            </div>
          </div>

          {/* Méthode 3 : Générer du Texte Invisible Personnalisé */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Méthode 3 : Générer du Texte Invisible Personnalisé selon vos besoins
            </h2>

            <p className="mb-4">
              Avec cette méthode innovante, vous pouvez entrer le nombre de caractères invisibles à générer dans le champ, cliquer sur « Générer » puis appuyer sur le bouton « Copier le Texte Vide » pour copier la chaîne invisible dans le presse-papiers.
            </p>

            <p className="mb-4">
              Nous avons amélioré cette version en vous offrant la possibilité de choisir le type de caractère Unicode.
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
                Générer
              </button>
            </div>
          </div>

          {/* Méthode 4 : Générer des Caractères Invisibles Illimités */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Méthode 4 : Générer des Caractères Invisibles Illimités
            </h2>

            <p className="mb-4">
              Avec cette méthode, vous pouvez générer des caractères invisibles sans limite. Par exemple, si vous souhaitez envoyer un message invisible couvrant 4 à 5 pages, cette méthode innovante est la solution idéale pour copier-coller des espaces vides.
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
                Générer
              </button>
            </div>

            <p className="mt-4 text-center text-sm">
              Pour des outils de texte invisible plus avancés, visitez{" "}
              <a href="https://InvisibleSymbol.com" className="underline">
                InvisibleSymbol.com
              </a>
            </p>
          </div>
        </div>
        {/* Zone de Test */}
        <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
          <h2 className="text-lg font-bold mb-4">Zone de Test</h2>
          <p className="mb-4">
            Pour tester, collez le caractère vide dans la zone de texte. Si le texte gris disparaît, cela signifie que votre texte vide fonctionne.
          </p>
          <textarea
            ref={testAreaRef}
            value={testAreaText}
            onChange={(e) => {
              setTestAreaText(e.target.value)
              setCharacterCount(e.target.value.length)
            }}
            className="w-full h-32 p-2 rounded-lg mb-2 border border-black/10 dark:bg-white/50 bg-zinc-50 outline-none"
            placeholder="Le texte invisible généré apparaîtra ici"
          />

          <div className="flex justify-between items-center ">
            <div>Caractères : {characterCount}</div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(testAreaText)}
                className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]"
                title="Copier dans le presse-papiers"
              >
                <Copy size={16} className="text-yellow-300" />
              </button>
              <button onClick={clearTestArea} className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]" title="Effacer la zone de test">
                <Trash size={16} className="text-yellow-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
