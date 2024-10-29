"use client"

import useCardLogic from "@/app/components/Card/hooks/useCardLogic.hook"
import { Product } from "@/app/types/Product.type"
import Icon from "../Icon/Icon.component"
import { useAuth } from "@/app/contexts/auth.context"

type AddButtonProps = {
  product: Product
  withIcon?: boolean
}

const AddButton = ({ product, withIcon }: AddButtonProps) => {
  const { handleAddToCart } = useCardLogic(product)
  const { isOwner } = useAuth()
  return (
    <button
      className={`flex h-10 items-center gap-2 rounded-md bg-krOrange px-3 py-1 font-bold text-white md:text-[14px] md:font-semibold md:leading-[14px] xs:h-8 xs:text-[12px] xs:leading-[12px] ${withIcon ? "justify-start" : "justify-center"}`}
      onClick={handleAddToCart}
      disabled={isOwner}
    >
      <span>Añadir al carrito</span>
      {withIcon && <Icon iconType="plus" />}
    </button>
  )
}

export default AddButton
