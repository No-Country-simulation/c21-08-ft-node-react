import { CartHeaderProps } from "./types/CartHeaderProps.type"
import Icon from "../Icon/Icon.component"

const CartHeader = ({ changeCartVisibility }: CartHeaderProps) => {
    return (
        <div className="flex cursor-pointer gap-2">
            <h2 className="text-2xl">Tu carrito</h2>
            <button onClick={changeCartVisibility}><Icon iconType="rightArrow" /></button>
        </div>
    )
}

export default CartHeader