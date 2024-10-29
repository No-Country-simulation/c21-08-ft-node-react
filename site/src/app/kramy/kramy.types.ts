import { Dispatch, SetStateAction } from "react"

export type ResponseKeys = "allIngredients" | "owned" | "instructions"

export type KramyResponse = {
  [key in ResponseKeys]: string[]
} & { recipe: string }

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
