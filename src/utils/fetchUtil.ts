import { RestaurantAPI, RestaurantCard, ReviewAPI } from "../../d";

export default async function fetchAPI<
  T extends
    | RestaurantAPI
    | ReviewAPI
    | RestaurantAPI[]
    | RestaurantCard[]
    | any = any
>(endpoint: string, init?: RequestInit): Promise<T> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
  const url = apiUrl + "/api/v1" + endpoint;

  try {
    const response = await fetch(url, init);
    const responseJson = await response.json();

    if (!response.ok) {
      throw new Error(
        responseJson.message ||
          `Error fetching data: ${response.status}: ${response.statusText}`
      );
    }

    return responseJson as T;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
}
