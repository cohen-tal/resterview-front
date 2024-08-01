"use client";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import RecentReviewCard from "../cards/RecentReviewCard";
import useMeasure from "react-use-measure";
import { useEffect } from "react";
import { RecentReview } from "../../../../d";

export default function RecentReviewsContainer({
  reviews,
}: {
  reviews: RecentReview[];
}) {
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
  }, [width, controls, reviews]);

  return (
    <div className="p-4 flex flex-col mr-auto w-full" ref={ref}>
      <div className="font-semibold">
        <h2 className="text-black/70 drop-shadow-md font-anton font-bold text-2xl">
          Recent Reviews
        </h2>
      </div>
      <motion.div className="flex gap-4 p-8">
        {reviews &&
          reviews.map((review) => (
            <RecentReviewCard
              key={review.id}
              review={review}
              controls={controls}
            />
          ))}
      </motion.div>
    </div>
  );
}
