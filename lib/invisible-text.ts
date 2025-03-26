// Different types of invisible Unicode characters
const ZERO_WIDTH_SPACE = "\u200B" // Zero width space
const ZERO_WIDTH_NON_JOINER = "\u200C" // Zero width non-joiner
const ZERO_WIDTH_JOINER = "\u200D" // Zero width joiner
const WORD_JOINER = "\u2060" // Word joiner
const INVISIBLE_SEPARATOR = "\u2063" // Invisible separator
const HANGUL_FILLER = "\u3164" // Hangul filler (visible in some contexts)

/**
 * Generates invisible text using various invisible Unicode characters
 * @param size - The number of invisible characters to generate
 * @param type - The type of invisible character to use (default is random)
 * @returns A string of invisible characters
 */
export function generateInvisibleText(
  size: number,
  type: "random" | "space" | "nonjoiner" | "joiner" | "word" | "separator" | "hangul" = "random",
): string {
  // Validate input
  if (isNaN(size) || size < 0) {
    throw new Error("Size must be a positive number")
  }

  if (size > 10000) {
    throw new Error("Size cannot exceed 10000 characters for performance reasons")
  }

  let result = ""

  for (let i = 0; i < size; i++) {
    if (type === "random") {
      const characters = [
        ZERO_WIDTH_SPACE,
        ZERO_WIDTH_NON_JOINER,
        ZERO_WIDTH_JOINER,
        WORD_JOINER,
        INVISIBLE_SEPARATOR,
        HANGUL_FILLER,
      ]
      const randomIndex = Math.floor(Math.random() * characters.length)
      result += characters[randomIndex]
    } else if (type === "space") {
      result += ZERO_WIDTH_SPACE
    } else if (type === "nonjoiner") {
      result += ZERO_WIDTH_NON_JOINER
    } else if (type === "joiner") {
      result += ZERO_WIDTH_JOINER
    } else if (type === "word") {
      result += WORD_JOINER
    } else if (type === "separator") {
      result += INVISIBLE_SEPARATOR
    } else if (type === "hangul") {
      result += HANGUL_FILLER
    }
  }

  return result
}

/**
 * Predefined sizes for quick generation
 */
export const invisibleTextSizes = {
  small: 5,
  medium: 15,
  large: 30,
}

/**
 * Checks if a string contains invisible characters
 * @param text - The text to check
 * @returns True if the text contains invisible characters
 */
export function containsInvisibleCharacters(text: string): boolean {
  const invisibleChars = [
    ZERO_WIDTH_SPACE,
    ZERO_WIDTH_NON_JOINER,
    ZERO_WIDTH_JOINER,
    WORD_JOINER,
    INVISIBLE_SEPARATOR,
    HANGUL_FILLER,
  ]
  return invisibleChars.some((char) => text.includes(char))
}

/**
 * Counts the number of invisible characters in a string
 * @param text - The text to count invisible characters in
 * @returns The number of invisible characters
 */
export function countInvisibleCharacters(text: string): number {
  const invisibleChars = [
    ZERO_WIDTH_SPACE,
    ZERO_WIDTH_NON_JOINER,
    ZERO_WIDTH_JOINER,
    WORD_JOINER,
    INVISIBLE_SEPARATOR,
    HANGUL_FILLER,
  ]
  return text.split("").filter((char) => invisibleChars.includes(char)).length
}

/**
 * Highlights invisible characters in a string (for visualization)
 * @param text - The text with invisible characters
 * @returns An array of objects with character and visibility information
 */
export function highlightInvisibleCharacters(text: string): { char: string; isInvisible: boolean }[] {
  const invisibleChars = [
    ZERO_WIDTH_SPACE,
    ZERO_WIDTH_NON_JOINER,
    ZERO_WIDTH_JOINER,
    WORD_JOINER,
    INVISIBLE_SEPARATOR,
    HANGUL_FILLER,
  ]
  return text.split("").map((char) => ({
    char,
    isInvisible: invisibleChars.includes(char),
  }))
}




// // Different types of invisible Unicode characters
// const ZERO_WIDTH_SPACE = "\u200B" // Zero width space
// const ZERO_WIDTH_NON_JOINER = "\u200C" // Zero width non-joiner
// const ZERO_WIDTH_JOINER = "\u200D" // Zero width joiner
// const WORD_JOINER = "\u2060" // Word joiner
// const INVISIBLE_SEPARATOR = "\u2063" // Invisible separator

// /**
//  * Generates invisible text using various invisible Unicode characters
//  * @param size - The number of invisible characters to generate
//  * @param type - The type of invisible character to use (default is random)
//  * @returns A string of invisible characters
//  */
// export function generateInvisibleText(
//   size: number,
//   type: "random" | "space" | "nonjoiner" | "joiner" | "word" | "separator" = "random",
// ): string {
//   let result = ""

//   for (let i = 0; i < size; i++) {
//     if (type === "random") {
//       const characters = [ZERO_WIDTH_SPACE, ZERO_WIDTH_NON_JOINER, ZERO_WIDTH_JOINER, WORD_JOINER, INVISIBLE_SEPARATOR]
//       const randomIndex = Math.floor(Math.random() * characters.length)
//       result += characters[randomIndex]
//     } else if (type === "space") {
//       result += ZERO_WIDTH_SPACE
//     } else if (type === "nonjoiner") {
//       result += ZERO_WIDTH_NON_JOINER
//     } else if (type === "joiner") {
//       result += ZERO_WIDTH_JOINER
//     } else if (type === "word") {
//       result += WORD_JOINER
//     } else if (type === "separator") {
//       result += INVISIBLE_SEPARATOR
//     }
//   }

//   return result
// }

// /**
//  * Predefined sizes for quick generation
//  */
// export const invisibleTextSizes = {
//   small: 5,
//   medium: 15,
//   large: 30,
// }

// /**
//  * Checks if a string contains invisible characters
//  * @param text - The text to check
//  * @returns True if the text contains invisible characters
//  */
// export function containsInvisibleCharacters(text: string): boolean {
//   const invisibleChars = [ZERO_WIDTH_SPACE, ZERO_WIDTH_NON_JOINER, ZERO_WIDTH_JOINER, WORD_JOINER, INVISIBLE_SEPARATOR]
//   return invisibleChars.some((char) => text.includes(char))
// }

// /**
//  * Counts the number of invisible characters in a string
//  * @param text - The text to count invisible characters in
//  * @returns The number of invisible characters
//  */
// export function countInvisibleCharacters(text: string): number {
//   const invisibleChars = [ZERO_WIDTH_SPACE, ZERO_WIDTH_NON_JOINER, ZERO_WIDTH_JOINER, WORD_JOINER, INVISIBLE_SEPARATOR]
//   return text.split("").filter((char) => invisibleChars.includes(char)).length
// }

// /**
//  * Highlights invisible characters in a string (for visualization)
//  * @param text - The text with invisible characters
//  * @returns An array of objects with character and visibility information
//  */
// export function highlightInvisibleCharacters(text: string): { char: string; isInvisible: boolean }[] {
//   const invisibleChars = [ZERO_WIDTH_SPACE, ZERO_WIDTH_NON_JOINER, ZERO_WIDTH_JOINER, WORD_JOINER, INVISIBLE_SEPARATOR]
//   return text.split("").map((char) => ({
//     char,
//     isInvisible: invisibleChars.includes(char),
//   }))
// }

