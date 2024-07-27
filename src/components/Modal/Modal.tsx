import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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
    <div>
      <Modal isOpen={true} style={customStyles}>
        <img src={data.img} alt="" />
        <p>
          {data.make} <span>{data.model}</span>, {data.year}
      </Modal>
    </div>
  );
};

export default AdvertModal;
