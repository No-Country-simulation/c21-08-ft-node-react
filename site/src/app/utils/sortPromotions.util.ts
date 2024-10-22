import { Promotion } from "../types/Product.type"

export const sortPromotions = (promotions: Promotion[]) => {
  const sorted = promotions.sort((a, b) => b.percentage - a.percentage)
  const flatted = sorted.map((p) => p.product).flat()
  return flatted
}
