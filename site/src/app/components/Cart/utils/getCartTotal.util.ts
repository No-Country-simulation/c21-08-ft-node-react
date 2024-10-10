import { Product } from "../../../types/Product.type"

export const getCartTotal = (products: Product[]) => {
    let total = 0
    for (const product of products) {
        total += product.price
    }
    return total
}