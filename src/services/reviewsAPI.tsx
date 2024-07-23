import axios, { AxiosResponse } from "axios";

const reviewsInstance = axios.create({
  baseURL: "https://669faff8b132e2c136fec738.mockapi.io",
});

export type Review = {
  id: string;
  name: string;
  review: string;
};

export const getReviews = async (): Promise<Review[] | null> => {
  try {
    const response: AxiosResponse<Review[]> = await reviewsInstance.get(
      "/reviews"
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
