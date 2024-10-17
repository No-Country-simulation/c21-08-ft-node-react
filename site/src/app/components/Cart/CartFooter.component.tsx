import Price from "../Price/Price.component"
import { getCartTotal } from "./utils/getCartTotal.util"
import { CartFooterProps } from "./types/CartFooterProps.type"

const CartFooter = ({ productsInCart }: CartFooterProps) => {
  return (
    <div className="flex flex-col gap-4 xs:gap-2">
      <div className="flex justify-between">
        <h2 className="text-[32px] font-semibold leading-[32px]">Total</h2>
        <Price size="L" price={getCartTotal(productsInCart)} />
      </div>
      <button className="mb-0 h-12 w-full rounded-lg bg-gray1000 text-2xl text-white">
        Ir a la caja
      </button>
    </div>
  )
}

export default CartFooter
