import AdvertsList from "../../components/AdvertsListComponents/AdvertsList/AdvertsList";
import css from "./CatalogPage.module.css";
import Filter from "../../components/Filter/Filter";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectAdverts,
  selectCurrentPage,
  selectTotalPages,
} from "../../redux/adverts/selectors";
import { cleanAdverts, nextPage } from "../../redux/adverts/actions";
import { useEffect, useState } from "react";
import { getAdverts } from "../../redux/adverts/operations";
import AdvertModal from "../../components/Modal/AdvertModal";
import { Advert } from "../../redux/types";

const CatalogPage = () => {
  const carAdverts = useAppSelector(selectAdverts);
  const totalPages = useAppSelector(selectTotalPages);
  const page = useAppSelector(selectCurrentPage);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<Advert>(null);

  const openModal = (advert) => {
    setModalData(advert);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
      <button onClick={openModal}>Open Modal</button>
      {modalIsOpen && (
        <AdvertModal
          carAdvert={modalData}
          isOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
      <Filter />
      {carAdverts.length > 0 ? (
        <AdvertsList carAdverts={carAdverts} openModal={openModal} />
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
