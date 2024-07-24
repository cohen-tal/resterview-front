import Image from "next/image";
import StarRatingInput from "../rating/StarRatingInput";
import { ReviewAPI } from "../../../../d";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

interface ReviewCardProps {
  review: ReviewAPI;
}

export default function FullReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="relative flex flex-col justify-center min-h-fit w-full rounded-xl gap-2 shadow-md p-6 border font-figtree">
      <div className="flex place-items-center gap-2">
        <div className="relative rounded-full w-12 h-12 overflow-hidden shadow-md">
          <Image
            src={"/landing-plate.png"}
            alt="avatar"
            fill
            style={{ objectFit: "cover", zIndex: 999 }}
          />
        </div>
        <div>
          {review.author.name}
          <div className="flex place-items-center text-sm text-gray-400 gap-2">
            <div className="flex place-items-center gap-0.5">
              <AiOutlineLike />5
            </div>
            <div className="flex place-items-center gap-0.5">
              <AiOutlineDislike />0
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 border-t pt-4">
        <StarRatingInput
          ratingType="stars"
          readOnly={true}
          fontSize="1.25rem"
          defaultValue={review.rating}
        />
        <div className="text-sm text-gray-400">
          {new Date(review.dateAdded).toLocaleDateString()}
        </div>
      </div>
      <p className="text-md break-words text-light-gray max-w-[90%]">
        {review.text}
      </p>
      <div className="flex place-items-center lg:place-content-start gap-4">
        <button className="flex place-items-center gap-1 border rounded-full text-gray-500 p-2">
          <AiOutlineLike />
          Helpful
        </button>
        <button className="flex place-items-center gap-1 border rounded-full text-gray-500 p-2">
          <AiOutlineDislike />
          Not helpful
        </button>
      </div>
    </div>
  );
}

// {/* <div className="break-words w-full h-full bg-slate-50/65 border rounded-xl">
//         <div className="flex justify-between items-center w-full h-1/4 p-3">
//           <StarRatingInput rating="stars" readOnly={true} />
//           <div className="mr-10 font-roboto">
//             {new Date(Date.now()).toLocaleDateString()}
//           </div>
//           {/* <StarRatingInput rating="price" /> */}
//         </div>
//         <div className="pl-3.5 pr-3.5 font-figtree">
//           <div className="w-full h-fit">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           </div>
//         </div>
//         <div className="m-auto w-fit text-xl font-medium text-light-gray mt-4">
//           Tal Cohen
//         </div>
//       </div> */}
