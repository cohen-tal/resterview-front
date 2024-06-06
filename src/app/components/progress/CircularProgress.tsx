import { Variants, motion } from "framer-motion";

export default function CircularProgress() {
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
    <motion.svg width="40" height="40" viewBox="0 0 40 40">
      <motion.circle
        cx="20"
        cy="20"
        r={radius}
        stroke="#0099ff"
        strokeWidth="10"
        fill="none"
        strokeDasharray={circumference}
        initial="hidden"
        animate="show"
        variants={variants}
      />
    </motion.svg>
  );
}
