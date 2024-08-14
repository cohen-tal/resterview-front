import Lottie from "react-lottie";
import FoodLoadingAnimation from "../../../../public/lottie/FoodLoadingAnimation.json";

export default function FoodAnimationLoader() {
  return (
    <div className="absolute flex items-center inset-0 bg-black/30">
      <Lottie
        options={{
          animationData: FoodLoadingAnimation,
          autoplay: true,
          loop: true,
          rendererSettings: { className: "hover:cursor-default" },
        }}
        height={"50%"}
        width={"50%"}
        isClickToPauseDisabled
      />
    </div>
  );
}
