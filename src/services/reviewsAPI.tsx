import axios, { AxiosError, AxiosResponse } from "axios";
import toast from "react-hot-toast";

const reviewsInstance = axios.create({
  baseURL: "https://669faff8b132e2c136fec738.mockapi.io",
});

export type Review = {
  id: string;
  name: string;
  review: string;
};

export const getReviews = async (): Promise<Review[] | []> => {
  try {
    const response: AxiosResponse<Review[]> = await reviewsInstance.get(
      "/reviews"
    );
    return response.data;
  } catch (error) {
    toast.error(`Could't fetch the reviews: ${(error as AxiosError).message}`);
    return [];
  }
};
