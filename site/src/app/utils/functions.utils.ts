import { Promotion } from "../types/Product.type"

export const strParseOut = (str: string) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export const sortPromotions = (promotions: Promotion[]) => {
  const sorted = promotions.sort((a, b) => b.percentage - a.percentage)
  const flatted = sorted.map((p) => p.product).flat()
  return flatted
}
