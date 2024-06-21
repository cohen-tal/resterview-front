import Image from "next/image";
import Link from "next/link";

interface RestaurantCardProps {
  id: string;
  name: string;
  description: string;
  address: string;
  rating: number;
  images: string[];
}

const ratingImages: string[] = [
  "/rating-0.png",
  "/rating-1.png",
  "/rating-2.png",
  "/rating-3.png",
  "/rating-4.png",
  "/rating-5.png",
];

export default function RestaurantCard({
  id,
  name,
  description,
  address,
  rating,
  images,
}: RestaurantCardProps) {
  return (
    <Link
      className="flex flex-col items-center justify-center border rounded-md w-full max-h-[440px] shadow-md hover:scale-110 ease-in-out duration-300"
      href={"/"}
    >
      <div className="relative w-full h-48">
        <Image
          src="/landing4.png"
          alt="Restaurant"
          fill
          objectFit="cover"
          className="rounded-t-md"
        />
      </div>
      <div className="flex flex-col items-start p-3 gap-2 w-full max-h-40">
        <p className="text-light-gray font-roboto font-bold text-md">{name}</p>
        <p className="line-clamp-3 text-gray-500 text-sm">{description}</p>
        <div className="flex gap-0.5 items-center justify-between w-full">
          <p className="text-gray-700 text-sm">{address}</p>
          <div className="relative w-[42%] h-8">
            <Image
              src={ratingImages[rating]}
              alt="rating"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
