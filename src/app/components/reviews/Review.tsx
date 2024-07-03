import Image from "next/image";
import StarRatingInput from "../rating/StarRatingInput";
import StarInput from "../rating/StarInput";

export default function Review() {
  return (
    <div className="relative flex flex-col items-center justify-center h-52 w-full rounded-2xl shadow-lg">
      <div className="absolute rounded-full -top-6 w-16 h-16 overflow-hidden shadow-md">
        <Image
          src={"/landing-plate.png"}
          alt="avatar"
          fill
          style={{ objectFit: "cover", zIndex: 999 }}
        />
      </div>
      <div className="w-full h-full bg-gradient-to-br from-floral_white/50 to-floral_white/20 border rounded-2xl">
        <div className="flex justify-between items-center w-full h-1/4 p-3">
          <StarRatingInput rating="stars" readOnly={true} />
          <div className="mr-10 font-roboto">
            {new Date(Date.now()).toLocaleDateString()}
          </div>
          {/* <StarRatingInput rating="price" /> */}
        </div>
        <div className="pl-3.5 pr-3.5 font-figtree">
          <div className="line-clamp-4 w-full h-fit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </div>
        </div>
        <div className="m-auto w-fit text-xl font-medium text-light-gray mt-4">
          Tal Cohen
        </div>
      </div>
    </div>
  );
}
