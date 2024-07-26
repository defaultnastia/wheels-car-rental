import Select from "react-select";
import css from "./Filter.module.css";

const makesArray = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land",
];

const optionsMake = makesArray.map((make) => ({
  label: make,
  value: make,
}));

optionsMake.push({ label: "None", value: "" });

const customStyles = {
  control: (provided) => ({
    ...provided,
    background: "var(--light-gray-color)",
    flexWrap: "nowrap",
    border: "none",
    padding: "14px 18px",
    borderRadius: "14px",
    width: "224px",
    fontSize: "18px",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
    fontWeight: "500",
    color: "var(--black-color)",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "var(--black-color)",
  }),
  menu: (provided) => ({
    ...provided,
    fontWeight: "500",
    padding: "2px 8px",
    background: "var(--white-color)",
    width: "224px",
    border: "1px solid var(--light-gray-color)",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "272px",
    padding: "12px 10px 12px",
    borderRadius: "14px",
  }),
  option: (_, state) => ({
    color: state.isSelected ? "var(--black-color)" : "var(--subtext-color)",
    marginBottom: "8px",
    cursor: "pointer",
  }),
};

type FilterOptions = {
  make: string;
  price: string;
  mileageFrom: string;
  mileageTo: string;
};

const Filter = () => {
  const initialValues: FilterOptions = {
    make: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
  };

  const submitFilter = (values: FilterOptions) => {
    console.log(values);
  };

  return (
    <div>
      <form action="">
        <Select
          placeholder={"Enter the text"}
          styles={customStyles}
          options={optionsMake}
          // menuIsOpen={true}
        ></Select>
        <button className={css.submit} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Filter;
