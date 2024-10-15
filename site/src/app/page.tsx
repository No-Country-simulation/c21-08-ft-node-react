import CategoryCard from "./components/CategoryCard/CategoryCard.component"
import CustomerStep from "./components/CustomerStep/CustomerStep.component"
import Icon from "./components/Icon/Icon.component"
import DiscountContainer from "./components/DiscountContainer/DiscountContainer.component"
import { IsClientProvider } from "./contexts/isClient.context"

export default async function Home() {
  return (
    <main className="mt-24 flex flex-col gap-20">
      <section className="hero h-[560px]" />
      <section className="-mt-48 w-full">
        <div className="mx-auto flex max-w-[1000px] gap-6">
          <CategoryCard
            name={"Almacén"}
            alt="Almacén"
            src=""
            width={480}
            height={480}
          />
          <CategoryCard
            name={"Vinoteca"}
            alt="Vinoteca"
            src=""
            width={480}
            height={480}
          />
          <CategoryCard
            name={"Bebidas con alcohol"}
            alt="Bebidas con alcohol"
            src=""
            width={480}
            height={480}
          />
          <CategoryCard
            name={"Bebidas sin alcohol"}
            alt="Bebidas sin alcohol"
            src=""
            width={480}
            height={480}
          />
        </div>
      </section>
      <section className="w-full">
        <div className="mx-auto flex max-w-[1000px] flex-col gap-y-10">
          <h2 className="text-4xl font-bold">Descuentos</h2>
          <IsClientProvider>
            <DiscountContainer />
          </IsClientProvider>
        </div>
      </section>
      <section className="mb-20 w-full">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="text-center text-4xl font-bold">Como trabajamos</h2>
          <div className="mt-20 grid grid-cols-3 grid-rows-1 gap-x-14">
            <div className="flex flex-col gap-10">
              <CustomerStep
                icon={<Icon iconType="cartLarge" />}
                title={"Elijes lo que necesitas"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
              <CustomerStep
                icon={<Icon iconType="whatsapp" />}
                title={"Nos confirmas por whatsapp"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
            </div>
            <div className="flex items-center">
              <CustomerStep
                icon={<Icon iconType="boxTickLarge" />}
                title={"Preparamos tu pedido"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
            </div>
            <div className="flex flex-col gap-10">
              <CustomerStep
                icon={<Icon iconType="delivery" />}
                title={"Te lo llevamos a casa"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
              <CustomerStep
                icon={<Icon iconType="shop" />}
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
