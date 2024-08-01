"use client";
import React from "react";
import { RecentReview } from "../../../../d";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import { AnimationControls, motion } from "framer-motion";
import StarRatingInput from "../rating/StarRatingInput";

interface RecentReviewCardProps {
  review?: Partial<RecentReview>;
  controls?: AnimationControls;
  containerWidth?: number;
}

export default function RecentReviewCard({
  review,
  controls,
  containerWidth,
}: RecentReviewCardProps) {
  return (
    <motion.div
      className="flex justify-center w-full max-h-48 hover:shadow-xl"
      animate={controls}
      whileHover={{
        scale: 1.1,
      }}
    >
      <Paper
        className="min-w-fit max-w-xs bg-white border rounded-lg border-black/10 shadow-sm p-4"
        elevation={0}
      >
        <div className="flex items-center gap-2">
          <Avatar src={review?.image} alt="user-avatar" />
          <div className="relative w-28 h-6">
            <StarRatingInput
              readOnly
              ratingType="stars"
              defaultValue={review?.rating}
            />
          </div>
        </div>
        <h3 className="text-light-gray font-figtree text-xl">{review?.name}</h3>
        <div className="mt-2 max-w-72 line-clamp-3">{review?.text}</div>
      </Paper>
    </motion.div>
  );
}
