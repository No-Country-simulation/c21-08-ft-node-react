import { useContext } from 'react'
import { CartContext } from '@/app/contexts/cart.context'
import Icon from '../Icon/Icon.component'
import { CartButtonProps } from '../Cart/types/CartButtonProps.type'

const CartButton = ({ changeCartVisibility }: CartButtonProps) => {
  const { productsInCart } = useContext(CartContext)

  return (
    <button className='flex justify-end gap-2' onClick={changeCartVisibility}>
      <Icon iconType='cartSmall' />
      <span>{productsInCart.length}</span>
    </button>
  )
}

export default CartButton
