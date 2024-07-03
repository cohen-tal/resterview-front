import type { Metadata } from "next";
import "./globals.css";
import { Poltawski_Nowy, Roboto_Mono, Roboto, Figtree } from "next/font/google";
import NavBar from "./components/navbar/NavBar";
import { SessionProvider } from "next-auth/react";

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

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-figtree",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poltawoski_nowy.variable} ${roboto_mono.variable} ${roboto.variable} ${figtree.variable}`}
    >
      <body className="font-sans overflow-x-hidden min-h-screen">
        <SessionProvider>
          <NavBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
