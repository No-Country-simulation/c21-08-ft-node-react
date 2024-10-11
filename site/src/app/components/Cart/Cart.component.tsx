'use client'

import { useContext, useState } from "react"
import Icon from "../Icon/Icon.component"
import CartHeader from "./CartHeader.component"
import CartFooter from "./CartFooter.component"
import CartProductList from "./CartProductList.component"
import { CartContext } from "@/app/contexts/cart.context"

const Cart = () => {
    const {productsInCart, incrementProductQty,decrementProductQty, removeProduct} = useContext(CartContext)
    const [isCartVisible, setIsCartVisible] = useState(false)

    const changeCartVisibility = () => {
        setIsCartVisible(prevIsCartVisible => !prevIsCartVisible) 
    }

    return (
        <div id="carrito-btn">
            <button className="flex justify-end gap-2" onClick={changeCartVisibility}><Icon iconType="cartSmall"/><span>{productsInCart.length}</span></button>
            <div className={`${isCartVisible ? 'flex' : 'hidden'} flex-col h-[calc(100vh-89.7px)] justify-between fixed right-0 top-[89.7px] bg-white px-8 py-4 shadow-xl w-[480px]`}>
                <div className="flex flex-col gap-8">
                    <CartHeader changeCartVisibility={changeCartVisibility} />
                    <CartProductList 
                        productsInCart={productsInCart} 
                        incrementProductQty={incrementProductQty} 
                        decrementProductQty={decrementProductQty} 
                        removeProduct={removeProduct} 
                    />
                </div>
                <CartFooter productsInCart={productsInCart} />    
            </div>
        </div>
    )
}

export default Cart
