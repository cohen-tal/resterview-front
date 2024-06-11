"use client";
import { useCallback, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Variants, motion } from "framer-motion";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormStepper from "./FormStepper";
import Map from "../map/Map";
import InputControllerWrapper from "../wrappers/InputControllerWrapper";
import NewRestaurantButton from "../buttons/NewRestaurantButton";
import InputSearchBox from "./InputSearchBox";
import LocationMarker from "../map/LocationMarker";
import { RestaurantFormSchema } from "@/utils/validation";
import SubmitFormButton from "./SubmitFormButton";
import ImageUpload from "../image-upload/ImageUpload";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import { Alert } from "@mui/material";

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

export default function NewRestaurantForm() {
  const {
    register,
    watch,
    clearErrors,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
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

  const onSubmit: SubmitHandler<z.infer<typeof RestaurantFormSchema>> = async (
    data
  ) => {
    try {
      const res = await fetch("http://localhost:8080/api/v1/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        // Handle HTTP errors
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const jsonResponse = await res.json();
      console.log(jsonResponse);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
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
    <>
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
                  errors.name || errors.description || watch("name") === ""
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
              className="absolute flex flex-col w-full h-full"
              initial="right"
              animate={direction[2]}
              variants={variants}
            >
              {/* <ImageUpload /> */}
              <Controller
                name="images"
                control={control}
                render={({ field, fieldState }) => (
                  <ImageUpload
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
              <SubmitFormButton submitting={isSubmitting} showText={false} />
            </motion.div>
          </form>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={isSubmitSuccessful || errors.images ? true : false}
        autoHideDuration={2000}
        onClose={() => {
          clearErrors("images");
        }}
      >
        {isSubmitSuccessful ? (
          <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
            Restaurant added successfully!
          </Alert>
        ) : (
          <Alert
            // onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Image size must be at most 3 MB.
          </Alert>
        )}
      </Snackbar>
    </>
  );
}
