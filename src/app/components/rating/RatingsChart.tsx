import { MdOutlineStar } from "react-icons/md";
import RatingGaugeBar from "./RatingGaugeBar";

interface RatingsChartProps {
  overallRating: number;
  amountOfReviews: number;
  ratingsPercentage: [number, number, number, number, number] | number[];
}

export default function RatingsChart({
  amountOfReviews,
  overallRating,
  ratingsPercentage,
}: RatingsChartProps) {
  return (
    <div className="flex w-full items-center justify-end gap-6 lg:gap-20 text-light-gray">
      <div className="flex flex-col">
        <div className="font-semibold text-xl whitespace-nowrap text-right">
          Overall Rating
        </div>
        <div className="flex items-center">
          <MdOutlineStar className="text-5xl" />
          <div className="font-semibold text-5xl">{overallRating}</div>
        </div>
        <div className="text-center text-gray-600 pl-3">
          {amountOfReviews} reviews
        </div>
      </div>
      <div className="grid grid-cols-[minmax(50px,max-content)_1fr] w-full font-figtree items-center gap-1">
        5 stars
        <RatingGaugeBar
          fill={ratingsPercentage[4]}
          text="5 stars"
          color="green"
        />
        4 stars
        <RatingGaugeBar
          fill={ratingsPercentage[3]}
          text="4 stars"
          color="green"
        />
        3 stars
        <RatingGaugeBar
          fill={ratingsPercentage[2]}
          text="3 stars"
          color="green"
        />
        2 stars
        <RatingGaugeBar
          fill={ratingsPercentage[1]}
          text="2 stars"
          color="green"
        />
        1 star
        <RatingGaugeBar
          fill={ratingsPercentage[0]}
          text="1 star"
          color="green"
        />
      </div>
    </div>
  );
}
