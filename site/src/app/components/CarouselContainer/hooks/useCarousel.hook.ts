import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"

export const useCarousel = () => {
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

  const next = () => {
    if (instanceRef.current === null) return

    instanceRef.current.next()
  }

  const prev = () => {
    if (instanceRef.current === null) return

    instanceRef.current.prev()
  }

  return { silderRef, isLoaded, next, prev }
}
