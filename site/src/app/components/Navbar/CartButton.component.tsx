import { useContext } from 'react'
import { CartContext } from '@/app/contexts/cart.context'
import Icon from '../Icon/Icon.component'
import { CartButtonProps } from './types/CartButtonProps.type'
import { getTotalProductsInCart } from './utils/getTotalProductsInCart.util'

const CartButton = ({ changeCartVisibility }: CartButtonProps) => {
  const { productsInCart } = useContext(CartContext)

  return (
    <button className='flex justify-end gap-2' onClick={changeCartVisibility}>
      <Icon iconType='cartSmall' />
      <span>{getTotalProductsInCart(productsInCart)}</span>
    </button>
  )
}

export default CartButton
