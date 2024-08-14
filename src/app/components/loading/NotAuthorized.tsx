"use client";
import { signIn } from "next-auth/react";
import Lottie from "react-lottie";
import NotAuthorizedAnimation from "../../../../public/lottie/not-authorized.json";

interface NotAuthorizedProps {
  children?: React.ReactNode;
}

export default function NotAuthorized({ children }: NotAuthorizedProps) {
  return (
    <div className="flex flex-col place-items-center">
      <Lottie
        options={{
          animationData: NotAuthorizedAnimation,
          autoplay: true,
          loop: true,
          rendererSettings: { className: "hover:cursor-default" },
        }}
        height={"80%"}
        width={"100%"}
        isClickToPauseDisabled
      />
      <div className="text-lg font-roboto font-semibold text-light-gray">
        Oops! You are not authorized to access this page.
      </div>
      <div
        className="text-lg font-roboto font-semibold underline text-blue-400"
        onClick={() => {
          signIn();
        }}
      >
        Login to your account.
      </div>
    </div>
  );
}
