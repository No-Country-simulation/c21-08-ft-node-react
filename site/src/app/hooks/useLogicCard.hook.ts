import { Product } from "../types/Product.type"
import { useState, useContext } from "react"
import { CartContext } from "../contexts/cart.context"
const useLogicCard = (product: Product) => {
  const [favorite, setFavorite] = useState<boolean>(false)
  const { addToCart } = useContext(CartContext)

  const { promotion, price } = product

  const handleFavorite = () => {
    setFavorite((prevState) => !prevState)
  }

  const handleAddToCart = () => {
    addToCart(product)
  }
  const discountedPrice = promotion ? price - price * promotion : null
  const discount = promotion ? promotion * 100 : null
  return {
    favorite,
    handleFavorite,
    handleAddToCart,
    discount,
    discountedPrice,
  }
}
export default useLogicCard
