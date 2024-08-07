import RecentRestaurantCard from "../cards/RecentRestaurantCard";
import { Variants } from "framer-motion";
import { RecentRestaurant } from "../../../../d";
import { useMediaQuery } from "@mui/material";

interface RecentRestaurantsContainerProps {
  recents: RecentRestaurant[];
}

const variants: (index: number) => Variants = (index: number) => {
  const isOdd = index % 2 === 0;
  return {
    hidden: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 50,
      rotate: isOdd ? -2 : 2,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
};

export default function RecentRestaurantsContainer({
  recents,
}: RecentRestaurantsContainerProps) {
  const isDesktop = useMediaQuery("(min-width:800px)");
  console.log(isDesktop);

  return (
    <section className="w-full shadow-sm pb-80 lg:pb-0">
      <h2 className="p-4 text-black/70 drop-shadow-md font-bold text-2xl">
        Newest Restaurants
      </h2>
      <div className="relative lg:grid lg:grid-cols-3 lg:place-items-center text-center w-full">
        {recents.map((restaurant, index) => (
          <RecentRestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            rating={restaurant.rating}
            address={restaurant.address}
            categories={restaurant.categories}
            description={restaurant.description ?? ""}
            images={restaurant.images}
            variants={!isDesktop ? variants(index) : undefined}
          />
        ))}
      </div>
    </section>
  );
}
