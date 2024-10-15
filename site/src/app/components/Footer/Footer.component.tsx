import Image from "next/image"

const Footer = () => {
  return (
    <footer className="w-full bg-gray200">
      <div className="mx-auto grid max-w-[1000px] grid-cols-3 grid-rows-1 gap-20 p-20">
        <div>
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
        <div>
          <h2 className="text-2xl font-bold mb-5">¿Qué necesitas hoy?</h2>
          <nav className="flex justify-between">
            <ul className="flex flex-col gap-3">
							<li><a href="">Almacen</a></li>
							<li><a href="">Congelados</a></li>
							<li><a href="">Libreria</a></li>
							<li><a href="">Vinoteca</a></li>
						</ul>
            <ul className="flex flex-col gap-3">
							<li><a href="">Limpieza</a></li>
							<li><a href="">Bebidas sin alcohol</a></li>
							<li><a href="">Bebidas con alcohol</a></li>
							<li><a href="">Variados</a></li>
						</ul>
          </nav>
        </div>
        <div>
					<h2 className="text-2xl font-bold mb-5">Conversemos</h2>
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
