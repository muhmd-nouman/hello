"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Clipboard, RefreshCw, Share2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { generateNames } from "@/lib/name-generator"

type NameType = "personal" | "business" | "domain" | "character" | "fantasy"

export default function NameGenerator() {
  const { toast } = useToast()
  const [nameType, setNameType] = useState<NameType>("personal")
  const [startsWith, setStartsWith] = useState("")
  const [nameLength, setNameLength] = useState([5])
  const [useAlliteration, setUseAlliteration] = useState(false)
  const [gender, setGender] = useState("any")
  const [origin, setOrigin] = useState("any")
  const [generatedNames, setGeneratedNames] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [favorites, setFavorites] = useState<string[]>([])

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteNames")
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  // Save favorites to localStorage when they change
  useEffect(() => {
    localStorage.setItem("favoriteNames", JSON.stringify(favorites))
  }, [favorites])

  const handleGenerate = async () => {
    setIsGenerating(true)
    try {
      // Generate names based on selected options
      const names = await generateNames({
        type: nameType,
        startsWith,
        length: nameLength[0],
        useAlliteration,
        gender,
        origin,
      })
      setGeneratedNames(names)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate names. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = (name: string) => {
    navigator.clipboard.writeText(name)
    toast({
      title: "Copied!",
      description: `"${name}" copied to clipboard.`,
    })
  }

  const toggleFavorite = (name: string) => {
    if (favorites.includes(name)) {
      setFavorites(favorites.filter((n) => n !== name))
    } else {
      setFavorites([...favorites, name])
    }
  }

  const shareName = (name: string) => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this name I generated!",
          text: `I found this great name using Name Generator Tool: ${name}`,
          url: window.location.href,
        })
        .catch(() => {
          // Fallback if sharing fails
          copyToClipboard(name)
        })
    } else {
      // Fallback for browsers that don't support sharing
      copyToClipboard(name)
    }
  }

  return (
    <section id="generator" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Name Generator</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Customize your preferences and generate the perfect name for any purpose.
          </p>
        </div>

        <Tabs
          defaultValue="personal"
          className="w-full max-w-4xl mx-auto"
          onValueChange={(value) => setNameType(value as NameType)}
        >
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="domain">Domain</TabsTrigger>
            <TabsTrigger value="character">Character</TabsTrigger>
            <TabsTrigger value="fantasy">Fantasy</TabsTrigger>
          </TabsList>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Customize Your {nameType.charAt(0).toUpperCase() + nameType.slice(1)} Name</CardTitle>
              <CardDescription>Set your preferences to generate the perfect {nameType} name.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="starts-with">Starts With</Label>
                  <Input
                    id="starts-with"
                    placeholder="Enter starting letter(s)"
                    value={startsWith}
                    onChange={(e) => setStartsWith(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name-length">Name Length</Label>
                  <div className="pt-2">
                    <Slider
                      id="name-length"
                      min={3}
                      max={15}
                      step={1}
                      value={nameLength}
                      onValueChange={setNameLength}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Short</span>
                      <span>{nameLength[0]} characters</span>
                      <span>Long</span>
                    </div>
                  </div>
                </div>

                {nameType === "personal" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select value={gender} onValueChange={setGender}>
                        <SelectTrigger id="gender">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="neutral">Gender Neutral</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="origin">Origin</Label>
                      <Select value={origin} onValueChange={setOrigin}>
                        <SelectTrigger id="origin">
                          <SelectValue placeholder="Select origin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="french">French</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                          <SelectItem value="german">German</SelectItem>
                          <SelectItem value="italian">Italian</SelectItem>
                          <SelectItem value="japanese">Japanese</SelectItem>
                          <SelectItem value="chinese">Chinese</SelectItem>
                          <SelectItem value="indian">Indian</SelectItem>
                          <SelectItem value="arabic">Arabic</SelectItem>
                          <SelectItem value="nordic">Nordic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                {(nameType === "business" || nameType === "domain") && (
                  <div className="flex items-center space-x-2">
                    <Switch id="alliteration" checked={useAlliteration} onCheckedChange={setUseAlliteration} />
                    <Label htmlFor="alliteration">Use Alliteration</Label>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleGenerate} disabled={isGenerating} className="w-full">
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate Names"
                )}
              </Button>
            </CardFooter>
          </Card>

          {generatedNames.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Generated Names</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {generatedNames.map((name, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-medium">{name}</p>
                        <div className="flex space-x-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => copyToClipboard(name)}
                            title="Copy to clipboard"
                          >
                            <Clipboard className="h-4 w-4" />
                            <span className="sr-only">Copy to clipboard</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleFavorite(name)}
                            title={favorites.includes(name) ? "Remove from favorites" : "Add to favorites"}
                            className={favorites.includes(name) ? "text-yellow-500" : ""}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill={favorites.includes(name) ? "currentColor" : "none"}
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span className="sr-only">
                              {favorites.includes(name) ? "Remove from favorites" : "Add to favorites"}
                            </span>
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => shareName(name)} title="Share name">
                            <Share2 className="h-4 w-4" />
                            <span className="sr-only">Share name</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {favorites.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Your Favorites</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favorites.map((name, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-medium">{name}</p>
                        <div className="flex space-x-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => copyToClipboard(name)}
                            title="Copy to clipboard"
                          >
                            <Clipboard className="h-4 w-4" />
                            <span className="sr-only">Copy to clipboard</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleFavorite(name)}
                            title="Remove from favorites"
                            className="text-yellow-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span className="sr-only">Remove from favorites</span>
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => shareName(name)} title="Share name">
                            <Share2 className="h-4 w-4" />
                            <span className="sr-only">Share name</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </Tabs>
      </div>
    </section>
  )
}

