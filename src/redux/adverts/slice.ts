import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { advertsInitialState } from "../types";
import { getAdverts } from "./operations";

const initialState: advertsInitialState = {
  adverts: [],
  error: null,
  loading: false,
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.adverts = [...state.adverts, ...action.payload];
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
