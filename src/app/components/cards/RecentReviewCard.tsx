"use client";
import React from "react";
import { RecentReview, Review, User } from "../../../../d";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import Image from "next/image";
import { AnimationControls, Variants, motion } from "framer-motion";
import StarRatingInput from "../rating/StarRatingInput";

interface RecentReviewCardProps {
  user: User;
  review: Review;
  variants: Variants;
}

interface Props {
  userId?: string;
  userImage?: string;
  review?: Partial<RecentReview>;
  text?: string;
  controls?: AnimationControls;
  containerWidth?: number;
}

export default function RecentReviewCard(props: Props) {
  return (
    <motion.div
      className="flex justify-center w-full max-h-48 hover:shadow-xl"
      animate={props.controls}
      whileHover={{
        scale: 1.1,
      }}
    >
      <Paper
        className="min-w-fit max-w-xs bg-white border rounded-lg border-black/10 shadow-sm p-4"
        elevation={0}
      >
        <div className="flex items-center gap-2">
          <Avatar src={props.userImage ?? "/.logo.png"} alt="user-avatar" />
          <div className="relative w-28 h-6">
            <StarRatingInput
              readOnly
              ratingType="stars"
              defaultValue={props.review?.rating}
            />
          </div>
        </div>
        <h3 className="text-light-gray font-figtree text-xl">
          {props.review?.author?.name}
        </h3>
        <div className="mt-2 max-w-72 line-clamp-3">{props.text}</div>
      </Paper>
    </motion.div>
  );
}
