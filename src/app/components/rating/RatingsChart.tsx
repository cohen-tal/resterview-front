import { MdOutlineStar } from "react-icons/md";
import RatingGaugeBar from "./RatingGaugeBar";

export default function RatingsChart() {
  return (
    <div className="flex w-full items-center justify-end gap-6 text-light-gray">
      <div className="flex flex-col">
        <div className="font-semibold text-xl whitespace-nowrap">
          Overall Rating
        </div>
        <div className="flex items-center">
          <MdOutlineStar className="text-5xl" />
          <div className="font-semibold text-5xl">4.6</div>
        </div>
        <div className=" text-gray-600 pl-3">255 reviews</div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <RatingGaugeBar fill={0.6} text="5 stars" color="green" />
        <RatingGaugeBar fill={0.4} text="4 stars" color="green" />
        <RatingGaugeBar fill={0.3} text="3 stars" color="green" />
        <RatingGaugeBar fill={0.2} text="2 stars" color="green" />
        <RatingGaugeBar fill={0.1} text="1 star" color="green" />
      </div>
    </div>
  );
}
