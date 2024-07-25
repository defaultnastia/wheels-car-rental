import { configureStore } from "@reduxjs/toolkit";
import advertsReducer from "./adverts/slice";

const store = configureStore({
  reducer: advertsReducer,
});

export default store;
