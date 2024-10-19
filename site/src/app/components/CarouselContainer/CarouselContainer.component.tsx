"use client"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { useEffect, useState } from "react"
import SliderNavigationArrow from "./SliderNavigationArrow.component"
import { DiscountContainerProps } from "./types/CarouselContainerProps.type"
import { useContext } from "react"
import { IsClient } from "@/app/contexts/isClient.context"

const CarouselContainer = ({ children }: DiscountContainerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const isClient = useContext(IsClient)

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
    instanceRef.current.update()
  }, [instanceRef])

  return (
    <div className="relative flex items-center gap-2">
      <div className="hover:bg-dark1000 pointer-events-none absolute z-40 flex h-full w-full items-center justify-between">
        <SliderNavigationArrow
          type="left"
          onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
          isDisabled={currentSlide === 0}
        />
        <SliderNavigationArrow
          type="right"
          onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
          isDisabled={
            instanceRef.current
              ? currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              : true
          }
        />
      </div>

      {isClient ? (
        <div ref={silderRef} className="keen-slider">
          {children}
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default CarouselContainer
