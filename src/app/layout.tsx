import type { Metadata } from "next";
import "./globals.css";
import { Poltawski_Nowy, Roboto_Mono, Anton } from "next/font/google";
import NavBar from "./components/navbar/NavBar";
import Head from "next/head";

export const metadata: Metadata = {
  title: "StarBite Reviews",
  description: "Restaurants reviews around you!",
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poltawoski_nowy.variable} ${roboto_mono.variable}`}
    >
      <body className="font-sans">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
