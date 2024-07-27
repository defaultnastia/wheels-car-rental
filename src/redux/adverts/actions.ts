export const nextPage = (page: number) => {
  return {
    type: "adverts/nextPage",
    payload: page,
  };
};

export const cleanAdverts = () => {
  return {
    type: "adverts/cleanAdverts",
  };
};

export const cleanFavorites = () => {
  return {
    type: "adverts/cleanFavorites",
  };
};
