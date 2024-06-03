"use client";
import { motion, useAnimation } from "framer-motion";
import RecentReviewCard from "../cards/RecentReviewCard";
import useMeasure from "react-use-measure";
import { useEffect } from "react";

export default function RecentReviewsContainer() {
  const [ref, { width }] = useMeasure();
  const controls = useAnimation();

  useEffect(() => {
    if (width) {
      const duration = 55; // Duration for one complete cycle

      controls.start({
        x: [-32, -width / 2 - 32],
        transition: {
          x: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        },
      });
    }
  }, [width, controls]);

  return (
    <div className="p-4 flex flex-col mr-auto w-full" ref={ref}>
      <div className="font-semibold">
        <h2 className="text-black/70 drop-shadow-md font-anton font-bold text-2xl">
          Recent Reviews
        </h2>
      </div>
      <motion.div className="flex gap-4 p-8">
        {[...Array(8).keys()].map((i) => (
          <RecentReviewCard
            key={`original-${i}`}
            text={String(i + 1)}
            controls={controls}
          />
        ))}
        {[...Array(8).keys()].map((i) => (
          <RecentReviewCard
            key={`duplicate-${i}`}
            text={String(i + 1)}
            controls={controls}
          />
        ))}
      </motion.div>
    </div>
  );
}
