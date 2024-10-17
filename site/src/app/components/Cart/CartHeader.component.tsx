import { CartHeaderProps } from "./types/CartHeaderProps.type"
import Icon from "../Icon/Icon.component"

const CartHeader = ({ changeCartVisibility }: CartHeaderProps) => {
    return (
        <div className="flex gap-2">
            <button className="cursor-pointer" onClick={changeCartVisibility}><Icon style="rotate-45 scale-[2]" iconType="plus" /></button>
        </div>
    )
}

export default CartHeader