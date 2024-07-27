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
      .addCase(getAdverts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAdverts.rejected, (state, action) => {
        state.error = String(action.payload);
      })
      .addMatcher(isAnyOf(isRejected, isFulfilled), (state) => {
        state.loading = false;
      })
      .addMatcher(isAnyOf(isPending, isFulfilled), (state) => {
        state.error = null;
      });
  },
});

export default advertsSlice.reducer;
