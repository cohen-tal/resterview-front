import { z } from "zod";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

// Define a schema for a single file
const ImageFileSchema = z
  .instanceof(File)
  .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
    message: "Invalid file type. Only JPEG, JPG, PNG and webp are allowed.",
  })
  .refine((file) => file.size <= MAX_FILE_SIZE, {
    message: `File size should be less than or equal to ${
      MAX_FILE_SIZE / 1000000
    }MB.`,
  });

// Define the schema for the form
export const RestaurantFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must contain at least 2 characters.")
    .max(100, "Name max length is 100 characters."),
  description: z.string().max(255, "Max length is 255 characters.").optional(),
  address: z
    .string()
    .min(2, "Address must contain at least 2 characters.")
    .max(255, "Address max length is 255 characters."),
  lat: z.number(),
  lng: z.number(),
  categories: z.array(z.string()).min(1).max(5),
  images: z.array(ImageFileSchema).optional(),
});

export const ReviewSchema = z.object({
  review: z
    .string()
    .max(255, "Review max length is 255 characters.")
    .optional(),
  rating: z
    .number()
    .min(0.5, "Minimun star rating is 0.5 stars.")
    .max(5, "Maximum star rating is 5 stars."),
  images: z.array(ImageFileSchema).optional(),
});
