import React, { createContext, useContext, useState } from "react";

type FavContext = {
  favorites: number[];
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
};

const favoritesContext = createContext<FavContext | null>(null);

export const useFavorites = () => useContext(favoritesContext);
//! === TODO === move context to another file

type Props = {
  children: React.ReactNode;
};

export const FavoritesProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<number[] | []>([]);

  const addToFavorites = (id: number) => {
    setFavorites((prev) => [...prev, id]);
  };

  const removeFromFavorites = (id: number) => {
    const index: number = (favorites as number[]).indexOf(id);
    if (index > -1) setFavorites((prev) => prev.splice(index, 1));
  };

  return (
    <favoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </favoritesContext.Provider>
  );
};
