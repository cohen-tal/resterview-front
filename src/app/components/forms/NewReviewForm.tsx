"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import StarRatingInput from "../rating/StarRatingInput";
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ReviewSchema } from "@/utils/validation";
import InputControllerWrapper from "../wrappers/InputControllerWrapper";
import SubmitFormButton from "./SubmitFormButton";
import { useSession } from "next-auth/react";

export default function NewReviewForm() {
  const { data: session } = useSession();
  const {
    register,
    watch,
    clearErrors,
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
    console.log(data);
    // try {
    //   const res = await fetch("http://localhost:8080/api/v1/restaurants", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (!res.ok) {
    //     // Handle HTTP errors
    //     throw new Error(`HTTP error! status: ${res.status}`);
    //   }

    //   const jsonResponse = await res.json();
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  };

  return (
    <form
      className="flex flex-col items-center justify-center p-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type="hidden" {...register("rating")} />
      <StarRatingInput
        rating="stars"
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
      <SubmitFormButton />
    </form>
  );
}
