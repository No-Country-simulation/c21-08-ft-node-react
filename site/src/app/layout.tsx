import type { Metadata } from "next"
// import localFont from "next/font/local";
import "./globals.css"
import Image from "next/image"
import Navbar from "./components/Navbar/Navbar.component"
import { CartContextProvider } from "./contexts/cart.context"

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Kramer Minimarket",
  description: "Minimarket",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-gray100">
        <CartContextProvider>
          <Navbar />
          {children}
        </CartContextProvider>
        <div className="w-full bg-gray200">
          <footer className="m-auto mt-20 flex w-[900px] justify-between gap-20 py-20">
            <div className="flex w-2/4 flex-col justify-between">
              <div>
                <Image
                  alt={"logo"}
                  src={"/images/logo-positivo.png"}
                  width={184.1}
                  height={41.741}
                  className="-z-50"
                />
              </div>
              <address className="flex flex-col gap-4 not-italic">
                <p>
                  Calle Los Robles 123, Piso 2, Dpto. 4, Colonia El Bosque,
                  Ciudad Sol, CP 56789, País del Este.
                </p>
                <p>945 9867 9697</p>
              </address>
            </div>
            <div className="flex w-2/4 flex-col gap-5">
              <h2 className="text-2xl font-bold">¿Qué necesitas hoy?</h2>
              <nav className="flex gap-12 font-light">
                <ul className="flex flex-col gap-3">
                  <a href="/categoria?name=almacén">
                    <li>Almacén</li>
                  </a>
                  <a href="/categoria?name=congelados">
                    <li>Congelados</li>
                  </a>
                  <a href="/categoria?name=librería">
                    <li>Librería</li>
                  </a>
                  <a href="/categoria?name=vinioteca">
                    <li>Vinioteca</li>
                  </a>
                </ul>
                <ul className="flex flex-col gap-3">
                  <a href="/categoria?name=limpieza">
                    <li>Limpieza</li>
                  </a>
                  <a href="/categoria?name=bebidas-sin-alcohol">
                    <li>Bebidas sin alcohol</li>
                  </a>
                  <a href="/categoria?name=bebidas-con-alcohol">
                    <li>Bebidas con alcohol</li>
                  </a>
                  <a href="/categoria?name=variados">
                    <li>Variados</li>
                  </a>
                </ul>
              </nav>
            </div>
            <div className="flex w-1/4 flex-col gap-5">
              <h2 className="text-2xl font-bold">Conversemos</h2>
              <ul className="flex flex-col gap-3 font-light">
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
