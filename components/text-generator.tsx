"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { generateInvisibleText, invisibleTextSizes } from "@/lib/invisible-text"
import { Check, Copy, RefreshCw } from "lucide-react"

export default function TextGenerator() {
  const { toast } = useToast()
  const [generatedText, setGeneratedText] = useState<string>("")
  const [customSize, setCustomSize] = useState<number>(10)
  const [selectedTab, setSelectedTab] = useState<string>("one-click")
  const [copySuccess, setCopySuccess] = useState<boolean>(false)

  // Function to generate text based on size
  const generateText = (size: number) => {
    const text = generateInvisibleText(size)
    setGeneratedText(text)
  }

  // Function to handle custom generation
  const handleCustomGeneration = () => {
    generateText(customSize)
  }

  // Function to copy text to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedText)

      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)

      toast({
        title: "Copied to clipboard!",
        description: `${customSize} invisible characters copied.`,
      })
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually.",
        variant: "destructive",
      })
    }
  }

  return (
    <section id="generator" className="w-full py-12 md:py-16 lg:py-20 border-t ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Generate Invisible Text</h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Use any of the three methods below to create invisible text for your needs
          </p>
        </div>

        <div className="mx-auto max-w-2xl mt-8 bg-white dark:bg-background border rounded-md p-3 shadow-sm">
          <Tabs defaultValue="one-click" onValueChange={(value) => setSelectedTab(value)}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="one-click">One-Click</TabsTrigger>
              <TabsTrigger value="manual">Manual Selection</TabsTrigger>
              <TabsTrigger value="custom">Custom Size</TabsTrigger>
            </TabsList>

            <TabsContent value="one-click" className="p-4 border rounded-md mt-4">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Select a pre-defined size to instantly generate invisible text
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button onClick={() => generateText(invisibleTextSizes.small)} variant="outline">
                    Small (5 chars)
                  </Button>
                  <Button onClick={() => generateText(invisibleTextSizes.medium)} variant="outline">
                    Medium (15 chars)
                  </Button>
                  <Button onClick={() => generateText(invisibleTextSizes.large)} variant="outline">
                    Large (30 chars)
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="manual" className="p-4 border rounded-md mt-4">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Drag the slider to select how many invisible characters you want
                </p>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Character Count: {customSize}</Label>
                    </div>
                    <Slider
                      value={[customSize]}
                      min={1}
                      max={100}
                      step={1}
                      onValueChange={(value) => setCustomSize(value[0])}
                    />
                  </div>
                  <Button onClick={() => generateText(customSize)}>Generate Text</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="custom" className="p-4 border rounded-md mt-4">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Enter a custom number of invisible characters to generate
                </p>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    min={1}
                    max={1000}
                    value={customSize}
                    onChange={(e) => setCustomSize(Number.parseInt(e.target.value) || 1)}
                    placeholder="Enter number of characters"
                  />
                  <Button onClick={handleCustomGeneration}>Generate</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6 space-y-2">
            <Label htmlFor="generated-text">Generated Invisible Text</Label>
            <div className="relative">
              <div
                id="generated-text"
                className="min-h-24 p-3 border rounded-md flex items-center justify-center bg-muted/30"
              >
                {generatedText ? (
                  <>
                    <span className="text-sm text-muted-foreground">
                      {generatedText.length} invisible characters generated
                    </span>
                    <span className="sr-only">{generatedText}</span>
                  </>
                ) : (
                  <span className="text-sm text-muted-foreground">
                    Generate invisible text using one of the methods above
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-end">
            <Button variant="outline" size="sm" onClick={() => setGeneratedText("")} disabled={!generatedText}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Reset
            </Button>
            <Button variant="default" size="sm" onClick={copyToClipboard} disabled={!generatedText}>
              {copySuccess ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy to Clipboard
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

