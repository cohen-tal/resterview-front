import React from "react";
import Lottie from "react-lottie";
import thinkingAnimation from "../../../../public/lottie/thinking-animation.json";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

export default function NotFoundAfterLoading() {
  return (
    <div>
      <Lottie
        options={{
          animationData: thinkingAnimation,
          autoplay: true,
          loop: true,
          rendererSettings: { className: "hover:cursor-default" },
        }}
        height={414}
        width={414}
        isClickToPauseDisabled
      />
      <div className="flex flex-col place-items-center gap-1 flex-nowrap text-lg text-light-gray font-medium font-roboto">
        {`Uh Oh! It seems there's nothing to show.`}
        <Link
          href="/restaurants/new"
          className="flex gap-1 place-items-center border rounded-lg p-3 shadow-md bg-purple-500 lg:hover:bg-purple-700 text-white"
        >
          <IoMdAdd size={24} />
          Add New
        </Link>
      </div>
    </div>
  );
}
