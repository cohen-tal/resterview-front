import React, { useEffect, useRef } from "react";
import RecentRestaurantCard from "../cards/RecentRestaurantCard";
import { useScroll, Variant, Variants } from "framer-motion";
import { RecentRestaurant } from "../../../../d";

interface RecentRestaurantsContainerProps {
  recents: RecentRestaurant[];
}

export default function RecentRestaurantsContainer({
  recents,
}: RecentRestaurantsContainerProps) {
  return (
    <section className="w-full shadow-sm mb-80">
      <h2 className="sticky top-20 p-4 text-black/70 drop-shadow-md font-bold text-2xl">
        Newest Restaurants
      </h2>
      <div className="relative text-center w-full">
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
            isOdd={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}
