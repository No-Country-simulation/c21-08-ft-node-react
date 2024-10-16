"use client"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { useContext, useEffect } from "react"
import Card from "../Card/Card.component"
import { IsClient } from "@/app/contexts/isClient.context"
import { Promotion } from "@/app/types/Product.type"
import useFetch from "@/app/hooks/useFetch.hook"
import { sortPromotions } from "@/app/utils/functions.utils"

const DiscountContainer = () => {
  const isClientCtx = useContext(IsClient)

  const promotions =
    useFetch<Promotion[]>("http://localhost:3170/promotion") || []
  const discountedProducts = sortPromotions(promotions)

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4.2,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 920px)": {
        slides: {
          perView: 3.2,
          spacing: 5,
        },
      },
      "(max-width: 760px)": {
        slides: {
          perView: 2.3,
          spacing: 5,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1.4,
          spacing: 10,
        },
      },
      "(max-width: 500px)": {
        slides: {
          perView: 1.1,
          spacing: 10,
        },
      },
      "(max-width: 420px)": {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
    },
  })
  useEffect(() => {
    if (discountedProducts.length > 0) {
      instanceRef.current?.update()
    }
  }, [discountedProducts, instanceRef])

  return isClientCtx ? (
    <div ref={ref} className="keen-slider mx-auto max-w-[1000px] sm:w-[600px]">
      {discountedProducts.map((product, index) => (
        <div
          className="keen-slider__slide m-0 flex w-[240px] justify-center p-0"
          key={index}
        >
          <Card product={product} width={"fixed"}></Card>
        </div>
      ))}
    </div>
  ) : (
    ""
  )
}

export default DiscountContainer
