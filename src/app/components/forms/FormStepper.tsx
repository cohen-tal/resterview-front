"use client";
import { Variants, motion } from "framer-motion";
import Step from "./Step";

const variants: Variants = {
  step1: {
    x: "-66%",
    transition: { ease: "linear", duration: 1 },
  },
  step2: {
    x: "-33%",
    transition: { ease: "linear", duration: 1 },
  },
  step3: {
    x: "0%",
    transition: { ease: "linear", duration: 1 },
  },
};

export default function FormStepper({
  stepToAnimate,
}: {
  stepToAnimate: string;
}) {
  return (
    <div className="relative flex items-center justify-evenly w-full border-b-2 shadow-sm">
      <Step text="Step 1" />
      <Step text="Step 2" />
      <Step text="Step 3" />
      <motion.div
        className="arrow-right"
        initial={{ x: "-100%" }}
        animate={stepToAnimate}
        variants={variants}
      />
    </div>
  );
}
