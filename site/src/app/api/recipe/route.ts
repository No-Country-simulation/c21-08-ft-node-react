import { NextRequest, NextResponse } from "next/server"
import { CohereClient } from "cohere-ai"
import { currentStock } from "@/mocks/db.mock"
import { getPrompt } from "./promp"

const cohere = new CohereClient({ token: process.env.COHERE_API_KEY })

async function chatWithCohere(userPrompt: string) {
  const res = await cohere.chat({
    model: "command-r-plus",
    message: userPrompt,
  })

  return res
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const recipeQuery = searchParams.get("recipequery")
    if (!recipeQuery) throw new Error("query empty")

    const prompt = getPrompt(currentStock, recipeQuery)
    const response = await chatWithCohere(prompt)
    console.log("response.text: ", response.text)

    const regex = /\[([\s\S]*?)\]/g
    const matches = Array.from(response.text.matchAll(regex), (match) =>
      match[1].split(/\s*,\s*/),
    )
    console.log("matches: ", matches)
    return NextResponse.json(response.text, { status: 200 })
  } catch (err) {
    return NextResponse.json(`there was an error: ${err}`)
  }
}
