import { Advert } from "../../../redux/types";
import icons from "../../../images/icons.svg";
import css from "./AdvertCard.module.css";
import extractLocation from "../../../helpers/extractLocation";
import { useMediaQuery } from "react-responsive";

type Props = {
  carAdvert: Advert;
  favorite: boolean | undefined;
  addToFavorites: ((id: number) => void) | undefined;
  removeFromFavorites: ((id: number) => void) | undefined;
  openModal: (advert: Advert) => void;
};

const AdvertCard = ({
  carAdvert,
  favorite,
  addToFavorites,
  removeFromFavorites,
  openModal,
}: Props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = carAdvert;

  const handleLikeButton = () => {
    favorite ? removeFromFavorites(id) : addToFavorites(id);
  };

  const handleOpenModal = () => {
    openModal(carAdvert);
  };

  return (
    <div className={css.card}>
      <div className={css.image}>
        <img src={img} alt={model} />
        <button onClick={handleLikeButton}>
          <svg className={favorite ? css.like : css.default}>
            <use href={`${icons}#like`}></use>
          </svg>
        </button>
      </div>
      <div className={css.caption}>
        <h3>
          {make} <span>{model}</span>, {year}
        </h3>
        <p>{rentalPrice}</p>
      </div>
      <ul>
        <li>{extractLocation(address, "city")}</li>
        <li>{extractLocation(address, "country")}</li>
        <li>{rentalCompany}</li>
        <li>{type}</li>
        <li>{make}</li>
        <li>{mileage}</li>
        <li>{functionalities[0]}</li>
      </ul>
      {isMobile ? (
        <a className="cta" href="tel:+380730000000">
          Call us to learn more
        </a>
      ) : (
        <button onClick={handleOpenModal}>Call us to learn more</button>
      )}
    </div>
  );
};

export default AdvertCard;
