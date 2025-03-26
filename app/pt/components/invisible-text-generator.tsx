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
        title: "Copiado!",
        description: "Texto invisível copiado para a área de transferência",
      })
    } catch (err) {
      toast({
        title: "Falha ao copiar",
        description: "Por favor, tente outro método",
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
          title: "Tamanho inválido",
          description: "Por favor, insira um número entre 1 e 1000",
          variant: "destructive",
        })
        return
      }

      const type = getTypeFromSelection(selectedType)
      const invisibleText = generateInvisibleText(size, type as any)

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "Gerado!",
        description: `${size} caracteres invisíveis gerados`,
      })
    } catch (error) {
      toast({
        title: "Falha na geração",
        description: "Ocorreu um erro ao gerar o texto invisível",
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
          title: "Tamanho inválido",
          description: "Por favor, insira um número entre 1 e 10000",
          variant: "destructive",
        })
        return
      }

      const invisibleText = generateInvisibleText(size, "space")

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "Gerado!",
        description: `${size} caracteres invisíveis gerados`,
      })
    } catch (error) {
      toast({
        title: "Falha na geração",
        description: "Ocorreu um erro ao gerar o texto invisível",
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
            Texto Invisível
          </h1>
          <p className="text-zinc-600 dark:text-zinc-100 text-lg text-center">
            Gere espaços em branco ilimitados e copie/cole rapidamente texto invisível.
          </p>
        </div>
      </section>
      
      <section className="mx-auto pb-16 px-6" id="types-of-unicode-invisible-text">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Método 1: Copiar e colar espaço em branco com o botão */}
          <div className="p-6 rounded-lg shadow-md bg-background dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Método 1: Copiar e colar espaço em branco com o botão
            </h2>

            <button
              onClick={handleCopyHangulFiller}
              className="bg-[#001F5B] mb-4 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              <Copy size={16} />
              Copiar Preenchedor Hangul
            </button>

            <p className="mt-4">
              Basta clicar no botão "Copiar". Assim que você clicar, o texto invisível será copiado para sua área de transferência e poderá ser colado em qualquer lugar.
            </p>

            <p className="mt-4">
              Se este método não funcionar, utilize o 2º ou 3º método.
            </p>
          </div>

          {/* Método 2: Selecionar e Copiar */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">Método 2: Selecionar e Copiar</h2>

            <p className="mb-4">
              Clique no botão Selecionar para destacar o texto vazio na caixa abaixo. Use CTRL+C no Windows ou Command (⌘)+C no Mac para copiar os caracteres invisíveis para sua área de transferência.
            </p>

            <p className="mb-4">
              Para verificar o texto copiado, cole-o na caixa de Teste ou clique no botão verde no canto superior direito para visualizá-lo.
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

          {/* Método 3: Gerar Texto Invisível Personalizado */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Método 3: Gerar Texto Invisível Personalizado conforme Necessidade
            </h2>

            <p className="mb-4">
              Neste método inovador, você pode inserir a quantidade de caracteres invisíveis que deseja gerar na caixa, clicar no botão "Gerar" e depois pressionar o botão "Copiar Texto em Branco" para copiar o texto invisível para sua área de transferência.
            </p>

            <p className="mb-4">
              Melhoramos esta versão para oferecer a você a opção de escolha do tipo de caractere Unicode.
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
                Gerar
              </button>
            </div>
          </div>

          {/* Método 4: Gerar Caracteres Invisíveis Ilimitados */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Método 4: Gerar Caracteres Invisíveis Ilimitados
            </h2>

            <p className="mb-4">
              Com este método, você pode gerar caracteres invisíveis ilimitados. Por exemplo, se desejar enviar uma mensagem invisível que ocupe 4 a 5 páginas, este método inovador será a solução ideal para copiar e colar espaços em branco.
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
                Gerar
              </button>
            </div>

            <p className="mt-4 text-center text-sm">
              Para ferramentas de texto invisível mais avançadas, visite{" "}
              <a href="https://InvisibleSymbol.com" className="underline">
                InvisibleSymbol.com
              </a>
            </p>
          </div>
        </div>
        {/* Área de Teste */}
        <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
          <h2 className="text-lg font-bold mb-4">Área de Teste</h2>
          <p className="mb-4">
            Para testar, cole o caractere vazio na caixa de texto. Se o texto cinza desaparecer, significa que seu texto em branco está funcionando.
          </p>
          <textarea
            ref={testAreaRef}
            value={testAreaText}
            onChange={(e) => {
              setTestAreaText(e.target.value)
              setCharacterCount(e.target.value.length)
            }}
            className="w-full h-32 p-2 rounded-lg mb-2 border border-black/10 dark:bg-white/50 bg-zinc-50 outline-none"
            placeholder="Os caracteres invisíveis gerados aparecerão aqui"
          />

          <div className="flex justify-between items-center ">
            <div>Caracteres: {characterCount}</div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(testAreaText)}
                className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]"
                title="Copiar para a área de transferência"
              >
                <Copy size={16} className="text-yellow-300" />
              </button>
              <button onClick={clearTestArea} className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]" title="Limpar área de teste">
                <Trash size={16} className="text-yellow-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
