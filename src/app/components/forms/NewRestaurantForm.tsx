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
import { Alert } from "@mui/material";
import { useSession } from "next-auth/react";
import CategoriesPickerMenu from "../menus/CategoriesPickerMenu";
import { useRouter } from "next/navigation";
import fetchAPI from "@/utils/fetchUtil";
import FoodAnimationLoader from "../loading/FoodAnimationLoader";

const variants: Variants = {
  left: {
    x: "-100%",
    transition: { ease: "linear", duration: 0.3 },
  },
  center: {
    x: 0,
    transition: { ease: "linear", duration: 0.3 },
  },
  right: {
    x: "100%",
    transition: { ease: "linear", duration: 0.3 },
  },
};

export default function NewRestaurantForm() {
  const { data: session } = useSession();
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
      categories: [],
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof RestaurantFormSchema>> = async (
    data
  ) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("address", data.address);
      formData.append("lat", String(data.lat));
      formData.append("lng", String(data.lng));

      data.images?.forEach((image) => {
        formData.append("images", image);
      });

      data.categories.forEach((category) =>
        formData.append("categories", category)
      );

      const res = await fetchAPI<{ id: string }>("/restaurants", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session?.accessToken?.token}`,
        },
        body: formData,
      });

      router.push(`/restaurants/${res.id}`);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const router = useRouter();
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
      <div className="relative flex flex-col items-center justify-center w-96 lg:w-[45%] h-[500px] border m-auto mt-24 rounded-lg shadow-lg overflow-hidden">
        <FormStepper stepToAnimate={step} />
        <div className="relative w-full h-full overflow-hidden">
          <form onSubmit={handleSubmit(onSubmit)}>
            <motion.div
              initial="center"
              animate={direction[0]}
              variants={variants}
              className="absolute w-full h-full"
            >
              <InputControllerWrapper
                name="name"
                type="text"
                placeholder="Restaurant name*"
                index={1}
                control={control}
              />
              <Controller
                name="categories"
                control={control}
                render={({ field, fieldState }) => (
                  <CategoriesPickerMenu
                    index={2}
                    valid={fieldState.isDirty ? !fieldState.invalid : undefined}
                    onSelect={(value) => {
                      field.onChange([...field.value, value]);
                    }}
                    onDelete={(value) => {
                      field.onChange(
                        field.value.filter((val) => val !== value)
                      );
                    }}
                  />
                )}
              />
              <NewRestaurantButton
                type={"button"}
                title="Next"
                text="Next"
                icon="next"
                onClick={handleSubmitStep1}
                disabled={
                  errors.name ||
                  errors.description ||
                  watch("name") === "" ||
                  errors.categories ||
                  watch("categories").length === 0
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
                    flyTo={true}
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
              {true ? (
                <FoodAnimationLoader />
              ) : (
                <SubmitFormButton submitting={isSubmitting} />
              )}
            </motion.div>
          </form>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={isSubmitSuccessful || errors.images ? true : false}
        autoHideDuration={2000}
        onClose={() => {
          // clearErrors("images");
        }}
      >
        {isSubmitSuccessful ? (
          <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
            Restaurant added successfully!
          </Alert>
        ) : (
          <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
            Image size must be at most 5 MB.
          </Alert>
        )}
      </Snackbar>
    </>
  );
}
