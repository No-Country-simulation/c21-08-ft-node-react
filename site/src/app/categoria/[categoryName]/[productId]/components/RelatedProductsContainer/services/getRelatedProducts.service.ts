import { Product } from "@/app/types/Product.type"

export const getRelatedProducts = async (
  productId: string,
  categoryId: string,
) => {
  const res = await fetch(
    `http://localhost:3170/product/category/${categoryId}`,
  )
  const productsByCategory: Product[] = await res.json()
  const remainingProducts = productsByCategory.filter(
    (p) => p.productId !== productId,
  )
  return [...remainingProducts, ...remainingProducts, ...remainingProducts]
}
