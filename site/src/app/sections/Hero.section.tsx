import Image from "next/image"

const Hero = () => {
  return (
    <section className="hero h-[560px] w-full overflow-hidden md:h-[320px] xs:h-[192px]">
      <Image
        src="/images/hero-final1.png"
        alt="promocion-1"
        width={1080}
        height={1350}
        className="m-auto w-full object-contain"
      />
    </section>
  )
}

export default Hero
