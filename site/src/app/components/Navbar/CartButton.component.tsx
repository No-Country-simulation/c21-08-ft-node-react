import { useContext } from "react"
import { CartContext } from "@/app/contexts/cart.context"
import Icon from "../Icon/Icon.component"
import { CartButtonProps } from "./types/CartButtonProps.type"
import { getTotalProductsInCart } from "./utils/getTotalProductsInCart.util"
import { usePathname } from "next/navigation"

const CartButton = ({ changeCartVisibility }: CartButtonProps) => {
  const { productsInCart } = useContext(CartContext)
  const path = usePathname()
  return (
    <button
      className="flex justify-end gap-2"
      disabled={path === "/finalizar-compra"}
      onClick={changeCartVisibility}
    >
      <Icon iconType="cartSmall" />
      <span>{getTotalProductsInCart(productsInCart)}</span>
    </button>
  )
}

export default CartButton
