// import Arrow from "../components/Arrow/Arrow.component"
import CustomerStep from "../components/CustomerStep/CustomerStep.component"
import Icon from "../components/Icon/Icon.component"

const CustomerSteps = () => {
  return (
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
              desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />
            <CustomerStep
              icon={<Icon iconType="whatsapp" style="sm:hidden" />}
              title={"Nos confirmas por whatsapp"}
              desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />
          </div>
          <div className="flex items-center md:justify-center">
            <CustomerStep
              icon={<Icon iconType="boxTickLarge" style="sm:hidden" />}
              title={"Preparamos tu pedido"}
              desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />
          </div>
          <div className="flex flex-col gap-10 md:flex-row md:gap-16 sm:gap-8">
            <CustomerStep
              icon={<Icon iconType="delivery" style="sm:hidden" />}
              title={"Te lo llevamos a casa"}
              desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />
            <CustomerStep
              icon={<Icon iconType="shop" style="sm:hidden" />}
              title={"Lo recojes en tienda"}
              desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerSteps
