import Icon from "../Icon/Icon.component"
import { ProductQtyInputProps } from "./types/ProductQtyInputProps.type"

const ProductQtyInput  = ({productID, productQty, incrementProductQty, decrementProductQty}: ProductQtyInputProps) => {

    return (
        <div className="flex gap-1 rounded-lg outline outline-1 outline-gray300">
            { productQty !== 1 && 
            <button
                onClick={() => decrementProductQty(productID)}
                disabled={productQty === 1}
                className="flex items-center justify-center w-8 h-8 rounded-l-[4px] border-r border-gray300 hover:bg-gray300">
                <Icon iconType="minus"/>
            </button> }
            <p className="w-6 text-center text-[20px]">{productQty}</p>
            <button 
                onClick={() => incrementProductQty(productID)}
                className="flex items-center justify-center w-8 h-8 rounded-r-[4px] border-l border-gray300 hover:bg-gray300">
                <Icon iconType="plus"/>
            </button>
        </div>
    )
}

export default ProductQtyInput