import Image from "next/image"

type KramyBtnProps = {
  clickFn: () => void
}

const KramyBtn = ({ clickFn }: KramyBtnProps) => {
  return (
    <div className="pointer-events-none fixed bottom-0 right-0 z-40 w-full">
      <div className="pointer-events-none m-auto flex max-w-[1000px] justify-end">
        <button className="pointer-events-auto mb-20" onClick={clickFn}>
          <Image
            src="/images/kramy/kramy-button_transparent_small-size_effects.png"
            alt="botón de asistenta virtual Kramy"
            width={223}
            height={236}
            className="h-28 w-full"
          />
        </button>
      </div>
    </div>
  )
}

export default KramyBtn
