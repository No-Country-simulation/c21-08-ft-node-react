'use client'

import { CartContextProvider } from "@/app/contexts/cart.context"
import Cart from "./Cart.component"

const CartWithContext = () => {
    return (
        <CartContextProvider>
            <Cart />
        </CartContextProvider>
    )
}

export default CartWithContext