"use client";
import Image from "next/image";
import RecentReviewsContainer from "./components/containers/RecentReviewsContainer";
import RecentRestaurantsContainer from "./components/containers/RecentRestaurantsContainer";
import { useEffect, useState } from "react";
import fetchAPI from "@/utils/fetchUtil";
import { RecentRestaurant, RecentReview } from "../../d";

export default function Home() {
  const [recentReviews, setRecentReviews] = useState<RecentReview[]>();
  const [recentRestaurants, setRecentRestaurants] =
    useState<RecentRestaurant[]>();

  useEffect(() => {
    fetchAPI("/home").then((recent) => {
      setRecentRestaurants(recent.restaurants);
      setRecentReviews(recent.reviews);
    });
  }, []);

  return (
    <main className="main dark:bg-slate-900 overflow-x-hidden overflow-y-auto max-h-screen">
      <div className="relative flex flex-col items-center justify-center w-full h-80 lg:h-[40rem]">
        <h1
          className="font-sedan-sc whitespace-pre-wrap md:whitespace-normal lg:-mt-56 text-floral_white p-8 font-bold text-3xl lg:text-6xl z-50"
          style={{ textShadow: "0 0 2px #000, 0 0 3px #000" }}
        >
          {"Savor the Reviews.\nDiscover the Flavors."}
        </h1>
        <Image
          src={"/landing1.jpg"}
          alt="Landing page picture"
          layout="fill"
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>
      <section className="w-full bg-white/15 dark:bg-slate-800 shadow-sm mb-4">
        <RecentReviewsContainer reviews={recentReviews} />
      </section>
      <RecentRestaurantsContainer recents={recentRestaurants ?? []} />
      <div className="h-[300px]"></div>
    </main>
  );
}
