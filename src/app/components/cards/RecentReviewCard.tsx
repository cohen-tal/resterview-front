"use client";
import React from "react";
import { RecentReview } from "../../../../d";
import { Avatar } from "@mui/material";
import StarRatingInput from "../rating/StarRatingInput";
import ImagesGridContainer from "../containers/ImagesGridContainer";

interface RecentReviewCardProps {
  review?: Partial<RecentReview>;
}

export default function RecentReviewCard({ review }: RecentReviewCardProps) {
  return (
    <div className="flex justify-center rounded-xl hover:shadow-xl">
      <div className="w-[400px] border rounded-xl border-black/10 shadow-md p-4 transition duration-300">
        <div className="flex items-center gap-2">
          <Avatar src={review?.authorImage} alt="user-avatar" />
          <div className="flex justify-between w-full">
            <h3 className="text-light-gray font-figtree text-xl">
              {review?.authorName}
            </h3>
            <div className="relative w-28 h-6">
              <StarRatingInput
                readOnly
                ratingType="stars"
                defaultValue={review?.rating}
              />
            </div>
          </div>
        </div>
        <div className="mt-2 max-w-72 line-clamp-2">{`"${review?.text}"`}</div>
      </div>
    </div>
  );
}
