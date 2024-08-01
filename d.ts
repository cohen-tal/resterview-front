export interface User {
  id: string;
  name: string;
  image: string;
}

export interface Restaurant extends RestaurantAPI {
  description?: string;
  ratingPercentages: number[] | [number, number, number, number, number];
}

export interface RestaurantCardType
  extends Omit<
    RestaurantAPI,
    "lat" | "lng" | "addedBy" | "reviews" | "dateAdded" | "dateEdited"
  > {}

export interface Review {
  id: string;
  rating: string | number;
  likes?: number;
  dislikes?: number;
  text: string;
  images?: string[];
}

export interface Recents {
  restaurants: RecentRestaurant[];
  reviews: RecentReview[];
}

export interface RecentReview
  extends Omit<
    ReviewAPI,
    "images" | "dateAdded" | "dateEdited" | "likes" | "dislikes" | "author"
  > {
  name: string;
  image: string;
  restaurantId: string;
}

export interface RecentRestaurant
  extends Omit<
    RestaurantAPI,
    "lat" | "lng" | "addedBy" | "reviews" | "dateAdded" | "dateEdited"
  > {
  description?: string;
}

export interface Location {
  id: number;
  name: string;
  displayName: string;
  lat: number;
  lon: number;
}

export interface RestaurantAPI {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  rating: number;
  addedBy: User;
  images: string[];
  reviews: ReviewAPI[];
  categories: string[];
  dateAdded: string | Date;
  dateEdited: string | Date | null;
}

export interface ReviewAPI {
  id: string;
  text: string;
  rating: number;
  likes?: number;
  dislikes?: number;
  images?: string[];
  author: User;
  dateAdded: string | Date;
  dateEdited: string | Date | null;
}

export interface Token {
  token: string;
  type: "access_token" | "refresh_token";
  expiresAt: number;
}
