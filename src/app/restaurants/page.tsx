"use client";
import RestaurantCard from "../components/cards/RestaurantCard";
import { useSession } from "next-auth/react";
import RestaurantCategoriesMenu from "../components/menus/RestaurantCategoriesMenu";
import AddRestaurantButton from "../components/buttons/AddRestaurantButton";
export default function RestaurantsPage() {
  const session = useSession();

  console.log(session.data?.error);
  return (
    <div className="flex flex-col place-items-center p-2 gap-2 w-full">
      <RestaurantCategoriesMenu />
      <div className="grid grid-flow-row place-items-center pl-2 pr-2 gap-8 md:grid-cols-3 md:pl-16 md:pr-16 w-full">
        <RestaurantCard
          id="id"
          name="Aki's Schpitz"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin neque nunc, ultrices auctor nunc sit amet, lobortis vulputate justo. In ac feugiat augue. Nulla non sem lorem. Nulla ultricies pretium quam nec hendrerit. Morbi est nisi, tristique vehicula elit eget, interdum malesuada purus. Fusce blandit eleifend sagittis. Aenean consectetur nibh et diam ultricies ornare. In quis finibus magna. Proin hendrerit, risus at interdum tincidunt, tellus lectus aliquet leo, imperdiet volutpat nunc turpis iaculis enim. Sed nec quam accumsan, suscipit turpis a, pulvinar ligula. Mauris porta ut quam eget suscipit. Nulla facilisi. Mauris semper, diam eget pellentesque dapibus, arcu orci tempus mauris, condimentum faucibus ex diam eu ipsum. Proin tristique interdum purus."
          address="Atlit, Hazait 7"
          rating={4}
          images={[]}
        />
        <RestaurantCard
          id="id"
          name="Aki's Schpitz"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin neque nunc, ultrices auctor nunc sit amet, lobortis vulputate justo. In ac feugiat augue. Nulla non sem lorem. Nulla ultricies pretium quam nec hendrerit. Morbi est nisi, tristique vehicula elit eget, interdum malesuada purus. Fusce blandit eleifend sagittis. Aenean consectetur nibh et diam ultricies ornare. In quis finibus magna. Proin hendrerit, risus at interdum tincidunt, tellus lectus aliquet leo, imperdiet volutpat nunc turpis iaculis enim. Sed nec quam accumsan, suscipit turpis a, pulvinar ligula. Mauris porta ut quam eget suscipit. Nulla facilisi. Mauris semper, diam eget pellentesque dapibus, arcu orci tempus mauris, condimentum faucibus ex diam eu ipsum. Proin tristique interdum purus."
          address="Atlit, Hazait 7"
          rating={4}
          images={[]}
        />
        <RestaurantCard
          id="id"
          name="Aki's Schpitz"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin neque nunc, ultrices auctor nunc sit amet, lobortis vulputate justo. In ac feugiat augue. Nulla non sem lorem. Nulla ultricies pretium quam nec hendrerit. Morbi est nisi, tristique vehicula elit eget, interdum malesuada purus. Fusce blandit eleifend sagittis. Aenean consectetur nibh et diam ultricies ornare. In quis finibus magna. Proin hendrerit, risus at interdum tincidunt, tellus lectus aliquet leo, imperdiet volutpat nunc turpis iaculis enim. Sed nec quam accumsan, suscipit turpis a, pulvinar ligula. Mauris porta ut quam eget suscipit. Nulla facilisi. Mauris semper, diam eget pellentesque dapibus, arcu orci tempus mauris, condimentum faucibus ex diam eu ipsum. Proin tristique interdum purus."
          address="Atlit, Hazait 7"
          rating={4}
          images={[]}
        />
        <RestaurantCard
          id="id"
          name="Aki's Schpitz"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin neque nunc, ultrices auctor nunc sit amet, lobortis vulputate justo. In ac feugiat augue. Nulla non sem lorem. Nulla ultricies pretium quam nec hendrerit. Morbi est nisi, tristique vehicula elit eget, interdum malesuada purus. Fusce blandit eleifend sagittis. Aenean consectetur nibh et diam ultricies ornare. In quis finibus magna. Proin hendrerit, risus at interdum tincidunt, tellus lectus aliquet leo, imperdiet volutpat nunc turpis iaculis enim. Sed nec quam accumsan, suscipit turpis a, pulvinar ligula. Mauris porta ut quam eget suscipit. Nulla facilisi. Mauris semper, diam eget pellentesque dapibus, arcu orci tempus mauris, condimentum faucibus ex diam eu ipsum. Proin tristique interdum purus."
          address="Atlit, Hazait 7"
          rating={4}
          images={[]}
        />
        <RestaurantCard
          id="id"
          name="Aki's Schpitz"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin neque nunc, ultrices auctor nunc sit amet, lobortis vulputate justo. In ac feugiat augue. Nulla non sem lorem. Nulla ultricies pretium quam nec hendrerit. Morbi est nisi, tristique vehicula elit eget, interdum malesuada purus. Fusce blandit eleifend sagittis. Aenean consectetur nibh et diam ultricies ornare. In quis finibus magna. Proin hendrerit, risus at interdum tincidunt, tellus lectus aliquet leo, imperdiet volutpat nunc turpis iaculis enim. Sed nec quam accumsan, suscipit turpis a, pulvinar ligula. Mauris porta ut quam eget suscipit. Nulla facilisi. Mauris semper, diam eget pellentesque dapibus, arcu orci tempus mauris, condimentum faucibus ex diam eu ipsum. Proin tristique interdum purus."
          address="Atlit, Hazait 7"
          rating={4}
          images={[]}
        />
        <RestaurantCard
          id="id"
          name="Aki's Schpitz"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin neque nunc, ultrices auctor nunc sit amet, lobortis vulputate justo. In ac feugiat augue. Nulla non sem lorem. Nulla ultricies pretium quam nec hendrerit. Morbi est nisi, tristique vehicula elit eget, interdum malesuada purus. Fusce blandit eleifend sagittis. Aenean consectetur nibh et diam ultricies ornare. In quis finibus magna. Proin hendrerit, risus at interdum tincidunt, tellus lectus aliquet leo, imperdiet volutpat nunc turpis iaculis enim. Sed nec quam accumsan, suscipit turpis a, pulvinar ligula. Mauris porta ut quam eget suscipit. Nulla facilisi. Mauris semper, diam eget pellentesque dapibus, arcu orci tempus mauris, condimentum faucibus ex diam eu ipsum. Proin tristique interdum purus."
          address="Atlit, Hazait 7"
          rating={4}
          images={[]}
        />
      </div>
      <AddRestaurantButton />
    </div>
  );
}
