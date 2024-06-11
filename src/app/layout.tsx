import type { Metadata } from "next";
import "./globals.css";
import { Poltawski_Nowy, Roboto_Mono, Anton, Roboto } from "next/font/google";
import NavBar from "./components/navbar/NavBar";

export const metadata: Metadata = {
  title: "StarBite Reviews",
  description: "Restaurants reviews around you!",
};

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const poltawoski_nowy = Poltawski_Nowy({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poltawoski-nowy",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-anton",
});

//bg-gradient-to-br from-topLeft via-bottomLeft to-bottomRight

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poltawoski_nowy.variable} ${roboto_mono.variable} ${roboto.variable}`}
    >
      <body className="font-sans overflow-x-hidden min-h-screen">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
