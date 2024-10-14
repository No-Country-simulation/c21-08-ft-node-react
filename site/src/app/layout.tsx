import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Navbar from './components/Navbar/Navbar.component'

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="bg-gray100">
        <Navbar />
        {children}
        <div className="w-full bg-gray200">
          <footer className="w-[1000px] m-auto flex py-20 mt-20 gap-24 justify-between">
            <div>
              <Image 
                alt={ "logo" } 
                src={ '/images/logo-positivo.png' } 
                width={184.1} 
                height={41.741}
                className='-z-50'
              />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-bold">¿Qué necesitas hoy?</h2>
              <div className="flex gap-12">
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
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-bold">Conversemos</h2>
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
