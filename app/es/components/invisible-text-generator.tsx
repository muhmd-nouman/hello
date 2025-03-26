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
        title: "¡Copiado!",
        description: "Texto invisible copiado al portapapeles",
      })
    } catch (err) {
      toast({
        title: "Error al copiar",
        description: "Por favor, intenta otro método",
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
          title: "Tamaño inválido",
          description: "Por favor, ingrese un número entre 1 y 1000",
          variant: "destructive",
        })
        return
      }

      const type = getTypeFromSelection(selectedType)
      const invisibleText = generateInvisibleText(size, type as any)

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "¡Generado!",
        description: `${size} caracteres invisibles generados`,
      })
    } catch (error) {
      toast({
        title: "Error al generar",
        description: "Ocurrió un error al generar el texto invisible",
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
          title: "Tamaño inválido",
          description: "Por favor, ingrese un número entre 1 y 10000",
          variant: "destructive",
        })
        return
      }

      const invisibleText = generateInvisibleText(size, "space")

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "¡Generado!",
        description: `${size} caracteres invisibles generados`,
      })
    } catch (error) {
      toast({
        title: "Error al generar",
        description: "Ocurrió un error al generar el texto invisible",
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
      <section className="py-6 px-6" id="hero">
        <div className="container mx-auto">
          <h1 className="text-3xl text-center text-black dark:text-yellow-300 font-bold mb-4">
            Texto Invisible
          </h1>
          <p className="text-zinc-600 dark:text-zinc-100 text-lg text-center">
            Genera espacios en blanco ilimitados y copia/pega rápidamente texto invisible.
          </p>
        </div>
      </section>
      
      <section className="mx-auto pb-16 px-6" id="types-of-unicode-invisible-text">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Método 1: Copiar y pegar espacio en blanco con el botón */}
          <div className="p-6 rounded-lg shadow-md bg-background dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Método 1: Copiar y pegar espacio en blanco con el botón
            </h2>

            <button
              onClick={handleCopyHangulFiller}
              className="bg-[#001F5B] mb-4 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              <Copy size={16} />
              Copiar Relleno Hangul
            </button>

            <p className="mt-4">
              Solo haz clic en el botón "Copiar". Una vez que lo hagas, el texto invisible se copiará en tu portapapeles y podrás pegarlo donde desees.
            </p>

            <p className="mt-4">
              Si este método no funciona, utiliza el método 2 o 3.
            </p>
          </div>

          {/* Método 2: Seleccionar y Copiar */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">Método 2: Seleccionar y Copiar</h2>

            <p className="mb-4">
              Haz clic en el botón Seleccionar para resaltar el texto vacío en el recuadro a continuación. Usa CTRL+C en Windows o Command (⌘)+C en Mac para copiar los caracteres invisibles a tu portapapeles.
            </p>

            <p className="mb-4">
              Para verificar el texto copiado, pégalo en el área de Prueba o haz clic en el botón verde en la esquina superior derecha para verlo en acción.
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
                Copiar
              </button>
            </div>
          </div>

          {/* Método 3: Generar Texto Invisible Personalizado */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Método 3: Generar Texto Invisible Personalizado según Necesidad
            </h2>

            <p className="mb-4">
              Este método innovador te permite ingresar la cantidad de caracteres invisibles que deseas generar en el recuadro, hacer clic en el botón "Generar" y luego presionar el botón "Copiar Texto en Blanco" para copiar el texto invisible a tu portapapeles.
            </p>

            <p className="mb-4">
              Hemos mejorado esta versión para ofrecerte la opción de elegir el tipo de carácter Unicode.
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
                Generar
              </button>
            </div>
          </div>

          {/* Método 4: Generar Caracteres Invisibles Ilimitados */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Método 4: Generar Caracteres Invisibles Ilimitados
            </h2>

            <p className="mb-4">
              Con este método, puedes generar caracteres invisibles ilimitados. Por ejemplo, si deseas enviar un mensaje invisible que ocupe de 4 a 5 páginas, este método innovador será la solución ideal para copiar y pegar espacios en blanco.
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
                Generar
              </button>
            </div>

            <p className="mt-4 text-center text-sm">
              Para herramientas de texto invisible más avanzadas, visita{" "}
              <a href="https://InvisibleSymbol.com" className="underline">
                InvisibleSymbol.com
              </a>
            </p>
          </div>
        </div>
        {/* Área de Prueba */}
        <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
          <h2 className="text-lg font-bold mb-4">Área de Prueba</h2>
          <p className="mb-4">
            Para probar, pega el carácter vacío en el recuadro de texto. Si el texto gris desaparece, significa que tu texto en blanco funciona.
          </p>
          <textarea
            ref={testAreaRef}
            value={testAreaText}
            onChange={(e) => {
              setTestAreaText(e.target.value)
              setCharacterCount(e.target.value.length)
            }}
            className="w-full h-32 p-2 rounded-lg mb-2 border border-black/10 dark:bg-white/50 bg-zinc-50 outline-none"
            placeholder="Los caracteres invisibles generados aparecerán aquí"
          />

          <div className="flex justify-between items-center ">
            <div>Caracteres: {characterCount}</div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(testAreaText)}
                className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]"
                title="Copiar al portapapeles"
              >
                <Copy size={16} className="text-yellow-300" />
              </button>
              <button onClick={clearTestArea} className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]" title="Limpiar área de prueba">
                <Trash size={16} className="text-yellow-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
