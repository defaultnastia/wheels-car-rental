import axios, { AxiosError, AxiosResponse } from "axios";
import toast from "react-hot-toast";

export type Review = {
  id: string;
  name: string;
  review: string;
};

const reviewsInstance = axios.create({
  baseURL: "https://66e1613cc831c8811b54bb97.mockapi.io/api",
});

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
