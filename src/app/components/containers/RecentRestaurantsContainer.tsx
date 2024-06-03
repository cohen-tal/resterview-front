"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import RecentRestaurantCard from "../cards/RecentRestaurantCard";
import ScrollableContainer from "./ScrollableContainer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mobileAnimation = () =>
  gsap.fromTo(
    ".recentRestCard:not(:first-child)",
    {
      x: -400,
    },
    {
      x: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".container",
        start: "top 40%",
        end: "bottom top",
        pin: ".main",
        scrub: true,
        // markers: true,
      },
    }
  );

const desktopAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".container",
      start: "top 40%",
      end: "top 40%",
      markers: true,
    },
  });
  tl.fromTo(".card0", { x: () => window.innerWidth / 2 + 100 }, { x: 0 });
  tl.fromTo(".card1", { x: () => window.innerWidth / 2 + 100 }, { x: 0 }, ">");
  tl.fromTo(".card2", { x: () => window.innerWidth / 2 + 100 }, { x: 0 }, ">");
  tl.fromTo(".card3", { x: () => window.innerWidth / 2 + 100 }, { x: 0 }, ">");
};

export default function RecentRestaurantsContainer() {
  useGSAP(mobileAnimation);

  return (
    <section className="w-full dark:bg-slate-800 shadow-sm">
      <h2 className="p-4 text-black/70 drop-shadow-md font-anton font-bold text-2xl">
        Newest Restaurants
      </h2>
      <div className="container relative w-full h-[600px] flex flex-col p-4 items-center lg:items-start lg:flex-row lg:gap-6 2xl:gap-12">
        {/* <div className="flex flex-col mr-auto w-full gap-4 p-4"> */}
        {/* {[...Array(4).keys()].map((i) => (
          // <div className={`card${i}`} key={i}>
          <RecentRestaurantCard
            key={`original-${i}`}
            // text={String(i + 1)}
            // controls={controls}
          />
          // </div>
        ))} */}
      </div>

      {/* </div> */}
    </section>
  );
}
