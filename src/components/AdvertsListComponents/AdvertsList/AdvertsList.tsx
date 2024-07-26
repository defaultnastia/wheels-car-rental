import AdvertCard from "../AdvertCard/AdvertCard";
import { Advert } from "../../../redux/types";
import css from "./AdvertsList.module.css";
import { useFavorites } from "../../../context/favoritesContext";

type Props = {
  carAdverts: Advert[];
};

const AdvertsList = ({ carAdverts }: Props) => {
  const values = useFavorites();

  const isFavorite = (id: number) => {
    const favoriteList = values?.favorites;
    return favoriteList?.includes(id);
  };

  return (
    <div>
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
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdvertsList;
