import Image from "next/image"

const Hero = () => {
  return (
    <section className="hero relative h-[640px] w-full overflow-hidden lg:h-[480px] md:h-[320px] xs:h-[192px]">
      <div className="absolute h-full w-full bg-gradient-to-t from-gray100 to-gray100/0 to-30%"></div>
      <Image
        src="/images/hero-final1.png"
        alt="promocion-1"
        width={2048}
        height={1024}
        layout="responsive"
        className="m-auto h-[300px] w-full object-contain"
      />
    </section>
  )
}

export default Hero
