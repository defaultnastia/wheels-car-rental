import { useEffect, useState } from "react";
import AdvertsList from "../../components/CatalogPageComponents/AdvertsList/AdvertsList";
import { selectAdverts } from "../../redux/adverts/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAdverts } from "../../redux/adverts/operations";
import css from "./CatalogPage.module.css";

//totals are hardcoded because of mock-api limited features
const perPage = 12;
const totals = 32;
const totalPages = Math.ceil(totals / perPage);

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const carAdverts = useAppSelector(selectAdverts);

  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    dispatch(getAdverts(page));
  }, [dispatch, page]);

  return (
    <div className="container">
      {carAdverts.length > 0 ? (
        <AdvertsList carAdverts={carAdverts} />
      ) : (
        <p>No available cars found</p>
      )}
      {carAdverts.length > 0 && page < totalPages && (
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
