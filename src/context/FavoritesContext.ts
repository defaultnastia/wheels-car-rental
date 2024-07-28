import { createContext, useContext } from "react";

type FavContext = {
  favorites: number[];
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
};

export const FavoritesContext = createContext<FavContext | null>(null);

export const useFavorites = () => useContext(FavoritesContext);
