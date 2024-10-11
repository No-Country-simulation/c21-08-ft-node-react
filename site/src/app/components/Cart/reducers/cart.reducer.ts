import { ProductInCart } from "../types/ProductInCart.type";
import { CartAction } from "../types/CartAction.type";

export const cartReducer = (state: ProductInCart[], action: CartAction) => {
    const { type } = action

    if (type === "ADD_TO_CART") {
        const { product } = action;
        const newState = structuredClone(state);
    
        const existingProduct = newState.find(
          (item: ProductInCart) => item.productID === product.productID
        );
    
        if (existingProduct) {
          return newState.map(item =>
            item.productID === product.productID
              ? { ...item, productQty: item.productQty + 1 }
              : item
          );
        } else {
          const newProductInCart: ProductInCart = { ...product, productQty: 1 };
          return [...newState, newProductInCart];
        }
      }

    if (type === "INCREMENT_QTY") {
        const { id } = action;
        const newState = structuredClone(state);
    
        return newState.map(productInCart =>
          productInCart.productID === id
            ? { ...productInCart, productQty: productInCart.productQty + 1 }
            : productInCart
        );
      }

    if (type === "DECREMENT_QTY") {
        const { id } = action;
        const newState = structuredClone(state);
    
        return newState.map(productInCart =>
          productInCart.productID === id && productInCart.productQty > 1
            ? { ...productInCart, productQty: productInCart.productQty - 1 }
            : productInCart
        );
      }
    
      if (type === "REMOVE_FROM_CART") {
        const { id } = action;
        const newState = structuredClone(state);
    
        return newState.filter(productInCart => productInCart.productID !== id);
      }

      return state
}