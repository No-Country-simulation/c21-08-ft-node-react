import { Product } from "../../../types/Product.type"
import { useState, useContext } from "react"
import { CartContext } from "../../../contexts/cart.context"
import { computeDiscount } from "@/app/utils/price.util"

const useCardLogic = (product: Product) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const { addToCart } = useContext(CartContext)

  const { promotion, price } = product

  const handleFavorite = () => {
    setIsFavorite((prevIsFavourite) => !prevIsFavourite)
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  const finalPrice =
    promotion !== null ? computeDiscount(price, promotion.percentage) : price
  const discount = promotion !== null ? promotion.percentage * 100 : null

  return {
    finalPrice,
    discount,
    isFavorite,
    handleFavorite,
    handleAddToCart,
  }
}

export default useCardLogic
