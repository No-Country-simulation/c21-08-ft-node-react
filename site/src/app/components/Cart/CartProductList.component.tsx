import { CartProductListProps } from "./types/CartProductListProps.type"
import CartCard from "./CartCard.component"
import style from "./styles/CartProductList.style.module.css"

const CartProductList = ({
  productsInCart,
  incrementProductQty,
  decrementProductQty,
  removeProduct,
}: CartProductListProps) => {
  return (
    <ul
      className={`flex grow scroll-pr-4 flex-col gap-4 overflow-y-auto overflow-x-hidden ${style.cartProductList} px-2 xs:gap-3 xs:px-1`}
    >
      {productsInCart.map((productInCart, i) => (
        <li key={i}>
          <CartCard
            product={productInCart}
            incrementProductQty={incrementProductQty}
            decrementProductQty={decrementProductQty}
            removeProduct={removeProduct}
          />
        </li>
      ))}
    </ul>
  )
}

export default CartProductList
