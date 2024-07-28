import { RootState } from "../types";

export const selectAdverts = (state: RootState) => state.adverts;

export const selectFavorites = (state: RootState) => state.favorites;

export const selectCurrentPage = (state: RootState) => state.pages.current;

export const selectTotalPages = (state: RootState) => state.pages.total;

export const selectIsLoading = (state: RootState) => state.loading;

export const selectIsError = (state: RootState) => state.error;
