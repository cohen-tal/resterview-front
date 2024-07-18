export interface User {
  id: string;
  name: string;
  image: string;
}

export interface Restaurant extends RestaurantAPI {
  description?: string;
  ratingPercentages: number[] | [number, number, number, number, number];
}

export interface Review {
  id: string;
  rating: string;
  text: string;
}

export interface RecentRestaurantCardData {
  name: string;
  address: string;
  rating: string;
  image: string;
  description: string;
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
  dateAdded: Date;
  dateEdited: Date | null;
}

export interface ReviewAPI {
  id: string;
  text: string;
  rating: number;
  author: User;
  dateAdded: Date;
  dateEdited: Date | null;
}

export interface Token {
  token: string;
  type: "access_token" | "refresh_token";
  expiresAt: number;
}
