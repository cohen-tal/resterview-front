"use client";
import { ReactNode, useState } from "react";
import FormInput from "./FormInput";
import FormStepper from "./FormStepper";
import { Variants, motion } from "framer-motion";
import Map from "../map/Map";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm, SubmitHandler } from "react-hook-form";
import z from "zod";
import { RestaurantFormSchema } from "@/utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import InputControllerWrapper from "../wrappers/InputControllerWrapper";
import NewRestaurantButton from "../buttons/NewRestaurantButton";
import InputSearchBox from "./InputSearchBox";

const variants: Variants = {
  left: {
    x: "-100%",
    transition: { ease: "linear", duration: 1 },
  },
  center: {
    x: 0,
    transition: { ease: "linear", duration: 1 },
  },
  right: {
    x: "100%",
    transition: { ease: "linear", duration: 1 },
  },
};

function renderNextButton(
  onClick: () => void,
  disabled: boolean = true,
  type: "button" | "reset" | "submit" = "button"
): ReactNode {
  return (
    <motion.button
      className="absolute flex items-center justify-center border border-slate-300 rounded-full w-28 h-12 bg-slate-100/30 right-12 mt-1 mr-6 shadow-sm"
      type={type}
      title="Next"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={onClick}
      disabled={disabled}
    >
      Next
      <ArrowForwardIcon />
    </motion.button>
  );
}

function renderPrevButton(onClick: () => void): ReactNode {
  return (
    <motion.button
      className="absolute flex items-center justify-center border border-slate-300 rounded-full w-28 h-12 bg-slate-100/30 left-12 mt-1 ml-6 shadow-sm"
      type="button"
      title="Next"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={onClick}
    >
      <ArrowBackIcon />
      Previous
    </motion.button>
  );
}

export default function NewRestaurantForm() {
  const {
    watch,
    handleSubmit,
    formState: { errors, isDirty },
    control,
  } = useForm<z.infer<typeof RestaurantFormSchema>>({
    resolver: zodResolver(RestaurantFormSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<z.infer<typeof RestaurantFormSchema>> = (
    data
  ) => {
    console.log(data);
  };

  const [step, setStep] = useState<string>("step1");
  const [direction, setDirection] = useState<string[]>([
    "center",
    "right",
    "right",
  ]);

  function handleSubmitStep1() {
    setDirection((prev) => {
      const newState = [...prev];
      newState[0] = "left";
      newState[1] = "center";
      return newState;
    });
    setStep("step2");
  }

  function handleSubmitStep2() {
    setDirection((prev) => {
      const newState = [...prev];
      newState[0] = "left";
      newState[1] = "left";
      newState[2] = "center";
      return newState;
    });
    setStep("step3");
  }

  function handlePrevStep2() {
    setDirection((prev) => {
      const newState = [...prev];
      newState[0] = "center";
      newState[1] = "right";
      return newState;
    });
    setStep("step1");
  }

  return (
    <div className="relative flex flex-col items-center justify-center w-96 lg:w-[45%] h-[500px] border m-auto rounded-lg shadow-lg overflow-hidden">
      <FormStepper stepToAnimate={step} />

      <div className="relative w-full h-full overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit)}>
          <motion.div
            initial="center"
            animate={direction[0]}
            variants={variants}
            className="absolute w-full"
          >
            <InputControllerWrapper
              name="name"
              type="text"
              placeholder="Restaurant name*"
              index={1}
              control={control}
            />
            <InputControllerWrapper
              name="description"
              type="text"
              placeholder="Description"
              index={2}
              control={control}
              isTextArea
            />
            <NewRestaurantButton
              type={"button"}
              title="Next"
              text="Next"
              icon="next"
              onClick={handleSubmitStep1}
              disabled={
                errors.name || errors.description || watch("name") === undefined
                  ? true
                  : false
              }
            />
          </motion.div>
          <motion.div
            initial="right"
            animate={direction[1]}
            variants={variants}
            className="absolute w-full"
          >
            {/* <InputControllerWrapper
              type="text"
              name="address"
              placeholder="Address"
              index={3}
              control={control}
            /> */}
            <InputSearchBox index={3} valid />
            <div className="p-4">
              <Map />
            </div>
            {renderNextButton(
              () => {
                setDirection((prev) => {
                  const newState = [...prev];
                  newState[0] = "left";
                  newState[1] = "left";
                  newState[2] = "center";
                  return newState;
                });
                setStep("step3");
              },
              errors.address ? true : false
            )}
            {renderPrevButton(() => {
              setDirection((prev) => {
                const newState = [...prev];
                newState[0] = "center";
                newState[1] = "right";
                return newState;
              });
              setStep("step1");
            })}
          </motion.div>
          <motion.div
            initial="right"
            animate={direction[2]}
            variants={variants}
            className="absolute w-full"
          >
            <FormInput
              type="file"
              accept="image/*"
              multiple
              name="images"
              placeHolder="Upload Images"
              index={5}
            />
            <button type="submit">Send</button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
