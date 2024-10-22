import { sortPromotions } from "@/app/utils/sortPromotions.util"
import { API_BASE_URL } from "@/app/consts/api.consts"

export const getDiscountedProducts = async () => {
  const res = await fetch(`${API_BASE_URL}/promotion`)
  const discountedProducts = await res.json()
  const discountedProductsSorted = sortPromotions(discountedProducts)
  return discountedProductsSorted
}
