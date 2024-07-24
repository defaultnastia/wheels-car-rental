import { configureStore } from "@reduxjs/toolkit";
import advertsReducer from "./cars/slice";

const store = configureStore({
  reducer: advertsReducer,
});

export default store;
