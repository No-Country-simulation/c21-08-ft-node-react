import { Dispatch, SetStateAction } from "react"
import { Product } from "../types/Product.type"

export type ResponseKeys = "allIngredients" | "owned" | "instructions"

// export type KramyResponse = {
//   [key in ResponseKeys]: string[]
// } & { recipe: string }

export type KramyResponse = {
  allIngredients: string[]
  instructions: string[]
  recipe: string
  owned: Product[]
}

export type KramyFinalResponse = Omit<KramyResponse, "allIngredients"> & {
  allIngredients: string[][]
}

export type KramyProps = {
  mode: "popup" | "page"
  response?: KramyFinalResponse | undefined
  setResponse?: Dispatch<SetStateAction<KramyFinalResponse | undefined>>
}

export type KramySectionProps = {
  response: KramyFinalResponse | undefined
}
