import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { advertsInitialState } from "../types";
import {
  getAdverts,
  getFilteredAdverts,
  getFavoriteAdvert,
} from "./operations";

// total pages are hardcoded because of mock-api limited features
const perPage = 12;
const totals = 32;
const totalPages = Math.ceil(totals / perPage);

const initialState: advertsInitialState = {
  adverts: [],
  favorites: [],
  error: null,
  loading: false,
  pages: {
    current: 1,
    total: totalPages,
  },
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    nextPage(state, action) {
      state.pages.current = action.payload;
    },
    cleanAdverts(state) {
      state.adverts = [];
    },
    cleanFavorites(state) {
      state.favorites = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.adverts = [...state.adverts, ...action.payload];
      })
      .addCase(getFavoriteAdvert.fulfilled, (state, action) => {
        state.favorites = [...state.favorites, ...action.payload];
      })
      .addCase(getFilteredAdverts.fulfilled, (state, action) => {
        state.adverts = action.payload;
      })
      .addMatcher(isRejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
      })
      .addMatcher(isFulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isPending, (state) => {
        state.error = null;
        state.loading = true;
      });
  },
});

export default advertsSlice.reducer;
