"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import StarRatingInput from "../rating/StarRatingInput";
import z from "zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ReviewSchema } from "@/utils/validation";
import InputControllerWrapper from "../wrappers/InputControllerWrapper";
import SubmitFormButton from "./SubmitFormButton";
import { useSession } from "next-auth/react";
import ImageUpload from "../image-upload/ImageUpload";
import { useParams, useRouter } from "next/navigation";
import Alert from "@mui/material/Alert/Alert";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import fetchAPI from "@/utils/fetchUtil";

export default function NewReviewForm() {
  const { data: session } = useSession();
  const [submitSuccessful, setSubmitSuccessful] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const { restaurantId } = useParams();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    control,
  } = useForm<z.infer<typeof ReviewSchema>>({
    resolver: zodResolver(ReviewSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<z.infer<typeof ReviewSchema>> = async (
    data
  ) => {
    const formData = new FormData();
    formData.append("review", data.review ?? "");
    formData.append("rating", data.rating.toString());
    formData.append("restaurantId", restaurantId as string);

    if (data.images) {
      for (let i = 0; i < data.images.length; i++) {
        formData.append("images", data.images[i]);
      }
    }

    try {
      const res = await fetchAPI("/reviews", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session?.accessToken?.token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        // Handle HTTP errors
        throw new Error(res.statusText);
      }
      setSubmitSuccessful(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(true);
    }
  };

  return (
    <>
      <form
        className="flex flex-col items-center justify-center gap-2 w-full h-fit border rounded-lg shadow-md p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" {...register("rating")} />
        <StarRatingInput
          ratingType="stars"
          fontSize="3.5rem"
          defaultValue={0}
          getValue={(value) => {
            setValue("rating", value);
            console.log(value);
          }}
        />
        <InputControllerWrapper
          control={control}
          name="review"
          placeholder="Write a review"
          isTextArea
          type="text"
        />
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
        <SubmitFormButton />
      </form>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={submitSuccessful}
        autoHideDuration={2000}
        onClose={() => {
          router.push(`/restaurants/${restaurantId}`);
        }}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Restaurant added successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={submitError}
        autoHideDuration={2000}
        onClose={() => {
          setSubmitError(false);
        }}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          Error submitting review, please try again shortly.
        </Alert>
      </Snackbar>
    </>
  );
}
