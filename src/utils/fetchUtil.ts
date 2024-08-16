import { Recents, RestaurantAPI, RestaurantCardType, ReviewAPI } from "../../d";

interface ResponseFromAPI<T> {
  data: T;
  statusCode: string | number;
}

export default async function fetchAPI<T extends unknown = any>(
  endpoint: string,
  init?: RequestInit
): Promise<T> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
  const url = apiUrl + "/api/v1" + endpoint;

  try {
    const response = await fetch(url, init);
    const responseJson = await response.json(); // My API always returns a json with a message so it is safe to parse the body

    if (!response.ok) {
      throw new Error(
        responseJson.message ||
          `Error fetching data: ${response.status}: ${response.statusText}`
      );
    }

    return responseJson as T;
  } catch (err) {
    // console.error(err);
    console.dir(err);
    return Promise.reject(err);
  }
}
