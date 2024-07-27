import Modal from "react-modal";
import extractLocation from "../../helpers/extractLocation";
import css from "./AdvertModal.module.css";
import customStyles from "./customModalStyles";

const data = {
  id: 9001,
  year: 2008,
  make: "Buick",
  model: "Enclave",
  type: "SUV",
  img: "https://ftp.goit.study/img/cars-test-task/buick_enclave.jpeg",
  description:
    "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
  fuelConsumption: "10.5",
  engineSize: "3.6L V6",
  accessories: ["Leather seats", "Panoramic sunroof", "Premium audio system"],
  functionalities: ["Power liftgate", "Remote start", "Blind-spot monitoring"],
  rentalPrice: "$40",
  rentalCompany: "Luxury Car Rentals",
  address: "123 Example Street, Kyiv, Ukraine",
  rentalConditions:
    "Minimum age: 25\nValid driver's license\nSecurity deposit required",
  mileage: 5858,
};

Modal.setAppElement("#root");

const AdvertModal = () => {
  return (
    <Modal isOpen={true} style={customStyles}>
      <div className={css.content}>
        <img
          className={css.image}
          src={data.img}
          alt={`Photo of ${data.make} ${data.model}}`}
        />
        <h3 className={css.caption}>
          {data.make} <span>{data.model}</span>, {data.year}
        </h3>
        <ul className={css.subList}>
          <li>{extractLocation(data.address, "city")}</li>
          <li>{extractLocation(data.address, "country")}</li>
          <li>{`Id: ${data.id}`}</li>
          <li>{`Year: ${data.year}`}</li>
          <li>{`Type: ${data.type}`}</li>
          <li>{`Fuel Consumption: ${data.fuelConsumption}`}</li>
          <li>{`Engine Size: ${data.engineSize}`}</li>
        </ul>
        <p className={css.description}>{data.description}</p>
        <h4>Accessories and functionalities:</h4>
        <ul className={css.subList}>
          {data.accessories.map((accessory) => (
            <li key={accessory}>{accessory}</li>
          ))}
        </ul>
        <ul className={css.subList}>
          {data.functionalities.map((functionality) => (
            <li key={functionality}>{functionality}</li>
          ))}
        </ul>
        <h4 className={css.conditions}>Rental Conditions:</h4>
        <ul className={css.conditionsList}>
          {data.rentalConditions.split("\n").map((condition) => (
            <li key={condition}>{condition}</li>
          ))}
          <li>{`Mileage: ${data.mileage}`}</li>
          <li>{`Price: ${data.rentalPrice}`}</li>
        </ul>
        <button>Rental car</button>
      </div>
    </Modal>
  );
};

export default AdvertModal;
