'use client'

import { useState } from "react"
import Icon from "../Icon/Icon.component"
import CartCard from "./CartCard.component"
import { CartProps } from './types/CartProps.type'
import { getCartTotal } from "./utils/getCartTotal.util"

const Cart = ({products}: CartProps) => {

    const [isCartVisible, setIsCartVisible] = useState(false)
    console.log('is client rendering..');

    const changeCartVisibility = () => {
    console.log('clicked');
    setIsCartVisible(prevIsCartVisible => !prevIsCartVisible) 
  }

    return (
        <div id="carrito-btn">
            <button className="flex justify-end gap-2" onClick={() => changeCartVisibility()}><Icon iconType="cartSmall"/><span>3</span></button>
            <div className={`${isCartVisible ? 'flex' : 'hidden'} flex-col h-[calc(100vh-89.7px)] justify-between fixed right-0 top-[89.7px] bg-white px-8 py-4 shadow-xl`}>
                <div className="flex flex-col gap-8">
                    <div className="flex cursor-pointer" onClick={changeCartVisibility}>
                        <h2>Tu carrito</h2>
                        <button >
                            <Icon iconType="rightArrow" />
                        </button>
                    </div>
                    <ul className="flex flex-col gap-4">
                    {products.map((product, i) => 
                        (<li key={i}>
                            <CartCard 
                                name={product.name} 
                                price={product.price} 
                                imgUrl={product.imgUrl} 
                            />
                        </li>))}
                    </ul>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex justify-between"><h2>Total</h2> <p>${getCartTotal(products)}</p> </div>
                    <button className="w-full bg-gray1000 h-12 rounded-lg mb-0 text-white">Ir a la caja</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
