import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
            <div className="bg-slate-400 flex-1">MainMenu</div>
          </nav>
        </div>
        <div className="h-[510px] bg-gray200 w-full">
        </div>
        {children}
      </body>
    </html>
  );
}
