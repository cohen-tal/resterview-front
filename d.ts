export interface User {
  id: string;
  name: string;
  image: string;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  rating: number;
  address: string;
  lat: number;
  lng: number;
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

export interface Token {
  token: string;
  type: "access_token" | "refresh_token";
  expiresAt: number;
}
