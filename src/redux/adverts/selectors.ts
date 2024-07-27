import { RootState } from "../types";

export const selectAdverts = (state: RootState) => state.adverts;

export const selectFavorites = (state: RootState) => state.favorites;

export const selectCurrentPage = (state: RootState) => state.pages.current;

export const selectTotalPages = (state: RootState) => state.pages.total;
