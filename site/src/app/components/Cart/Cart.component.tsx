"use client"

import { useContext } from "react"
import CartHeader from "./CartHeader.component"
import CartFooter from "./CartFooter.component"
import CartProductList from "./CartProductList.component"
import { CartContext } from "@/app/contexts/cart.context"
import { CartProps } from "./types/CartProps.type"
import Overlay from "../Overlay/Overlay.component"

const Cart = ({ changeCartVisibility, isCartVisible, style }: CartProps) => {
  const {
    productsInCart,
    incrementProductQty,
    decrementProductQty,
    removeProduct,
  } = useContext(CartContext)

  return (
    <>
      <Overlay
        isVisible={isCartVisible}
        changeVisibility={changeCartVisibility}
      />
      <div
        className={`${isCartVisible ? "flex" : "hidden"} ${positionStyles} z-30 w-[496px] flex-col gap-4 bg-white px-4 py-4 shadow-xl md:w-2/3 sm:w-full xs:gap-2 xs:px-1 xs:py-1`}
      >
        <CartHeader changeCartVisibility={changeCartVisibility} />
        <CartProductList
          productsInCart={productsInCart}
          incrementProductQty={incrementProductQty}
          decrementProductQty={decrementProductQty}
          removeProduct={removeProduct}
        />
        <CartFooter productsInCart={productsInCart} />
      </div>
    </>
  )
}

export default Cart
