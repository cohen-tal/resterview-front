export interface User {
  id: string;
  name: string;
  image: string;
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
