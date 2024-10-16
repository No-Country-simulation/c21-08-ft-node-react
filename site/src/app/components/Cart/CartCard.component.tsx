"use client"

import { CartCardProps } from './types/CartCardProps.type'
import Image from "next/image"
import Icon from "../Icon/Icon.component"
import ProductQtyInput from "./ProductQtyInput.component"
import Price from '../Price/Price.component'
import { getProductImageAlt } from '../../utils/getProductImageAlt.util'

const CartCard = ({product, incrementProductQty, decrementProductQty, removeProduct}: CartCardProps) => {
    
    return (
    <div className="flex bg-gray100 w-[400px] h-[112px] rounded-lg outline outline-1 outline-gray-200 sm:w-full sm:h-auto md:w-full md:h-auto">
        <div className="w-[112px] overflow-hidden">
            <Image 
                className="rounded-l-lg"
                src={product.imgUrl} 
                alt={getProductImageAlt(product.name)}
                width={112}
                height={112}
            />
        </div>
        <div className="flex flex-col justify-between w-[288px] p-4 sm:p-2 sm:w-full md:p-2 md:w-full">
            <div className="flex justify-between">
                <h3>{product.name}</h3>
                <button onClick={() => removeProduct(product.productID)}><Icon style='md:scale-75' iconType="trash"/></button>
            </div>
            <div className="flex justify-between">
                <Price size='S' price={product.price}/>
                <ProductQtyInput
                    productID={product.productID}
                    productQty={product.productQty} 
                    incrementProductQty={incrementProductQty} 
                    decrementProductQty={decrementProductQty} 
                />
            </div>
        </div>
    </div>
    )
}

export default CartCard