import Image from "next/image"

const Footer = () => {
  return (
    <footer className="w-full bg-gray200">
      <div className="m-auto mt-20 flex w-[900px] justify-between gap-20 py-20">
        <div className="w-3/6">
          <Image
            alt={"logo"}
            src={"/images/logo-positivo.png"}
            width={184.1}
            height={41.741}
            className="mb-10"
          />
          <address className="flex flex-col gap-4 not-italic">
            <p>
              Calle Los Robles 123, Piso 2, Dpto. 4, Colonia El Bosque, Ciudad
              Sol, CP 56789, País del Este.
            </p>
            <p>945 9867 9697</p>
          </address>
        </div>
        <div className="w-3/6">
          <h2 className="mb-5 text-2xl font-bold">¿Qué necesitas hoy?</h2>
          <nav className="flex justify-between">
            <ul className="flex flex-col gap-3">
              <li>
                <a href="">Almacen</a>
              </li>
              <li>
                <a href="">Congelados</a>
              </li>
              <li>
                <a href="">Libreria</a>
              </li>
              <li>
                <a href="">Vinoteca</a>
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="">Limpieza</a>
              </li>
              <li>
                <a href="">Bebidas sin alcohol</a>
              </li>
              <li>
                <a href="">Bebidas con alcohol</a>
              </li>
              <li>
                <a href="">Variados</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-2/6">
          <h2 className="mb-5 text-2xl font-bold">Conversemos</h2>
          <ul className="flex flex-col gap-3 font-light">
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
