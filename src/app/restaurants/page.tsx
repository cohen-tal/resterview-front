"use client";
import { useEffect } from "react";
import RestaurantCard from "../components/cards/RestaurantCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function RestaurantsPage() {
  const session = useSession();
  const router = useRouter();

  console.log(session.data?.error);
  return (
    <div className="grid grid-cols-4 p-20 pt-14 gap-8">
      {/* <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard /> */}
    </div>
  );
}
