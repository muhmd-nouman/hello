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
        title: "Скопировано!",
        description: "Невидимый текст скопирован в буфер обмена",
      })
    } catch (err) {
      toast({
        title: "Не удалось скопировать",
        description: "Пожалуйста, попробуйте другой способ",
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
          title: "Неверный размер",
          description: "Пожалуйста, введите число от 1 до 1000",
          variant: "destructive",
        })
        return
      }

      const type = getTypeFromSelection(selectedType)
      const invisibleText = generateInvisibleText(size, type as any)

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "Сгенерировано!",
        description: `${size} невидимых символов сгенерировано`,
      })
    } catch (error) {
      toast({
        title: "Генерация не удалась",
        description: "Произошла ошибка при генерации невидимого текста",
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
          title: "Неверный размер",
          description: "Пожалуйста, введите число от 1 до 10000",
          variant: "destructive",
        })
        return
      }

      const invisibleText = generateInvisibleText(size, "space")

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "Сгенерировано!",
        description: `${size} невидимых символов сгенерировано`,
      })
    } catch (error) {
      toast({
        title: "Генерация не удалась",
        description: "Произошла ошибка при генерации невидимого текста",
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
            Невидимый Текст
          </h1>
          <p className="text-zinc-600 dark:text-zinc-100 text-lg text-center">
            Генерируйте неограниченные пустые пространства и быстро копируйте/вставляйте невидимый текст.
          </p>
        </div>
      </section>
      
      <section className="mx-auto pb-16 px-6" id="types-of-unicode-invisible-text">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Метод 1: Копировать и вставить пустое пространство с помощью кнопки */}
          <div className="p-6 rounded-lg shadow-md bg-background dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Метод 1: Копировать и вставить пустое пространство с помощью кнопки
            </h2>

            <button
              onClick={handleCopyHangulFiller}
              className="bg-[#001F5B] mb-4 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              <Copy size={16} />
              Копировать Hangul Filler
            </button>

            <p className="mt-4">
              Просто нажмите кнопку «Копировать». Как только вы нажмете, невидимый текст будет скопирован в буфер обмена, и вы сможете вставить его где угодно.
            </p>

            <p className="mt-4">
              Если этот метод не сработает, используйте Метод 2 или 3.
            </p>
          </div>

          {/* Метод 2: Выделить и Копировать */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">Метод 2: Выделить и Копировать</h2>

            <p className="mb-4">
              Нажмите кнопку «Выделить», чтобы выделить пустой текст в нижнем поле. Используйте CTRL+C на Windows или Command (⌘)+C на Mac для копирования невидимых символов в буфер обмена.
            </p>

            <p className="mb-4">
              Чтобы проверить скопированный пустой текст, вставьте его в тестовую область или нажмите на зелёную кнопку в правом верхнем углу, чтобы увидеть результат.
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
                Копировать
              </button>
            </div>
          </div>

          {/* Метод 3: Сгенерировать Пользовательский Невидимый Текст */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Метод 3: Сгенерировать Пользовательский Невидимый Текст по Требованию
            </h2>

            <p className="mb-4">
              С помощью этого инновационного метода вы можете ввести количество невидимых символов для генерации в поле, нажать кнопку «Генерировать», а затем нажать кнопку «Копировать Пустой Текст», чтобы скопировать невидимую строку в буфер обмена.
            </p>

            <p className="mb-4">
              Мы улучшили эту версию, предоставив возможность выбора типа символа Unicode.
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
                Генерировать
              </button>
            </div>
          </div>

          {/* Метод 4: Сгенерировать Неограниченное Количество Невидимых Символов */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">
              Метод 4: Сгенерировать Неограниченное Количество Невидимых Символов
            </h2>

            <p className="mb-4">
              С помощью этого метода вы можете генерировать невидимые символы без ограничений. Например, если вы хотите отправить невидимое сообщение, занимающее 4–5 страниц, этот инновационный метод – идеальное решение для копирования и вставки пустых пространств.
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
                Генерировать
              </button>
            </div>

            <p className="mt-4 text-center text-sm">
              Для более продвинутых инструментов невидимого текста посетите{" "}
              <a href="https://InvisibleSymbol.com" className="underline">
                InvisibleSymbol.com
              </a>
            </p>
          </div>
        </div>
        {/* Тестовая Область */}
        <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
          <h2 className="text-lg font-bold mb-4">Тестовая Область</h2>
          <p className="mb-4">
            Для тестирования вставьте пустой символ в текстовое поле. Если серый текст исчезнет, значит ваш пустой текст работает.
          </p>
          <textarea
            ref={testAreaRef}
            value={testAreaText}
            onChange={(e) => {
              setTestAreaText(e.target.value)
              setCharacterCount(e.target.value.length)
            }}
            className="w-full h-32 p-2 rounded-lg mb-2 border border-black/10 dark:bg-white/50 bg-zinc-50 outline-none"
            placeholder="Сгенерированный невидимый текст появится здесь"
          />

          <div className="flex justify-between items-center ">
            <div>Символов: {characterCount}</div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(testAreaText)}
                className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]"
                title="Скопировать в буфер обмена"
              >
                <Copy size={16} className="text-yellow-300" />
              </button>
              <button onClick={clearTestArea} className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]" title="Очистить тестовую область">
                <Trash size={16} className="text-yellow-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
