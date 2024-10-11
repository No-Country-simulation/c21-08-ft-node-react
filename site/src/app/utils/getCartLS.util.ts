import { ProductInCart } from "../components/Cart/types/ProductInCart.type"
import { productsInCart as productsInCartMock } from "../components/Cart/mocks/ProductsInCart.mock"

export const getCartLS = (): ProductInCart[] => {
    const localStorageLecture = window.localStorage.getItem('cart')

    const productsInCart: ProductInCart[] = localStorageLecture ? JSON.parse(localStorageLecture) : productsInCartMock

    return productsInCart
}