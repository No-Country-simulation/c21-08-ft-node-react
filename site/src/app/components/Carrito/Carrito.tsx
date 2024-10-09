'use client'

import { useState } from "react"
import Icon from "../icon/Icon"
import ItemCarrito from "./ItemCarrito"
import { CarritoProps } from './types/CarritoProps'
import { getCartTotal } from "./utils/getCartTotal"

const Carrito = ({products}: CarritoProps) => {

    const [isCartVisible, setIsCartVisible] = useState(false)

    const changeCartVisibility = () => setIsCartVisible(prevIsCartVisible => !prevIsCartVisible)

    return (
        <>
        <button className="flex justify-end" onClick={() => changeCartVisibility()}><Icon iconType="cartSmall"/></button>
        <div className={`${isCartVisible ? 'flex' : 'hidden'} flex-col h-[calc(100vh-73.6px)] justify-between fixed right-0 top-[73.6px] bg-white px-8 py-4`}>
            <div className="flex flex-col gap-8">
                <div className="flex">
                    <h2>Tu carrito</h2>
                    <button onClick={changeCartVisibility}><Icon iconType="rightArrow" /></button>
                </div>
                <ul className="flex flex-col gap-4">
                {products.map((product, i) => 
                    (<li key={i}>
                        <ItemCarrito 
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
        </>
    )
}

export default Carrito