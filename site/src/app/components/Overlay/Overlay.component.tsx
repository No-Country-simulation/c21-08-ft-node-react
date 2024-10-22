import { OverlayProps } from "./types/OverlayProps.type"

const Overlay = ({ changeVisibility, isVisible /*display*/ }: OverlayProps) => {
  return (
    <div
      onClick={changeVisibility}
      className={`${isVisible ? "block" : "hidden"} fixed left-0 top-[96px] z-20 h-dvh w-dvw cursor-pointer bg-black opacity-30`}
    />
  )
}

export default Overlay
