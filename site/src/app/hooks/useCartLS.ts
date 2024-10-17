import { useState, useEffect } from "react"
import { ProductInCart } from "../components/Cart/types/ProductInCart.type"

export const useCartLS = (): ProductInCart[] => {
  const [products, setProducts] = useState<ProductInCart[]>([])
  useEffect(() => {
    const localStorageLecture = window.localStorage.getItem("cart")

    const productsInCart: ProductInCart[] = localStorageLecture
      ? JSON.parse(localStorageLecture)
      : []

    setProducts(productsInCart)
  }, [])
  return products
}
