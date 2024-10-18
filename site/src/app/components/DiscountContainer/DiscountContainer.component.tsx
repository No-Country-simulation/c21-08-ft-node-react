"use client"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { useEffect, useState } from "react"
import Card from "../Card/Card.component"
import { Promotion } from "@/app/types/Product.type"
import useFetch from "@/app/hooks/useFetch.hook"
import { sortPromotions } from "@/app/utils/functions.utils"
import SliderNavigationArrow from "./SliderNavigationArrow.component"

const DiscountContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const promotions =
    useFetch<Promotion[]>("http://localhost:3170/promotion") || []
  const discountedProducts = sortPromotions(promotions)

  const [silderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
    slides: {
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 864px)": {
        slides: {
          perView: 3,
          spacing: 8,
        },
      },
      "(max-width: 584px)": {
        slides: {
          perView: 2,
          spacing: 8,
        },
      },
      "(max-width: 336px)": {
        slides: {
          perView: 2,
          spacing: 4,
        },
      },
    },
  })

  useEffect(() => {
    if (instanceRef.current === null) return

    if (discountedProducts.length === 0) return

    setIsLoaded(true)

    instanceRef.current.update()
  }, [discountedProducts, instanceRef])

  const discointedProductsElements = discountedProducts.map((product, i) => (
    <Card
      key={i}
      additionalStyles="keen-slider__slide"
      product={product}
    />
  ))

  return (
    <div className="relative flex items-center gap-2">
      {isLoaded && instanceRef.current && discointedProductsElements.length > 0 && (
        <SliderNavigationArrow
          type="left"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
          isDisabled={currentSlide === 0}
        />
      )}
      <div ref={silderRef} className="keen-slider">
        {discointedProductsElements.length > 0 ? (
          discointedProductsElements
        ) : (
          <h1>No hay descuentos</h1>
        )}
      </div>
      {isLoaded && instanceRef.current && discointedProductsElements.length > 0 && (
        <SliderNavigationArrow
          type="right"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
          isDisabled={
            currentSlide + instanceRef.current.track.details.maxIdx ===
            discountedProducts.length
          }
        />
      )}
    </div>
  )
}

export default DiscountContainer
