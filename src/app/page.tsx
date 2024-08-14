"use client";
import Image from "next/image";
import RecentReviewsContainer from "./components/containers/RecentReviewsContainer";
import RecentRestaurantsContainer from "./components/containers/RecentRestaurantsContainer";
import { useEffect, useState } from "react";
import fetchAPI from "@/utils/fetchUtil";
import { RecentRestaurant, RecentReview, Recents } from "../../d";
import Footer from "./components/footer/Footer";

export default function Home() {
  const [recentReviews, setRecentReviews] = useState<RecentReview[]>();
  const [recentRestaurants, setRecentRestaurants] =
    useState<RecentRestaurant[]>();

  useEffect(() => {
    fetchAPI<Recents>("/home").then((recents) => {
      setRecentRestaurants(recents.restaurants);
      setRecentReviews(recents.reviews);
    });
  }, []);

  return (
    <>
      <main className="dark:bg-slate-900">
        <div className="relative flex flex-col items-center justify-center w-full h-80 lg:h-[40rem]">
          <h1
            className="font-sedan-sc whitespace-pre-wrap md:whitespace-normal text-floral_white p-8 font-bold text-3xl lg:text-6xl z-50"
            style={{ textShadow: "0 0 2px #000, 0 0 3px #000" }}
          >
            {"Savor the Reviews.\nDiscover the Flavors."}
          </h1>
          <div className="absolute inset-0 bg-black/10 z-10" />
          <Image
            src={"/landing-image.jpg"}
            alt="Landing page picture"
            layout="fill"
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </div>
        <section className="w-full bg-white/15 dark:bg-slate-800 shadow-sm mb-4">
          <RecentReviewsContainer reviews={recentReviews ?? []} />
        </section>
        <section className="w-full bg-white/15 dark:bg-slate-800 mb-4">
          <RecentRestaurantsContainer recents={recentRestaurants ?? []} />
        </section>
      </main>
      <Footer />
    </>
  );
}
