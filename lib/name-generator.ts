import { cache } from "react"

// Types
export type NameGeneratorOptions = {
  type: "personal" | "business" | "domain" | "character" | "fantasy"
  startsWith?: string
  length?: number
  useAlliteration?: boolean
  gender?: string
  origin?: string
}

// Cache for generated names to avoid redundant API calls
const nameCache = new Map<string, string[]>()

// Function to generate a cache key based on options
function generateCacheKey(options: NameGeneratorOptions): string {
  return JSON.stringify(options)
}

// Cached version of the name generator
export const generateNames = cache(async (options: NameGeneratorOptions): Promise<string[]> => {
  const cacheKey = generateCacheKey(options)

  // Check if we have cached results
  if (nameCache.has(cacheKey)) {
    return nameCache.get(cacheKey)!
  }

  // Simulate API call with a delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Generate names based on options
  let names: string[] = []

  switch (options.type) {
    case "personal":
      names = generatePersonalNames(options)
      break
    case "business":
      names = generateBusinessNames(options)
      break
    case "domain":
      names = generateDomainNames(options)
      break
    case "character":
      names = generateCharacterNames(options)
      break
    case "fantasy":
      names = generateFantasyNames(options)
      break
  }

  // Cache the results
  nameCache.set(cacheKey, names)

  return names
})

// Helper functions to generate different types of names
function generatePersonalNames(options: NameGeneratorOptions): string[] {
  const firstNames = {
    any: ["Alex", "Jordan", "Taylor", "Morgan", "Casey", "Riley", "Avery", "Quinn", "Blake", "Cameron"],
    male: ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles"],
    female: ["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen"],
    neutral: ["Alex", "Jordan", "Taylor", "Morgan", "Casey", "Riley", "Avery", "Quinn", "Blake", "Cameron"],
  }

  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
  ]

  const gender = options.gender || "any"
  const names = []

  for (let i = 0; i < 10; i++) {
    const firstName =
      firstNames[gender as keyof typeof firstNames][
        Math.floor(Math.random() * firstNames[gender as keyof typeof firstNames].length)
      ]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    names.push(`${firstName} ${lastName}`)
  }

  return names
}

function generateBusinessNames(options: NameGeneratorOptions): string[] {
  const prefixes = ["Nova", "Apex", "Elite", "Prime", "Vital", "Core", "Peak", "Ace", "Key", "Pro"]
  const suffixes = [
    "Tech",
    "Solutions",
    "Systems",
    "Group",
    "Labs",
    "Works",
    "Innovations",
    "Dynamics",
    "Ventures",
    "Industries",
  ]
  const names = []

  for (let i = 0; i < 10; i++) {
    const prefix = options.startsWith
      ? prefixes.filter((p) => p.toLowerCase().startsWith(options.startsWith!.toLowerCase()))[0] ||
        prefixes[Math.floor(Math.random() * prefixes.length)]
      : prefixes[Math.floor(Math.random() * prefixes.length)]

    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)]

    if (options.useAlliteration) {
      const matchingSuffixes = suffixes.filter((s) => s[0].toLowerCase() === prefix[0].toLowerCase())
      const alliterationSuffix =
        matchingSuffixes.length > 0 ? matchingSuffixes[Math.floor(Math.random() * matchingSuffixes.length)] : suffix

      names.push(`${prefix} ${alliterationSuffix}`)
    } else {
      names.push(`${prefix} ${suffix}`)
    }
  }

  return names
}

function generateDomainNames(options: NameGeneratorOptions): string[] {
  const prefixes = ["bright", "quick", "smart", "easy", "simple", "fast", "clear", "bold", "sharp", "swift"]
  const suffixes = ["app", "site", "hub", "spot", "zone", "space", "base", "link", "web", "tech"]
  const tlds = [".com", ".io", ".co", ".app", ".tech", ".ai", ".digital", ".online", ".net", ".org"]
  const names = []

  for (let i = 0; i < 10; i++) {
    const prefix = options.startsWith
      ? prefixes.filter((p) => p.toLowerCase().startsWith(options.startsWith!.toLowerCase()))[0] ||
        prefixes[Math.floor(Math.random() * prefixes.length)]
      : prefixes[Math.floor(Math.random() * prefixes.length)]

    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)]
    const tld = tlds[Math.floor(Math.random() * tlds.length)]

    if (options.useAlliteration) {
      const matchingSuffixes = suffixes.filter((s) => s[0].toLowerCase() === prefix[0].toLowerCase())
      const alliterationSuffix =
        matchingSuffixes.length > 0 ? matchingSuffixes[Math.floor(Math.random() * matchingSuffixes.length)] : suffix

      names.push(`${prefix}${alliterationSuffix}${tld}`)
    } else {
      names.push(`${prefix}${suffix}${tld}`)
    }
  }

  return names
}

function generateCharacterNames(options: NameGeneratorOptions): string[] {
  const firstNames = ["Aria", "Zane", "Luna", "Orion", "Nova", "Sage", "Ember", "Finn", "Ivy", "Kai"]
  const lastNames = [
    "Blackwood",
    "Stormwind",
    "Nightshade",
    "Silverstone",
    "Moonlight",
    "Fireheart",
    "Shadowvale",
    "Starfall",
    "Winterborn",
    "Thornfield",
  ]
  const names = []

  for (let i = 0; i < 10; i++) {
    const firstName = options.startsWith
      ? firstNames.filter((n) => n.toLowerCase().startsWith(options.startsWith!.toLowerCase()))[0] ||
        firstNames[Math.floor(Math.random() * firstNames.length)]
      : firstNames[Math.floor(Math.random() * firstNames.length)]

    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    names.push(`${firstName} ${lastName}`)
  }

  return names
}

function generateFantasyNames(options: NameGeneratorOptions): string[] {
  const prefixes = ["Zor", "Ael", "Thal", "Kael", "Dor", "Gar", "Mael", "Vor", "Nar", "Syl"]
  const suffixes = ["ius", "on", "ith", "or", "an", "el", "wyn", "is", "ath", "ir"]
  const generatedNames = []

  for (let i = 0; i < 10; i++) {
    const prefix = options.startsWith
      ? prefixes.filter((p) => p.toLowerCase().startsWith(options.startsWith!.toLowerCase()))[0] ||
        prefixes[Math.floor(Math.random() * prefixes.length)]
      : prefixes[Math.floor(Math.random() * prefixes.length)]

    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)]
    generatedNames.push(`${prefix}${suffix}`)
  }

  return generatedNames
}



