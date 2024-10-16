"use client"
import { CardProps } from "./types/CardProps.type"

import Price from "../Price/Price.component"
import Icon from "../Icon/Icon.component"
import Image from "next/image"
import useLogicCard from "@/app/hooks/useLogicCard.hook"

const Card = ({ styleSlider, product, width }: CardProps) => {
  const {
    favorite,
    handleFavorite,
    handleAddToCart,
    discount,
    discountedPrice,
  } = useLogicCard(product)

  const { name, price, category } = product
  let widthStyle = ""
  if (width === "fluid") {
    widthStyle = "w-full"
  } else {
    widthStyle = "max-w-[220px] max-h-[440px]"
  }

  return (
    <div
      className={`${styleSlider} flex rounded-lg ${widthStyle} flex-col bg-gray300 sm:max-w-[480px] sm:flex-row sm:items-center`}
    >
      <div className="sm:w-1/2">
        <Image
          className="rounded-t-lg sm:min-w-[120px]"
          src={"/images/product-placeholder.webp"}
          alt={`imagen de ${name}`}
          width={480}
          height={480}
        />
      </div>
      <div className="flex h-[180px] flex-col justify-between p-4 sm:h-full sm:justify-between sm:py-5">
        <div className="flex">
          <h3 className="line-clamp-2 text-lg font-bold leading-5">{name}</h3>
          <button className="ml-auto flex" onClick={handleFavorite}>
            <Icon iconType={`${favorite ? "heartFilled" : "heart"}`}></Icon>
          </button>
        </div>
        <h4>{category.categoryName}</h4>
        {!discountedPrice ? (
          <div className="flex h-[32px] w-full justify-start text-base font-bold">
            <Price price={price} size={"S"}></Price>
          </div>
        ) : (
          <div className="flex h-[32px] w-full justify-between">
            <div className="flex-col items-center">
              <div className="text-xs line-through">${price}</div>
              <div className="text-base font-bold">
                <Price price={discountedPrice} size={"S"}></Price>
              </div>
            </div>
            <div className="flex items-center">{`%${discount}`}</div>
          </div>
        )}
        <button
          onClick={handleAddToCart}
          className="mx-auto h-10 w-full rounded-lg bg-gray1000 font-bold text-white"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default Card
