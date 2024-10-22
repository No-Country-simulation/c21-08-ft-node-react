"use client"
import { CardProps } from "./types/CardProps.type"

import Price from "../Price/Price.component"
import Icon from "../Icon/Icon.component"
import Image from "next/image"
import useCardLogic from "@/app/components/Card/hooks/useCardLogic.hook"
import { getProductImageAlt } from "@/app/utils/getProductImageAlt.util"
import Link from "next/link"
import AddButton from "../AddButton/AddButton.component"

const Card = ({ additionalStyles, product, link }: CardProps) => {
  const { finalPrice, discount, isFavorite, handleFavorite } =
    useCardLogic(product)

  const { name, price } = product

  return (
    <article
      className={`flex flex-col rounded-lg bg-gray300 ${additionalStyles} min-h-[424px] md:min-h-[376px] xs:min-h-[192px]`}
    >
      <Link href={link}>
        <div className="relative h-[240px] w-full md:h-[192px] xs:h-[96px]">
          <Image
            className="w-full rounded-t-lg object-cover"
            src={"/images/product-placeholder.webp"}
            alt={getProductImageAlt(name)}
            fill
          />
        </div>
      </Link>
      <div className="flex grow flex-col justify-between p-4 xs:p-2">
        <div className="flex justify-between">
          <Link href={link}>
            <h3 className="line-clamp-3 min-h-16 max-w-48 text-[20px] font-medium leading-[20px] xs:min-h-[42px] xs:text-[14px] xs:leading-[14px]">
              {name}
            </h3>
          </Link>
          <button className="mb-auto" onClick={handleFavorite}>
            <Icon
              style="scale-75"
              iconType={`${isFavorite ? "heartFilled" : "heart"}`}
            />
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
                <span className="text-center text-[16px] font-semibold leading-[16px] text-white xs:text-[12px] xs:font-medium xs:leading-[12px]">{`%${50}`}</span>
              </div>
            )}
          </div>
          <AddButton product={product} />
        </div>
      </div>
    </article>
  )
}

export default Card
