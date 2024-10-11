import { ProductInCart } from "../components/Cart/types/ProductInCart.type";
import { CartAction } from "../components/Cart/types/CartAction.type";
import { updateCartLS } from '../utils/updateCartLS.util';

export const cartReducer = (state: ProductInCart[], action: CartAction) => {
    const { type } = action

    if (type === "ADD_TO_CART") {
        const { product } = action;
        const stateCopy = structuredClone(state);
    
        const existingProduct = stateCopy.find(
          (item: ProductInCart) => item.productID === product.productID
        );
    
        if (existingProduct) {
          const newState = stateCopy.map(item =>
            item.productID === product.productID
              ? { ...item, productQty: item.productQty + 1 }
              : item
          );
          updateCartLS(newState)
          return newState
        } else {
          const newProductInCart: ProductInCart = { ...product, productQty: 1 };
          const newState = [...stateCopy, newProductInCart]
          updateCartLS(newState)
          return newState
        }
      }

    if (type === "INCREMENT_QTY") {
        const { id } = action;
        const stateCopy = structuredClone(state);
        const newState = stateCopy.map(productInCart =>
          productInCart.productID === id
            ? { ...productInCart, productQty: productInCart.productQty + 1 }
            : productInCart
        );
        updateCartLS(newState)
        return newState
      }

    if (type === "DECREMENT_QTY") {
        const { id } = action;
        const stateCopy = structuredClone(state);
        const newState = stateCopy.map(productInCart =>
          productInCart.productID === id && productInCart.productQty > 1
            ? { ...productInCart, productQty: productInCart.productQty - 1 }
            : productInCart
        );
        updateCartLS(newState)
        return newState
      }
    
      if (type === "REMOVE_FROM_CART") {
        const { id } = action;
        const stateCopy = structuredClone(state);
        const newState = stateCopy.filter(productInCart => productInCart.productID !== id);
        updateCartLS(newState)
        return newState
      }

      return state
}