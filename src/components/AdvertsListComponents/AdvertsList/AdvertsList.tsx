import AdvertCard from "../AdvertCard/AdvertCard";
import { Advert } from "../../../redux/types";
import css from "./AdvertsList.module.css";
import { useFavorites } from "../../../context/favoritesContext";
import { useState } from "react";
import AdvertModal from "../../Modal/AdvertModal";

type Props = {
  carAdverts: Advert[];
  // openModal?: (advert: Advert) => void;
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
