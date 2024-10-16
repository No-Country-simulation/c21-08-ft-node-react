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
      className={`${styleSlider} flex ${widthStyle} flex-col items-center justify-between border border-black bg-gray200 sm:max-w-[480px] sm:flex-row sm:items-center`}
    >
      <div className="flex items-center justify-center sm:w-1/2">
        <Image
          className="sm:min-w-[120px]"
          src={"/images/product-placeholder.webp"}
          alt={`imagen de ${name}`}
          width={480}
          height={480}
        />
      </div>
      <div className="flex h-[180px] flex-col items-center justify-between px-2 sm:h-full sm:justify-between sm:py-5">
        <div className="my-2 flex h-[54px] w-[200px] items-center justify-between sm:my-0">
          <h3 className="line-clamp-2 text-lg font-bold">{name}</h3>
          {!favorite ? (
            <button onClick={handleFavorite}>
              <Icon iconType={"heart"}></Icon>
            </button>
          ) : (
            <button onClick={handleFavorite}>
              <Icon iconType={"heartFilled"}></Icon>
            </button>
          )}
        </div>
        <h4 className="me-auto">{category.categoryName}</h4>
        {!discountedPrice ? (
          <div className="mx-1 mb-2 mt-auto flex h-[32px] w-full justify-start text-base font-bold">
            <Price price={price} size={"S"}></Price>
          </div>
        ) : (
          <div className="mb-3 mt-auto flex h-[32px] w-full justify-between">
            <div className="flex-col items-center">
              <div className="text-xs line-through">${price}</div>
              <div className="text-base font-bold">
                <Price price={discountedPrice} size={"S"}></Price>
              </div>
            </div>
            <div className="me-2 flex items-center">{`%${discount}`}</div>
          </div>
        )}
        <button
          onClick={handleAddToCart}
          className="mx-auto w-full rounded-full bg-gray1000 px-2 py-1 font-bold text-white"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default Card
