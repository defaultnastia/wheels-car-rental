import { Advert } from "../../../redux/types";
import icons from "../../../images/icons.svg";
import css from "./AdvertCard.module.css";

type Props = {
  carAdvert: Advert;
  favorite: boolean | undefined;
  addToFavorites: ((id: number) => void) | undefined;
  removeFromFavorites: ((id: number) => void) | undefined;
};

const extractLocation = (address: string, location: "city" | "country") => {
  const [country, city] = address.split(",").reverse();
  return location === "city" ? city.trim() : country.trim();
};

const AdvertCard = ({
  carAdvert,
  favorite,
  addToFavorites,
  removeFromFavorites,
}: Props) => {
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
        <p>
          {make} <span>{model}</span>, {year}
        </p>
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
      <button>Learn more</button>
    </div>
  );
};

export default AdvertCard;

//  const {
//    year,
//    make,
//    model,
//    type,
//    img,
//    description,
//    fuelConsumption,
//    engineSize,
//    accessories,
//    functionalities,
//    rentalPrice,
//    rentalCompany,
//    address,
//    rentalConditions,
//    mileage,
//  } = carAdvert;
