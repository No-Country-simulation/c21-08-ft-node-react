import { SliderNavigationArrowProps } from "./types/SliderNavigationArrowProps.type"
import Icon from "../Icon/Icon.component"

const SliderNavigationArrow = ({
  isDisabled,
  type,
  onClick,
}: SliderNavigationArrowProps) => {
  const iconTypeStyle = type === "right" ? "" : "rotate-180"
  const positionTypeStyle = type === "right" ? "right-0" : "left-0"

  return (
    <div
      className={`${isDisabled ? "hidden" : "flex"} h-8 absolute z-10 w-8 cursor-pointer items-center justify-center rounded-full bg-gray400 ${positionTypeStyle} xs:scale-75 xs:top-8`}
      onClick={() => {
        if (isDisabled) return
        onClick()
      }}
    >
      <Icon iconType="rightArrow" style={`${iconTypeStyle}`} />
    </div>
  )
}

export default SliderNavigationArrow
