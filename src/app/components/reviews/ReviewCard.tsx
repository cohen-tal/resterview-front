import Image from "next/image";
import StarRatingInput from "../rating/StarRatingInput";
import StarInput from "../rating/StarInput";
import { ReviewAPI, User } from "../../../../d";

interface ReviewCardProps {
  review: ReviewAPI;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-fit w-full rounded-2xl shadow-lg">
      <div className="absolute rounded-full -top-6 w-16 h-16 overflow-hidden shadow-md">
        <Image
          src={review.author.image ?? "/landing-plate.png"}
          alt="avatar"
          fill
          style={{ objectFit: "cover", zIndex: 999 }}
        />
      </div>
      <div className="break-words w-full h-full bg-slate-50/65 border rounded-xl">
        <div className="flex justify-between items-center w-full h-1/4 p-3">
          <StarRatingInput
            rating="stars"
            readOnly={true}
            defaultValue={review.rating}
          />
          <div className="mr-10 font-roboto">
            {/* {review.dateAdded.toLocaleDateString()} */}
          </div>
          {/* <StarRatingInput rating="price" /> */}
        </div>
        <div className="pl-3.5 pr-3.5 font-figtree">
          <div className="w-full h-fit">{review.text}</div>
        </div>
        <div className="m-auto w-fit text-xl font-medium text-light-gray mt-4">
          {review.author.name}
        </div>
      </div>
    </div>
  );
}
