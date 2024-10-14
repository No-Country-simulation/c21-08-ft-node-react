import { OverlayProps } from "./types/OverlayProps.type"

const Overlay = ({ changeVisibility }: OverlayProps) => {
  return (
    <div
      onClick={changeVisibility}
      className='fixed left-0 top-[96px] z-[-1000] h-dvh w-dvw cursor-pointer bg-black opacity-30'
    />
  )
}

export default Overlay
