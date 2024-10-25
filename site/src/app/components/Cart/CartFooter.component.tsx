import Price from "../Price/Price.component"
import { getCartTotal } from "./utils/getCartTotal.util"
import { CartFooterProps } from "./types/CartFooterProps.type"

import Link from "next/link"

const CartFooter = ({ productsInCart, display }: CartFooterProps) => {
  return (
    <div className="flex flex-col gap-4 xs:gap-2">
      <div className="flex justify-between">
        <h2 className="text-[32px] font-semibold leading-[32px]">Total</h2>
        <Price size="L" price={getCartTotal(productsInCart)} />
      </div>
      {display === "checkout" ? (
        <button
          form="checkoutForm"
          type="submit"
          className="mb-0 h-12 w-full rounded-lg bg-gray1000 text-2xl text-white"
        >
          Realizar pago
        </button>
      ) : (
        <Link href={"/finalizar-compra"}>
          <button
            disabled={productsInCart.length === 0}
            className="mb-0 h-12 w-full rounded-lg bg-gray1000 text-2xl text-white disabled:bg-gray400"
          >
            Ir a la caja
          </button>
        </Link>
      )}
    </div>
  )
}

export default CartFooter

/*      {display === "checkout" ? (
        <button
          form="checkoutForm"
          type="submit"
          className="mb-0 h-12 w-full rounded-lg bg-gray1000 text-2xl text-white"
        >
          Realizar pago
        </button>
      ) : display === "cart" && !user ? (
        <Link href={"/auth/login"}>
          <button className="mb-0 h-12 w-full rounded-lg bg-gray1000 text-2xl text-white">
            Ir al login
          </button>
        </Link>
      ) : (
        <Link href={"/finalizar-compra"}>
          <button className="mb-0 h-12 w-full rounded-lg bg-gray1000 text-2xl text-white">
            Ir a la caja
          </button>
        </Link>
      )}*/
