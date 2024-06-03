"use client";
import React from "react";
import { Review, User } from "../../../../d";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import Image from "next/image";
import { AnimationControls, Variants, motion } from "framer-motion";

interface RecentReviewCardProps {
  user: User;
  review: Review;
  variants: Variants;
}

interface Props {
  text: string;
  controls?: AnimationControls;
  containerWidth?: number;
}

function text(reviewText: string): string {
  if (reviewText.length > 164) {
    return reviewText.substring(0, 163).concat("...");
  }
  return reviewText;
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
          <Avatar src="/.logo.png" alt="user-avatar" />
          <div className="relative w-28 h-6">
            <Image
              src="/rating1.png"
              alt="Landing page picture"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="mt-2 max-w-72">{text(props.text)}</div>
      </Paper>
    </motion.div>
  );
}
