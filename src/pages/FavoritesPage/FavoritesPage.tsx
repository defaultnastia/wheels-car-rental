import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getFavoriteAdvert } from "../../redux/adverts/operations";
import { useFavorites } from "../../context/favoritesContext";
import {
  selectFavorites,
  selectIsLoading,
} from "../../redux/adverts/selectors";
import AdvertsList from "../../components/AdvertsListComponents/AdvertsList/AdvertsList";
import { cleanFavorites } from "../../redux/adverts/actions";
import CustomLoader from "../../components/Loader/CustomLoader";

const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const values = useFavorites();
  const isLoading = useAppSelector(selectIsLoading);

  const favorites = useAppSelector(selectFavorites);

  useEffect(() => {
    values?.favorites.map((id: number) => dispatch(getFavoriteAdvert(id)));
    return () => {
      dispatch(cleanFavorites());
    };
  }, [dispatch, values]);

  return (
    <div className="container">
      {isLoading && <CustomLoader />}

      {favorites.length > 0 && <AdvertsList carAdverts={favorites} />}

      {!isLoading && !favorites.length && (
        <p className="emptyStateText">
          You haven't marked favorite adverts yet 🧐
        </p>
      )}
    </div>
  );
};

export default FavoritesPage;
