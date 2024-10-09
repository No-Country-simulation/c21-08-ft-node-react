import CategoryCard from "./components/CategoryCard/CategoryCard";
import Card from "./components/card/Card";

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
      {/* <div> */}
      {/*   <section className="h-44 bg-indigo-500">BBBB</section> */}
      {/* </div> */}
    </div>
  );
}
