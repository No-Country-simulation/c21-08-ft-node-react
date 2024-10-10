"use client"

import { useState } from "react"
import { CartCardProps } from './types/CartCardProps.type'
import Image from "next/image"
import Icon from "../Icon/Icon.component"

const CartCard = ({name, imgUrl, price}: CartCardProps) => {

    const [itemQty, setItemQty] = useState(0)
    
    return (
    <div className="flex bg-gray100 w-[400px] h-[112px] rounded-lg border border-gray300">
        <div className="w-[112px] overflow-hidden">
            <Image 
                className="rounded-lg"
                src={imgUrl} 
                alt={name}
                width={112}
                height={112}
            />
        </div>
        <div className="flex flex-col justify-between w-[288px] p-4">
            <div className="flex justify-between">
                <h3>{name}</h3>
                <button><Icon iconType="trash"/></button>
            </div>
            <div className="flex justify-between">
                <p>{price}</p>
                <div className="flex">
                    <button onClick={() => setItemQty(prevItemQty => --prevItemQty)}><Icon iconType="minus"/></button>
                    <p>{itemQty}</p>
                    <button onClick={() => setItemQty(prevItemQty => ++prevItemQty)}><Icon iconType="plus"/></button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CartCard