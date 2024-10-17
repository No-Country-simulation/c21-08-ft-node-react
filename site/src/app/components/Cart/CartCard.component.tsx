"use client"

import { CartCardProps } from "./types/CartCardProps.type"
import Image from "next/image"
import Icon from "../Icon/Icon.component"
import ProductQtyInput from "./ProductQtyInput.component"
import Price from "../Price/Price.component"
import { getProductImageAlt } from "../../utils/getProductImageAlt.util"

const CartCard = ({
  product,
  incrementProductQty,
  decrementProductQty,
  removeProduct,
}: CartCardProps) => {
  return (
    <div className="flex h-[112px] w-[400px] rounded-lg bg-gray100 outline outline-1 outline-gray-200 md:h-auto md:w-full sm:h-auto sm:w-full">
      <div className="w-[112px] overflow-hidden">
        <Image
          className="rounded-l-lg"
          src={"/images/product-placeholder.webp"}
          alt={getProductImageAlt(product.name)}
          width={112}
          height={112}
        />
      </div>
      <div className="flex w-[288px] flex-col justify-between p-4 md:w-full md:p-2 sm:w-full sm:p-2">
        <div className="flex justify-between">
          <h3>{product.name}</h3>
          <button onClick={() => removeProduct(product.productId)}>
            <Icon style="md:scale-75" iconType="trash" />
          </button>
        </div>
        <div className="flex justify-between">
          <Price size="S" price={product.price} />
          <ProductQtyInput
            productID={product.productId}
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

