import React from "react";

export default function LandingPageContainer({
  layout = "mobile",
}: {
  layout: "mobile" | "desktop";
}) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="p-4 text-black/70 drop-shadow-md font-anton font-bold text-3xl">
          Newest Restaurants
        </h1>
      </div>
    </div>
  );
}
