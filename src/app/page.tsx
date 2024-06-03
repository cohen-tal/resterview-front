"use client";
import Image from "next/image";
import SearchBox from "./components/navbar/SearchBox";
import RecentReviewsContainer from "./components/containers/RecentReviewsContainer";
import RecentRestaurantsContainer from "./components/containers/RecentRestaurantsContainer";
import useMediaQuery from "@mui/material/useMediaQuery";

//bg-[#f0efe9]

export default function Home() {
  const matches = useMediaQuery("(min-width:1024px)");
  console.log(matches);

  return (
    <main className="main flex flex-col items-center gap-2 dark:bg-slate-900 overflow-x-hidden">
      <div className="relative flex flex-col items-center justify-center w-full h-80 lg:h-[40rem] mb-8">
        <h1
          className="font-sedan-sc whitespace-pre-wrap md:whitespace-normal lg:-mt-56 text-floral_white p-8 font-bold text-3xl lg:text-6xl z-50"
          style={{ textShadow: "0 0 2px #000, 0 0 3px #000" }}
        >
          {"Savor the Reviews.\nDiscover the Flavors."}
        </h1>
        <Image
          src={matches ? "/landing1.jpg" : "/landing-plate.png"}
          alt="Landing page picture"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        {matches && <SearchBox />}
      </div>

      <section className="bg-white/40 dark:bg-slate-800 shadow-md rounded-full mb-8">
        {!matches && <SearchBox />}
      </section>

      <section className="w-full bg-white/15 dark:bg-slate-800 shadow-sm mb-4">
        <RecentReviewsContainer />
      </section>
      <RecentRestaurantsContainer />
    </main>
  );
}
