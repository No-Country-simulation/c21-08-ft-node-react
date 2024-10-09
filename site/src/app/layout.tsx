import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
<<<<<<< Updated upstream
import Carrito from "./components/Carrito/Carrito";
import { products } from "@/mocks/products";
=======
>>>>>>> Stashed changes
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kramer Minimarket",
  description: "Minimarket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full bg-gray100">
          <nav className='w-[1000px] py-6 bg-gray flex justify-between gap-9 m-auto'>
            <div className="bg-slate-400 flex-1 ">Logo</div>
            <div className="flex-1">
              <input type="text" className="w-full rounded border border-gray-300" />
            </div>
            <div className="bg-slate-400 flex-1">
              {/* MainMenu */}
              <Carrito products={products} />
            </div>
          </nav>
        </div>
<<<<<<< Updated upstream
        
        <div className="h-[510px] bg-gray200 w-full">
        </div>
=======
>>>>>>> Stashed changes

        {children}

        <div className="w-full bg-gray100">
          <footer className="w-[1000px] m-auto flex justify-between px-52 py-20">
            <div>
              <Image 
                alt={ "logo" } 
                src={ '/images/logo-positivo.png' } 
                width={184.1} 
                height={41.741}
                className='-z-50'
              />
            </div>
            <div>
              <h2>¿Qué necesitas hoy?</h2>
              <div className="flex">
                <ul>
                  <li>Frutas</li>
                  <li>Verduras</li>
                  <li>Lácteos</li>
                  <li>Carnes</li>
                </ul>
                <ul>
                  <li>Legumbres</li>
                  <li>Licones</li>
                  <li>Embutidos</li>
                  <li>Cereales</li>
                </ul>
              </div>
            </div>
            <div>
              <h2>Conversemos</h2>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
