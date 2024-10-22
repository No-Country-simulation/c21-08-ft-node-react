import { Product } from "../../../types/Product.type"
import { useState, useContext } from "react"
import { CartContext } from "../../../contexts/cart.context"

const useCardLogic = (product: Product) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const { addToCart } = useContext(CartContext)

  const { promotion, price } = product

  console.log(promotion)

  const handleFavorite = () => {
    setIsFavorite((prevIsFavourite) => !prevIsFavourite)
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  const finalPrice =
    promotion !== null ? price - price * promotion.percentage : price
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
