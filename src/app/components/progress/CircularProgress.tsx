import { Variants, motion } from "framer-motion";

interface CircularProgressProps {
  color: string;
}

export default function CircularProgress({ color }: CircularProgressProps) {
  const radius = 10;
  const circumference = 2 * Math.PI * radius;

  const variants: Variants = {
    hidden: { strokeDashoffset: circumference },
    show: {
      strokeDashoffset: [circumference, 0, -circumference],
      transition: {
        duration: 4, // Total duration of the animation cycle
        ease: [0.4, 0, 0.2, 1], // Custom cubic Bezier easing
        times: [0, 0.5, 1], // Keyframe timing
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <motion.svg width="30" height="30" viewBox="xMidYMid meet">
      <motion.circle
        cx="15"
        cy="15"
        r={radius}
        stroke={color}
        strokeWidth="7"
        fill="none"
        strokeDasharray={circumference}
        initial="hidden"
        animate="show"
        variants={variants}
      />
    </motion.svg>
  );
}
