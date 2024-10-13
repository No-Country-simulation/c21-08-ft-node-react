import Price from "../Price/Price.component"
import { getCartTotal } from "./utils/getCartTotal.util"
import { CartFooterProps } from "./types/CartFooterProps.type"

const CartFooter = ({productsInCart}: CartFooterProps) => {

    return (
        <div className="flex flex-col gap-8">
            <div className="flex justify-between">
                <h2 className="text-[32px]">Total</h2>
                <Price size="L" price={getCartTotal(productsInCart)}/>
            </div>
            <button className="w-full bg-gray1000 h-12 rounded-lg mb-0 text-white text-2xl">Ir a la caja</button>
        </div>
    )
}

export default CartFooter