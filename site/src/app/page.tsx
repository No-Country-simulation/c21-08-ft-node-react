import CategoryCard from "./components/CategoryCard/CategoryCard.component"
import CustomerStep from "./components/CustomerStep/CustomerStep.component"
import Icon from "./components/Icon/Icon.component"
import CarouselContainer from "./components/CarouselContainer/CarouselContainer.component"
import Image from "next/image"
import { sortPromotions } from "./utils/functions.utils"
import { IsClientProvider } from "./contexts/isClient.context"
import Card from "./components/Card/Card.component"
import { strForData } from "./utils/functions.utils"

const getDiscountedProducts = async () => {
  const res = await fetch("http://localhost:3170/promotion")
  const rawArr = await res.json()
  const discountedProducts = sortPromotions(rawArr)
  return discountedProducts
}

export default async function Home() {
  const discountedProducts = await getDiscountedProducts()

  return (
    <main className="mt-24 flex flex-col gap-16 md:gap-8 xs:gap-4">
      <section className="hero h-[560px] overflow-hidden md:h-[320px] xs:h-[192px]">
        <Image
          src="/images/hero-1.jpg"
          alt="promocion-1"
          width={1080}
          height={1350}
          objectFit="contain"
          className="m-auto"
        />
      </section>
      <section className="-mt-48 w-full md:mt-0">
        <div className="mx-auto flex max-w-[1000px] items-start gap-6 md:gap-2 md:px-2 xs:gap-1 xs:px-1">
          <CategoryCard
            name={"Almacén"}
            alt="Almacén"
            link="/categoria?name=almacén"
            src="/images/product-placeholder.webp"
            width={480}
            height={480}
          />
          <CategoryCard
            name={"Vinoteca"}
            alt="Vinoteca"
            link="/categoria?name=vinoteca"
            src="/images/product-placeholder.webp"
            width={480}
            height={480}
          />
          <CategoryCard
            name={"Bebidas con alcohol"}
            alt="Bebidas con alcohol"
            link="/categoria?name=bebidas-con-alcohol"
            src="/images/product-placeholder.webp"
            width={480}
            height={480}
          />
          <CategoryCard
            name={"Bebidas sin alcohol"}
            alt="Bebidas sin alcohol"
            link="/categoria?name=bebidas-sin-alcohol"
            src=""
            width={480}
            height={480}
          />
        </div>
      </section>
      <section className="w-full">
        <div className="mx-auto flex max-w-[1000px] flex-col gap-16 md:gap-8 xs:gap-4">
          <h2 className="text-[32px] font-bold leading-[32px] xs:text-[24px] xs:leading-[24px]">
            Descuentos
          </h2>
          <IsClientProvider>
            <CarouselContainer>
              {discountedProducts.map((p, idx) => (
                <Card
                  key={`products-${idx}`}
                  additionalStyles="keen-slider__slide"
                  product={p}
                  link={`/categoria/${strForData(p.category.categoryName)}/${p.productId}`}
                />
              ))}
            </CarouselContainer>
          </IsClientProvider>
        </div>
      </section>
      <section className="w-full">
        <div className="mx-auto max-w-[1000px] lg:px-10 md:px-10 sm:px-5">
          <h2 className="text-center text-4xl font-bold xs:text-3xl">
            Cómo trabajamos
          </h2>
          <div className="mt-20 grid grid-cols-3 grid-rows-1 gap-x-14 lg:gap-x-5 md:mt-16 md:grid-cols-1 md:grid-rows-3 md:gap-x-0 md:gap-y-10 sm:mt-10 sm:gap-y-5">
            <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16 sm:gap-8">
              <CustomerStep
                icon={<Icon iconType="cartLarge" style="sm:hidden" />}
                title={"Elijes lo que necesitas"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
              <CustomerStep
                icon={<Icon iconType="whatsapp" style="sm:hidden" />}
                title={"Nos confirmas por whatsapp"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
            </div>
            <div className="flex items-center md:justify-center">
              <CustomerStep
                icon={<Icon iconType="boxTickLarge" style="sm:hidden" />}
                title={"Preparamos tu pedido"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
            </div>
            <div className="flex flex-col gap-10 md:flex-row md:gap-16 sm:gap-8">
              <CustomerStep
                icon={<Icon iconType="delivery" style="sm:hidden" />}
                title={"Te lo llevamos a casa"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
              <CustomerStep
                icon={<Icon iconType="shop" style="sm:hidden" />}
                title={"Lo recojes en tienda"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
