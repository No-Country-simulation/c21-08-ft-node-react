import { useReducer } from "react"
import { cartReducer } from "../reducers/cartReducer.reducer"
import { Product } from '../types/Product.type'
import { getCartLS } from "@/app/utils/getCartLS.util"

export const cartInitialState = getCartLS()
  
export const useCartReducer = () => {

    const [productsInCart, dispatch] = useReducer(cartReducer, cartInitialState)


    const addToCart = (product: Product) => {
        dispatch({type: "ADD_TO_CART", product})
    }

    const incrementProductQty = (id: string) => {
        dispatch({type: "INCREMENT_QTY", id})
    }

    const decrementProductQty = (id: string) => {
        dispatch({type: "DECREMENT_QTY", id})
    }

    const removeProduct = (id: string) => {
        dispatch({type: "REMOVE_FROM_CART", id})
    }

    return { productsInCart, addToCart, incrementProductQty, decrementProductQty, removeProduct}
}