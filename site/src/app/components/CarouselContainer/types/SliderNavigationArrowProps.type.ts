import { MouseEvent } from "react"

export type SliderNavigationArrowProps = {
  isDisabled: boolean
  type: "left" | "right"
  onClick: (e: MouseEvent<HTMLDivElement>) => void
}
