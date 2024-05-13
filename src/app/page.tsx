import Image from "next/image";
import CategoriesContainer from "./components/containers/CategoriesContainer";
import SearchBox from "./components/navbar/SearchBox";
import RecentActivity from "./components/containers/RecentActivity";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 bg-floral_white dark:bg-slate-900">
      {/* <CategoriesContainer /> */}
      <div className="relative flex flex-col items-center w-full h-80">
        <h1
          className="relative font-sedan-sc whitespace-pre-wrap md:whitespace-normal mt-11 p-2 font-bold text-3xl text-eggshell z-50"
          style={{ textShadow: "0 0 2px #000, 0 0 3px #000, 0 0 15px #fff" }}
        >
          {"Savor the Reviews.\nDiscover the Flavors."}
        </h1>
        <Image
          src="/landing4.png"
          alt="Landing page picture"
          fill
          style={{
            objectFit: "cover",
          }}
        />
        <SearchBox />
      </div>
      <RecentActivity />
    </main>
  );
}
