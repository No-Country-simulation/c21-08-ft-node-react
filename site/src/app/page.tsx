import CategoryCard from "./components/CategoryCard/CategoryCard";

export default function Home() {
  return (
    <div>
      <div className="h-[510px] bg-gray200 w-full"></div>
      <div className="h-44 w-full -mt-16">
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
      <div>
        <section className="h-44 bg-indigo-500">AAAA</section>
      </div>
      <div>
        <section className="h-44 bg-indigo-500">BBBB</section>
      </div>
    </div>
  );
}
