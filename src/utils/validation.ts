import { z } from "zod";

export const RestaurantFormSchema = z.object({
  name: z
    .string()
    .min(2, "Must be minimum length of 2.")
    .max(100, "Max length is 100 characters."),
  description: z.string().max(255, "Max length is 255 characters.").optional(),
  address: z
    .string()
    .min(2, "Min length is 2 charactes.")
    .max(255, "Max length is 255 characters."),
  lat: z.number(),
  lng: z.number(),
});
