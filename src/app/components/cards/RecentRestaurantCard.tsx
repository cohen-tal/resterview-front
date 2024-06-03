import { Variants, motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RecentRestaurantCardData } from "../../../../d";

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    transition: {
      rotate: -10,
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function RecentRestaurantCard({
  name,
  address,
  rating,
  description,
  image,
}: RecentRestaurantCardData) {
  const [pin, setPin] = useState<boolean>(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Use useEffect to log changes in scrollYProgress
  //   useEffect(() => {
  //     const unsubscribe = scrollYProgress.on("change", (value) => {
  //       console.log("Scroll Progress:", value);
  //       if (value >= 0.5) {
  //         setPin(true);
  //       }
  //     });

  //     return () => unsubscribe();
  //   }, [scrollYProgress]);
  return (
    <motion.div
      className="recentRestCard absolute lg:static w-[300px] h-[410px] flex items-center justify-center rounded-[20px] shadow-[0_0_1px_rgba(0,0,0,0.075),0_0_2px_rgba(0,0,0,0.075),0_0_4px_rgba(0,0,0,0.075),0_0_8px_rgba(0,0,0,0.075),0_0_16px_rgba(0,0,0,0.075)]"
      //   initial="offscreen"
      //   whileInView="onscreen"
      //   viewport={{ once: true, amount: 0.8 }}
      //   variants={cardVariants}
    >
      RecentRestaurantCard
    </motion.div>
  );
}
