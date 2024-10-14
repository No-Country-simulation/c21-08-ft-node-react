import { CartHeaderProps } from "./types/CartHeaderProps.type"
import Icon from "../Icon/Icon.component"

const CartHeader = ({ changeCartVisibility }: CartHeaderProps) => {
    return (
        <div className="flex gap-2">
            <h2 className="text-2xl">Tu carrito</h2>
            <button className="cursor-pointer" onClick={changeCartVisibility}><Icon iconType="rightArrow" /></button>
        </div>
    )
}

export default CartHeader