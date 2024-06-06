"use client";
import { ReactNode, useCallback, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Variants, motion } from "framer-motion";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "./FormInput";
import FormStepper from "./FormStepper";
import Map from "../map/Map";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InputControllerWrapper from "../wrappers/InputControllerWrapper";
import NewRestaurantButton from "../buttons/NewRestaurantButton";
import InputSearchBox from "./InputSearchBox";
import LocationMarker from "../map/LocationMarker";
import { RestaurantFormSchema } from "@/utils/validation";
import CircularProgress from "../progress/CircularProgress";
import SubmitFormButton from "./SubmitFormButton";

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
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    control,
  } = useForm<z.infer<typeof RestaurantFormSchema>>({
    resolver: zodResolver(RestaurantFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      address: "",
      lat: 0,
      lng: 0,
    },
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

  const setCoords = useCallback(
    (lat: number, lng: number) => {
      setValue("lat", lat, { shouldValidate: true });
      setValue("lng", lng, { shouldValidate: true });
    },
    [setValue]
  );

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
            <input type="text" hidden {...register("address")} />
            <input type="text" hidden {...register("lat")} />
            <input type="text" hidden {...register("lng")} />
            <InputSearchBox
              index={3}
              valid={
                watch("address") === undefined || watch("address") === ""
                  ? undefined
                  : errors.address || errors.lat || errors.lng
                  ? false
                  : true
              }
              onItemClick={[
                setCoords,
                (value: string) =>
                  setValue("address", value, { shouldValidate: true }),
              ]}
            />
            <div className="p-4">
              <Map>
                <LocationMarker
                  title={watch("name")}
                  content={watch("description")}
                  draggable
                  onDrag={setCoords}
                  position={[watch("lat"), watch("lng")]}
                />
              </Map>
            </div>
            <NewRestaurantButton
              type={"button"}
              title="Next"
              text="Next"
              icon="next"
              onClick={handleSubmitStep2}
              disabled={
                errors.address ||
                errors.lat ||
                errors.lng ||
                watch("address") === ""
                  ? true
                  : false
              }
            />
            <NewRestaurantButton
              type={"button"}
              title="Previous"
              text="Previous"
              icon="prev"
              onClick={handlePrevStep2}
              disabled={false}
            />
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
            <SubmitFormButton submitting={isSubmitting} />
          </motion.div>
        </form>
      </div>
    </div>
  );
}
