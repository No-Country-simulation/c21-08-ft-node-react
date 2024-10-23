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
    <div className="flex h-auto w-full rounded-[20px] bg-white outline outline-1 outline-gray-200 xs:h-28 xs:rounded-l-[12px]">
      <Image
        className="rounded-l-[20px] xs:rounded-l-[12px]"
        src={product.imgUrl}
        alt={getProductImageAlt(product.name)}
        width={128}
        height={128}
      />
      <div className="flex w-full flex-col justify-between p-3 xs:p-2">
        <div className="flex w-full justify-between">
          <h3 className="h-16 max-w-48 text-[20px] leading-[20px] xs:line-clamp-3 xs:h-12 xs:text-[16px] xs:leading-[16px]">
            {product.name}
          </h3>
          <button
            className="mb-auto"
            onClick={() => removeProduct(product.productId)}
          >
            <Icon style="xs:scale-75" iconType="trash" />
          </button>
        </div>
        <div className="flex w-full items-end justify-between">
          <div>
            {true && (
              <Price
                price={product.price}
                size="S"
                additionalStyles="line-through text-gray-500"
              />
            )}
            <Price size="M" price={product.price} />
          </div>
          <ProductQtyInput
            productId={product.productId}
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
