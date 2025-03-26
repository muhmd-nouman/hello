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
        title: "Copied!",
        description: "Invisible text copied to clipboard",
      })
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try another method",
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
          title: "Invalid size",
          description: "Please enter a number between 1 and 1000",
          variant: "destructive",
        })
        return
      }

      const type = getTypeFromSelection(selectedType)
      const invisibleText = generateInvisibleText(size, type as any)

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "Generated!",
        description: `${size} invisible characters generated`,
      })
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "An error occurred while generating invisible text",
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
          title: "Invalid size",
          description: "Please enter a number between 1 and 10000",
          variant: "destructive",
        })
        return
      }

      const invisibleText = generateInvisibleText(size, "space")

      setTestAreaText(invisibleText)
      setCharacterCount(invisibleText.length)

      toast({
        title: "Generated!",
        description: `${size} invisible characters generated`,
      })
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "An error occurred while generating invisible text",
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
          <h1 className="text-3xl text-center text-black dark:text-yellow-300 font-bold mb-4">Invisible Text</h1>
          <p className="text-zinc-600 dark:text-zinc-100 text-lg text-center">Generate unlimited blank space and quickly copy and paste invisible text.</p>
        </div>
      </section>
      
      <section className="mx-auto pb-16 px-6" id="types-of-unicode-invisible-text">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Method 1: Blank space copy and paste with the Button */}
          {/* <div className="p-6 rounded-lg shadow-md bg-background dark:bg-yellow-200 text-black"> */}
          <div className="p-6 rounded-lg shadow-md bg-background dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">Method 1: Blank space copy and paste with the Button</h2>

            <button
              onClick={handleCopyHangulFiller}
              className="bg-[#001F5B] mb-4 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              <Copy size={16} />
              Copy Hangul Filler
            </button>

            <p className="mt-4">
              All you need to do is click the provided 'Copy' button. Once you click, invisible text will be copied in
              your clipboard which you can paste anywhere.
            </p>

            <p className="mt-4">If this method doesn't work, use the 2nd or 3rd method.</p>
          </div>

          {/* Method 2: Select and Copy */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">Method 2. Select and Copy</h2>

            <p className="mb-4">
              Click the Select button to highlight the empty text in the box below. Use CTRL+C on Windows or Command (⌘)+C
              on Mac to copy the invisible characters to your clipboard.
            </p>

            <p className="mb-4">
              To verify the copied blank space text, paste it into the Test box provided or click the green button in the
              top right corner to see it in action.
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
                Copy
              </button>
            </div>
          </div>

          {/* Method 3: Generate Custom Invisible Text */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">Method 3: Generate Custom Invisible Text as per Requirement</h2>

            <p className="mb-4">
              This is an innovative method where you can enter the number of invisible characters you want to generate
              into the box, click the 'Generate' button, and then press the 'Copy Blank Text' button to copy the invisible
              string to your clipboard.
            </p>

            <p className="mb-4">We improved this version for our users by giving them a choice of unicode selection.</p>

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
                Generate
              </button>
            </div>
          </div>

          {/* Method 4: Generate Unlimited Invisible Characters */}
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
            <h2 className="text-lg font-bold mb-4">Method 4. Generate Unlimited Invisible Characters</h2>

            <p className="mb-4">
              Using this method, you can generate unlimited invisible character. For example; you wan to send 4 to 5 pages
              invisible message to someone then this innovative method would be the perfect match for you to copy paste
              blank spaces.
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
                Generate
              </button>
            </div>

            <p className="mt-4 text-center text-sm">
              For more advanced invisible text tools, visit{" "}
              <a href="https://InvisibleSymbol.com" className="underline">
                InvisibleSymbol.com
              </a>
            </p>
          </div>
        </div>
        {/* Test Area */}
        <div className="p-6 rounded-lg shadow-md bg-white dark:bg-yellow-200 text-black">
          <h2 className="text-lg font-bold mb-4">Test Area</h2>
          <p className="mb-4">For testing, paste the empty character into the text box. If the gray text disappears, it means your blank text is working.</p>
          <textarea
            ref={testAreaRef}
            value={testAreaText}
            onChange={(e) => {
              setTestAreaText(e.target.value)
              setCharacterCount(e.target.value.length)
            }}
            className="w-full h-32 p-2 rounded-lg mb-2 border border-black/10 dark:bg-white/50 bg-zinc-50 outline-none"
            placeholder="Generated invisible characters will appear here"
          />

          <div className="flex justify-between items-center ">
            <div>Characters: {characterCount}</div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(testAreaText)}
                className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]"
                title="Copy to clipboard"
              >
                <Copy size={16} className="text-yellow-300" />
              </button>
              <button onClick={clearTestArea} className="p-2 border dark:border-yellow-300 rounded-lg bg-[#02194d]" title="Clear test area">
                <Trash size={16} className="text-yellow-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

