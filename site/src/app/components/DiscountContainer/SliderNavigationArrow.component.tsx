import { SliderNavigationArrowProps } from "./types/SliderNavigationArrowProps.type"
import Icon from "../Icon/Icon.component"

const SliderNavigationArrow = ({
  isDisabled,
  type,
  onClick,
}: SliderNavigationArrowProps) => {
  const iconTypeStyle = type === "right" ? "" : "rotate-180"

  return (
    <div
      className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray400 ${isDisabled ? "opacity-0" : ""}`}
      onClick={(e: any) => {
        if (isDisabled) return

        onClick(e)
      }}
    >
      <Icon iconType="rightArrow" style={`${iconTypeStyle}`} />
    </div>
  )
}

export default SliderNavigationArrow
