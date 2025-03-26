import { NextResponse } from "next/server"
import { generateInvisibleText } from "@/lib/invisible-text"

export async function POST(request: Request) {
  try {
    const { size = 10, type = "space" } = await request.json()

    // Validate input
    const parsedSize = Number.parseInt(size.toString(), 10)

    if (isNaN(parsedSize) || parsedSize < 1 || parsedSize > 10000) {
      return NextResponse.json({ error: "Size must be a number between 1 and 10000" }, { status: 400 })
    }

    if (!["random", "space", "nonjoiner", "joiner", "word", "separator"].includes(type)) {
      return NextResponse.json({ error: "Invalid type specified" }, { status: 400 })
    }

    // Generate the invisible text
    const invisibleText = generateInvisibleText(
      parsedSize,
      type as "random" | "space" | "nonjoiner" | "joiner" | "word" | "separator",
    )

    return NextResponse.json({ text: invisibleText })
  } catch (error) {
    console.error("Error generating invisible text:", error)
    return NextResponse.json({ error: "Failed to generate invisible text" }, { status: 500 })
  }
}

