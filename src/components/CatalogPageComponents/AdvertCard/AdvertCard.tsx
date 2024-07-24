import { Advert } from "../../../redux/types";
import css from "./AdvertCard.module.css";

type Props = {
  carAdvert: Advert;
};

const extractLocation = (address: string, location: "city" | "country") => {
  const [country, city] = address.split(",").reverse();
  return location === "city" ? city.trim() : country.trim();
};

const AdvertCard = ({ carAdvert }: Props) => {
  const {
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
  return (
    <div className={css.card}>
      <img src={img} alt={model} />
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
