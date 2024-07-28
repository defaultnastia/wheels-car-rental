import React, { useEffect, useState } from "react";
import { FavoritesContext } from "./FavoritesContext.ts";

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
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
