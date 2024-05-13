import CategoriesMenu from "../menus/CategoriesMenu";

export default function CategoriesContainer() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 pt-10 pb-10">
      {/* <h2 className=" self-start pl-4 font-sans font-bold">
        Explore categories
      </h2> */}
      <CategoriesMenu />
    </div>
  );
}
