"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import { containsInvisibleCharacters, countInvisibleCharacters } from "@/lib/invisible-text"
import { AlertCircle, Wand2 } from "lucide-react"

export default function PreviewSection() {
  const [previewText, setPreviewText] = useState<string>("")
  const [hasInvisibleChars, setHasInvisibleChars] = useState<boolean>(false)
  const [charCount, setCharCount] = useState<number>(0)
  const [visibleCharCount, setVisibleCharCount] = useState<number>(0)
  const [demoExamples, setDemoExamples] = useState<string[]>([
    "This⁣ ⁣has⁣ ⁣invisible⁣ ⁣spaces",
    "Normal text",
    "Spaced​text​with​invisible​characters",
    "This text has‌‌‌ ‌‌‌hidden‌‌‌ ‌‌‌formatting",
  ])

  useEffect(() => {
    if (previewText) {
      const hasInvisible = containsInvisibleCharacters(previewText)
      setHasInvisibleChars(hasInvisible)

      const invisibleCount = countInvisibleCharacters(previewText)
      setCharCount(previewText.length)
      setVisibleCharCount(previewText.length - invisibleCount)
    } else {
      setHasInvisibleChars(false)
      setCharCount(0)
      setVisibleCharCount(0)
    }
  }, [previewText])

  const loadDemo = (text: string) => {
    setPreviewText(text)
  }

  return (
    <section id="preview" className="w-full py-12 md:py-16 lg:py-20 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Test & Preview</h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Paste or type text here to check for invisible characters
          </p>
        </div>

        <div className="mx-auto max-w-3xl mt-8 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="preview-text">Enter or paste text to analyze</Label>
            <Textarea
              id="preview-text"
              value={previewText}
              onChange={(e) => setPreviewText(e.target.value)}
              placeholder="Paste text here to test for invisible characters..."
              className="min-h-[150px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Text Statistics</p>
              <div className="p-4 border rounded-md bg-background">
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Total Characters:</span>
                    <span className="font-mono">{charCount}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Visible Characters:</span>
                    <span className="font-mono">{visibleCharCount}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Invisible Characters:</span>
                    <span className="font-mono">{charCount - visibleCharCount}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Detection Result</p>
              {previewText.length > 0 ? (
                hasInvisibleChars ? (
                  <Alert variant="default" className="bg-blue-500/10 border-blue-500/50 text-foreground">
                    <AlertCircle className="h-4 w-4 text-blue-500" />
                    <AlertDescription>
                      Invisible characters detected! This text contains {charCount - visibleCharCount} invisible
                      characters.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Alert variant="default" className="bg-green-500/10 border-green-500/50 text-foreground">
                    <AlertCircle className="h-4 w-4 text-green-500" />
                    <AlertDescription>
                      No invisible characters detected. This text only contains visible characters.
                    </AlertDescription>
                  </Alert>
                )
              ) : (
                <Alert variant="default" className="bg-muted border-border">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>Enter text above to check for invisible characters.</AlertDescription>
                </Alert>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Try these demo examples</Label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
              {demoExamples.map((example, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="h-auto py-2 px-3 justify-start overflow-hidden whitespace-nowrap text-ellipsis"
                  onClick={() => loadDemo(example)}
                >
                  <Wand2 className="mr-2 h-3.5 w-3.5" />
                  <span className="truncate">{example.length > 20 ? `${example.substring(0, 20)}...` : example}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

