import { sortPromotions } from "@/app/utils/sortPromotions.util"

export const getDiscountedProducts = async () => {
  const res = await fetch("http://localhost:3170/promotion")
  const discountedProducts = await res.json()
  const discountedProductsSorted = sortPromotions(discountedProducts)
  return discountedProductsSorted
}
