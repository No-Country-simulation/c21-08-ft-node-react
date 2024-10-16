// import useFetch from "@/app/hooks/useFetch.hook"
import { Product } from "@/app/types/Product.type"
import { useEffect, useState } from "react"

const useProductsByCategory = (category: string) => {
  const [data, setData] = useState<Product[]>([])
  const [filtered, setFiltered] = useState<Product[]>([])
  // const products = useFetch<Product[]>("http://localhost:3170/product") || []

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3170/product")
      const promotions: Product[] = await res.json()
      setData(data)
    }
  }, [category])

  useEffect(() => {
    const filteredProducts = data.filter(
      (p) => p.category.categoryName === category,
    )
    setFiltered(filteredProducts)
  }, [data, category])

  return filtered
}

export default useProductsByCategory
