import Image from "next/image"
import DiscountsContainer from "./components/DiscountsContainer/DiscountsContainer.component"
import FeaturedCategories from "./sections/FeaturedCategories.section"
import CustomerSteps from "./sections/CustomerSteps.section"

export default async function Home() {
  return (
    <main className="mt-24 flex flex-col gap-16 md:gap-8 xs:gap-4">
      <section className="hero h-[560px] overflow-hidden md:h-[320px] xs:h-[192px]">
        <Image
          src="/images/hero-1.jpg"
          alt="promocion-1"
          width={1080}
          height={1350}
          className="m-auto object-contain"
        />
      </section>
      <FeaturedCategories />
      <section className="w-full">
        <div className="mx-auto flex max-w-[1000px] flex-col gap-16 md:gap-8 xs:gap-4">
          <h2 className="text-[32px] font-bold leading-[32px] xs:text-[24px] xs:leading-[24px]">
            Descuentos
          </h2>
          <DiscountsContainer />
        </div>
      </section>
      <CustomerSteps />
    </main>
  )
}
