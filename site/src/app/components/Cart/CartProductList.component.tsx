import { CartProductListProps } from "./types/CartProductListProps.type"
import CartCard from "./CartCard.component"
import style from './styles/CartProductList.style.module.css'

const CartProductList = ({productsInCart, incrementProductQty, decrementProductQty, removeProduct}: CartProductListProps) => {

    return (
        <ul className={`flex flex-col grow gap-4 min-h-[368px] overflow-x-hidden overflow-y-auto scroll-pr-4 ${style.cartProductList} sm:gap-3 md:gap-4`}>
        {productsInCart.map((productInCart, i) => 
            (<li key={i}>
                <CartCard 
                    product={productInCart}
                    incrementProductQty={incrementProductQty}
                    decrementProductQty={decrementProductQty}
                    removeProduct={removeProduct}
                />
            </li>))}
        </ul>
    )
}

export default CartProductList