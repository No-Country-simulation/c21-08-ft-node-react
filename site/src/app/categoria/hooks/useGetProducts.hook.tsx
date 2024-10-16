// import useFetch from "@/app/hooks/useFetch.hook"
import { Product, Promotion } from "@/app/types/Product.type"
import { useEffect, useState } from "react"

const useProductsByCategory = (category: string) => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function getProducts() {
      const productsRes = await fetch("http://localhost:3170/product")
      const products: Product[] = await productsRes.json()
      const productsByCategory = products.filter(
        (p) => p.category.categoryName.toLowerCase() === category.toLowerCase(),
      )

      const promotionsRes = await fetch("http://localhost:3170/promotion")
      const promotions: Promotion[] = await promotionsRes.json()

      const productsWithDiscount = promotions
        .map((prom) => {
          const withPromotion = prom.product.map((prod) => ({
            ...prod,
            promotion: prom.percentage / 100,
          }))
          return withPromotion
        })
        .flat()

      const finalProducts = productsByCategory.map((p) => {
        const discounted = productsWithDiscount.find(
          (pd) => pd.productId === p.productId,
        )

        return discounted || p
      })

      setProducts(finalProducts)
    }
    getProducts()
  }, [category])
  return products
}

export default useProductsByCategory
