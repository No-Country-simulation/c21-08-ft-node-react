import { ProductInCart } from "../components/Cart/types/ProductInCart.type"

export const updateCartLS = (cartState: ProductInCart[]) => {
    window.localStorage.setItem('cart', JSON.stringify(cartState))
}