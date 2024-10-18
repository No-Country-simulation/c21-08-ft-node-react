import { Product } from "../types/Product.type"
import { useState, useContext } from "react"
import { CartContext } from "../contexts/cart.context"

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

  const finalPrice = promotion ? price - price * promotion : price
  const discount = promotion ? promotion * 100 : null 
  
  // Hay que charlar con backend
  // Los productos tienen que tener una propiedad
  // llamada promotion (o discount), por default es 0
  // cuando es diferente de 0 significa que hay un descuento
  // osea, esta en promocion.

  return {
    finalPrice,
    discount,
    isFavorite,
    handleFavorite,
    handleAddToCart,
  }
}

export default useCardLogic
