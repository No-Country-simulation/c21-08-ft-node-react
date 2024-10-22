import Image from "next/image"

const Hero = () => {
  return (
    <section className="hero h-[560px] overflow-hidden md:h-[320px] xs:h-[192px]">
      <Image
        src="/images/hero-1.jpg"
        alt="promocion-1"
        width={1080}
        height={1350}
        className="m-auto object-contain"
      />
    </section>
  )
}

export default Hero
