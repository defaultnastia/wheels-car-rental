// === === === data types === === ===

import store from "./store";

export type Advert = {
  id: number;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
};

export type advertsInitialState = {
  adverts: Advert[] | [];
  favorites: Advert[] | [];
  error: string | null;
  loading: boolean;
  pages: {
    current: number;
    total: number;
  };
};

export type Review = {
  id: string;
  name: string;
  review: string;
};

// === === ===  redux types === === ===

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
