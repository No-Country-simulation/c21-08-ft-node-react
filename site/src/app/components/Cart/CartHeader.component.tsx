import { CartHeaderProps } from "./types/CartHeaderProps.type"
import Icon from "../Icon/Icon.component"

const CartHeader = ({ changeCartVisibility }: CartHeaderProps) => {
  return (
    <div>
      <button className="cursor-pointer" onClick={changeCartVisibility}>
        <Icon style="rotate-45 scale-[2] text-gray1000" iconType="plus" />
      </button>
    </div>
  )
}

export default CartHeader
