import { useState, useEffect } from "react"
import { sortPromotions } from "@/app/utils/functions.utils"
import { Promotion } from "@/app/types/Product.type"
import { Product } from "@/app/types/Product.type"

const useDiscountedByCategory = (category: string) => {
  const [data, setData] = useState<Promotion[]>([])
  const [filtered, setFiltered] = useState<Product[]>([])

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3170/promotion")
      const data: Promotion[] = await res.json()
      setData(data)
    }
    getData()
  }, [category])

  useEffect(() => {
    const discountedProducts = sortPromotions(data)
    const byCategory = discountedProducts.filter(
      (p) => p.category.categoryName === category,
    )
    setFiltered(byCategory)
  }, [data, category])

  return filtered
}

export default useDiscountedByCategory
