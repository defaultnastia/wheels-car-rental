import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAdverts } from "../../redux/adverts/operations";
import { cleanAdverts, nextPage } from "../../redux/adverts/actions";
import {
  selectAdverts,
  selectCurrentPage,
  selectIsLoading,
  selectTotalPages,
} from "../../redux/adverts/selectors";
import CustomLoader from "../../components/Loader/CustomLoader";
import Filter from "../../components/Filter/Filter";
import AdvertsList from "../../components/AdvertsListComponents/AdvertsList/AdvertsList";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const carAdverts = useAppSelector(selectAdverts);
  const totalPages = useAppSelector(selectTotalPages);
  const page = useAppSelector(selectCurrentPage);
  const isLoading = useAppSelector(selectIsLoading);

  const dispatch = useAppDispatch();

  const handleLoadMore = () => {
    const newPage = page + 1;
    dispatch(nextPage(newPage));
  };

  useEffect(() => {
    dispatch(getAdverts(page));
  }, [dispatch, page]);

  useEffect(() => {
    return () => {
      dispatch(cleanAdverts());
    };
  }, [dispatch]);

  return (
    <div className="container">
      {isLoading && <CustomLoader />}

      <Filter />

      {carAdverts.length > 0 && <AdvertsList carAdverts={carAdverts} />}

      {!isLoading && !carAdverts.length && (
        <p className="emptyStateText">No available cars found 🤷🏾‍♂️</p>
      )}

      {carAdverts.length > 0 && carAdverts.length > 11 && page < totalPages && (
        <button
          className={css.more}
          onClick={() => {
            handleLoadMore();
          }}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
