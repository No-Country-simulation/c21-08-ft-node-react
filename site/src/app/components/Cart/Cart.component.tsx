"use client"

import { useContext } from "react"
import CartHeader from "./CartHeader.component"
import CartFooter from "./CartFooter.component"
import CartProductList from "./CartProductList.component"
import { CartContext } from "@/app/contexts/cart.context"
import { CartProps } from "./types/CartProps.type"
import Overlay from "../Overlay/Overlay.component"

const Cart = ({ changeCartVisibility, isCartVisible, display }: CartProps) => {
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
        display={display}
      />
      <div
        className={`${isCartVisible ? "flex" : "hidden"} ${
          display === "cart"
            ? "fixed right-0 top-[96px] h-[calc(100%-96px)] w-[496px] flex-col gap-4 bg-white px-4 py-4 shadow-xl md:w-2/3 sm:w-full xs:gap-2 xs:px-1 xs:py-1"
            : "relative mx-auto min-h-[300px] w-full min-w-[460px] flex-col gap-4 bg-white px-3 py-3 shadow-xl md:w-2/3 sm:w-full xs:gap-2 xs:px-1 xs:py-1"
        }`}
      >
        {display === "cart" ? (
          <CartHeader changeCartVisibility={changeCartVisibility} />
        ) : (
          <h3>Tus productos</h3>
        )}
        <CartProductList
          productsInCart={productsInCart}
          incrementProductQty={incrementProductQty}
          decrementProductQty={decrementProductQty}
          removeProduct={removeProduct}
        />
        <CartFooter productsInCart={productsInCart} display={display} />
      </div>
    </>
  )
}

export default Cart
