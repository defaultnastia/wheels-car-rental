import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const advertsInstance = axios.create({
  baseURL: "https://669faff8b132e2c136fec738.mockapi.io",
});

export const getAdverts = createAsyncThunk(
  "adverts/getAdverts",
  async (page: number, thunkAPI) => {
    try {
      const response = await advertsInstance.get(
        `/adverts?page=${page}&limit=12`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).message);
    }
  }
);

export const getFavoriteAdvert = createAsyncThunk(
  "adverts/getFavoriteAdvert",
  async (id: number, thunkAPI) => {
    try {
      const response = await advertsInstance.get(`/adverts?id=${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).message);
    }
  }
);

export const getFilteredAdverts = createAsyncThunk(
  "adverts/getFilteredAdverts",
  async (make: string, thunkAPI) => {
    try {
      const response = await advertsInstance.get(`/adverts?make=${make}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).message);
    }
  }
);
