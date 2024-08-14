"use client";
import { motion } from "framer-motion";
import RecentReviewCard from "../cards/RecentReviewCard";
import { RecentReview } from "../../../../d";

export default function RecentReviewsContainer({
  reviews,
}: {
  reviews: RecentReview[];
}) {
  return (
    <div className="p-4 flex flex-col mr-auto w-full overflow-x-hidden">
      <div className="font-semibold">
        <h2 className="text-black/70 drop-shadow-md font-anton font-bold text-2xl">
          Recent Reviews
        </h2>
      </div>
      <motion.div
        className="flex gap-4 py-6 w-fit"
        initial={{ x: 0 }}
        animate={{ x: "calc(-50% - 0.5rem)" }}
        transition={{ ease: "linear", duration: "20", repeat: Infinity }}
      >
        {reviews &&
          [...reviews, ...reviews].map((review, index) => (
            <RecentReviewCard key={index} review={review} />
          ))}
      </motion.div>
    </div>
  );
}
