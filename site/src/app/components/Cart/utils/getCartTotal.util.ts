import { ProductInCart } from "../types/ProductInCart.type"

export const getCartTotal = (productsInCart: ProductInCart[]) => {
    let total = 0
    for (const product of productsInCart) {
        total += product.price * product.productQty
    }
    return Number(total.toFixed(2))
}