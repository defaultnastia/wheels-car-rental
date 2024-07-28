import { useState } from "react";
import AdvertCard from "../AdvertCard/AdvertCard";
import AdvertModal from "../../Modal/AdvertModal";
import { Advert } from "../../../redux/types";
import { useFavorites } from "../../../context/FavoritesContext";
import css from "./AdvertsList.module.css";

type Props = {
  carAdverts: Advert[];
};

const AdvertsList = ({ carAdverts }: Props) => {
  const values = useFavorites();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<Advert>(null);

  const openModal = (advert) => {
    setModalData(advert);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const isFavorite = (id: number) => {
    const favoriteList = values?.favorites;
    return favoriteList?.includes(id);
  };

  return (
    <div>
      {modalIsOpen && (
        <AdvertModal
          carAdvert={modalData}
          isOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
      <ul className={css.list}>
        {carAdverts.map((carAdvert: Advert) => {
          const favorite = isFavorite(carAdvert.id);
          return (
            <li key={carAdvert.id}>
              <AdvertCard
                carAdvert={carAdvert}
                favorite={favorite}
                addToFavorites={values?.addToFavorites}
                removeFromFavorites={values?.removeFromFavorites}
                openModal={openModal}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdvertsList;
