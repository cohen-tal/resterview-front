import RestaurantCategoriesMenu from "../menus/RestaurantCategoriesMenu";

export default function CategoriesContainer() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 pt-10 pb-10">
      <RestaurantCategoriesMenu />
    </div>
  );
}
