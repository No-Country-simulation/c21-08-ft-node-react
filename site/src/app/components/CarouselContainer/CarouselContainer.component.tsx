"use client"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"
import SliderNavigationArrow from "./SliderNavigationArrow.component"
import { CarouselContainerProps } from "./types/CarouselContainerProps.type"
import { useContext } from "react"
import { IsClient } from "@/app/contexts/isClient.context"

const CarouselContainer = ({ children }: CarouselContainerProps) => {
  const isClient = useContext(IsClient)
  const [isLoaded, setIsLoaded] = useState(false)

  const [silderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    created: () => setIsLoaded(true),
    loop: true,
    slides: {
      perView: 4,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 920px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
      "(max-width: 584px)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      "(max-width: 336px)": {
        slides: {
          perView: 2,
          spacing: 8,
        },
      },
    },
  })

  return (
    <div className="relative flex items-center gap-2">
      {isLoaded && instanceRef.current && (
        <SliderNavigationArrow
          type="left"
          onClick={() => {
            if (instanceRef.current === null) return

            instanceRef.current.prev()
          }}
          isDisabled={false}
        />
      )}

      {isClient && (
        <div ref={silderRef} className="keen-slider">
          {children}
        </div>
      )}

      {isLoaded && instanceRef.current && (
        <SliderNavigationArrow
          type="right"
          onClick={() => {
            if (instanceRef.current === null) return

            instanceRef.current.next()
          }}
          isDisabled={false}
        />
      )}
    </div>
  )
}

export default CarouselContainer
