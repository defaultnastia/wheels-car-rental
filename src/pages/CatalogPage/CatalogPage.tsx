import AdvertsList from "../../components/AdvertsListComponents/AdvertsList/AdvertsList";
import css from "./CatalogPage.module.css";
import Filter from "../../components/Filter/Filter";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectAdverts,
  selectCurrentPage,
  selectTotalPages,
} from "../../redux/adverts/selectors";
import { nextPage } from "../../redux/adverts/actions";

const CatalogPage = () => {
  const carAdverts = useAppSelector(selectAdverts);
  const totalPages = useAppSelector(selectTotalPages);
  const page = useAppSelector(selectCurrentPage);

  const dispatch = useAppDispatch();

  const handleLoadMore = () => {
    const newPage = page + 1;
    dispatch(nextPage(newPage));
  };

  return (
    <div className="container">
      <Filter />
      {carAdverts.length > 0 ? (
        <AdvertsList carAdverts={carAdverts} />
      ) : (
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
