import React, { createContext, useContext, useEffect, useState } from "react";

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
  const [favorites, setFavorites] = useState<number[] | []>(() => {
    const savedFavorites = window.localStorage.getItem("favorites");
    if (savedFavorites) return JSON.parse(savedFavorites);

    return [];
  });

  useEffect(() => {
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (id: number) => {
    setFavorites((prev) => [...prev, id]);
  };

  const removeFromFavorites = (id: number) => {
    const filteredArray = favorites.filter((item) => {
      if (item !== id) return item;
    });
    setFavorites(filteredArray);
  };

  return (
    <favoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </favoritesContext.Provider>
  );
};
