import Modal from "react-modal";
import { Advert } from "../../redux/types";
import extractLocation from "../../helpers/extractLocation";
import icons from "../../images/icons.svg";
import customStyles from "./customModalStyles";
import css from "./AdvertModal.module.css";

Modal.setAppElement("#root");

const transformConditions = (condition: string) => {
  if (!condition.includes("age:")) {
    return <li key={condition}> {condition}</li>;
  }

  const spanAge = condition.slice(-2);
  return (
    <li key={condition}>
      {" "}
      Minimum age: <span>{spanAge}</span>
    </li>
  );
};

const onAfterOpen = () => {
  document.body.style.overflow = "hidden";
};

const onAfterClose = () => {
  document.body.style.overflow = "unset";
};

type Props = {
  carAdvert: Advert;
  isOpen: boolean;
  closeModal: () => void;
};

const AdvertModal = ({ carAdvert, isOpen, closeModal }: Props) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = carAdvert;

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={closeModal}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
    >
      <button className={css.close} onClick={closeModal}>
        <svg>
          <use href={`${icons}#close`}></use>
        </svg>
      </button>
      <div className={css.content}>
        <img
          className={css.image}
          src={img}
          alt={`Photo of ${make} ${model}}`}
        />
        <h3 className={css.caption}>
          {make} <span>{model}</span>, {year}
        </h3>
        <ul className={css.subList}>
          <li>{extractLocation(address, "city")}</li>
          <li>{extractLocation(address, "country")}</li>
          <li>{`Id: ${id}`}</li>
          <li>{`Year: ${year}`}</li>
          <li>{`Type: ${type}`}</li>
          <li>{`Fuel Consumption: ${fuelConsumption}`}</li>
          <li>{`Engine Size: ${engineSize}`}</li>
        </ul>
        <p className={css.description}>{description}</p>
        <h4>Accessories and functionalities:</h4>
        <ul className={css.subList}>
          {accessories.map((accessory) => (
            <li key={accessory}>{accessory}</li>
          ))}
        </ul>
        <ul className={css.subList}>
          {functionalities.map((functionality) => (
            <li key={functionality}>{functionality}</li>
          ))}
        </ul>
        <h4 className={css.conditions}>Rental Conditions:</h4>
        <ul className={css.conditionsList}>
          {rentalConditions
            .split("\n")
            .map((condition) => transformConditions(condition))}
          <li>
            Mileage:
            <span>
              {mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </li>
          <li>
            Price: <span>{rentalPrice}</span>
          </li>
        </ul>
        <a className="cta" href="tel:+380730000000">
          Rental car
        </a>
      </div>
    </Modal>
  );
};

export default AdvertModal;
