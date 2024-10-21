import { sortPromotions } from "@/app/utils/sortPromotions.util"

export const getDiscountedProducts = async () => {
  const res = await fetch("http://localhost:3170/promotion")
  const rawArr = await res.json()
  const discountedProducts = sortPromotions(rawArr)
  return discountedProducts
}
