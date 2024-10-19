"use client"
import { CardProps } from "./types/CardProps.type"

import Price from "../Price/Price.component"
import Icon from "../Icon/Icon.component"
import Image from "next/image"
import useLogicCard from "@/app/hooks/useCardLogic.hook"
import { getProductImageAlt } from "@/app/utils/getProductImageAlt.util"
import Link from "next/link"

const Card = ({ additionalStyles, product, link }: CardProps) => {
  const { finalPrice, discount, isFavorite, handleFavorite, handleAddToCart } =
    useLogicCard(product)

  const { name, price } = product

  return (
    <article
      className={`flex flex-col rounded-lg bg-gray300 ${additionalStyles} max-h-[472px] min-w-0 max-w-64`}
    >
      <Link href={link}>
        <Image
          className="rounded-t-lg"
          src={"/images/product-placeholder.webp"}
          alt={getProductImageAlt(name)}
          width={256}
          height={256}
        />
      </Link>
      <div className="flex flex-col p-4 xs:p-2">
        <div className="flex justify-between">
          <Link href={link}>
            <h3 className="line-clamp-3 min-h-16 max-w-48 text-[20px] font-medium leading-[20px] md:text-[16px] md:leading-[16px]">
              {name}
            </h3>
          </Link>
          <button className="mb-auto" onClick={handleFavorite}>
            <Icon iconType={`${isFavorite ? "heartFilled" : "heart"}`} />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div>
              {discount && (
                <Price
                  price={price}
                  size="S"
                  additionalStyles="line-through text-gray-500"
                />
              )}
              <Price price={finalPrice} size={"M"} />
            </div>
            {discount && (
              <div className="flex h-8 w-16 items-center justify-center rounded-full bg-gray1000 xs:h-6 xs:w-10">
                <span className="text-center text-[16px] font-semibold leading-[16px] text-white md:text-[14px] md:leading-[14px] xs:text-[12px] xs:font-medium xs:leading-[12px]">{`%${50}`}</span>
              </div>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="h-10 w-full rounded-lg bg-gray1000 font-medium text-white xs:h-8 xs:text-[12px] xs:font-normal"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </article>
  )
}

export default Card
