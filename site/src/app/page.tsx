import CategoryCard from "./components/CategoryCard/CategoryCard";
import Card from "./components/card/Card";
import CustomerStep from "./components/CustomerStep/CustomerStep";
import Icon from "./components/icon/Icon";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div className="h-[560px] bg-gray200 w-full"></div>
      <div className="w-full -mt-48">
        <section className="w-[1000px] flex gap-6 mx-auto">
          <CategoryCard
            name={"Frutas"}
            alt="Frutas"
            src=""
            width={480}
            height={480}
          />
          <CategoryCard
            name={"Verduras"}
            alt="Frutas"
            src=""
            width={480}
            height={480}
          />
          <CategoryCard
            name={"Lácteos"}
            alt="Frutas"
            src=""
            width={480}
            height={480}
          />
          <CategoryCard
            name={"Carnes"}
            alt="Frutas"
            src=""
            width={480}
            height={480}
          />
        </section>
      </div>
      <div className="w-full">
        <section className="w-[1000px] mx-auto flex flex-col gap-y-10">
          <h2 className="text-4xl font-bold">Descuentos</h2>
          <div className="flex justify-between">
            <Card title={'Producto 1'} category={"Categoria 1"} price={1000} />
            <Card title={'Producto 1'} category={"Categoria 1"} price={1000} />
            <Card title={'Producto 1'} category={"Categoria 1"} price={1000} />
            <Card title={'Producto 1'} category={"Categoria 1"} price={1000} />
          </div>
        </section>
      </div>
      <div className="w-full">
        <section className="w-[1000px] mx-auto flex gap-14">
          <div className="flex flex-col gap-10">
            <CustomerStep
              icon={ <Icon iconType="cartLarge" /> }
              title={ "Elijes lo que necesitas" }
              desc={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
            />
            <CustomerStep
              icon={ <Icon iconType="whatsapp" /> }
              title={ "Nos confirmas por whatsapp" }
              desc={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
            />
          </div>
          <div className="flex flex-col justify-center">
            <CustomerStep
              icon={ <Icon iconType="boxTickLarge" /> }
              title={ "Preparamos tu pedido" }
              desc={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
            />
          </div>
          <div className="flex flex-col gap-10 justify-between">
            <CustomerStep
              icon={ <Icon iconType="delivery" /> }
              title={ "Te lo llevamos a casa" }
              desc={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
            />
            <CustomerStep
              icon={ <Icon iconType="shop" /> }
              title={ "Lo recojes en tienda" }
              desc={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
            />
          </div>
        </section>
      </div>
    </div>
  );
}
