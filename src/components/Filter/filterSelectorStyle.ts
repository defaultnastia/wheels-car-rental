//! fix dropdown indicator
export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "var(--light-gray-color)",
    flexWrap: "nowrap",
    border: "none",
    boxShadow: state.isFocused ? "none" : "none",
    padding: "6px 16px 6px 18px",
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
  input: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  // indicatorContainer: (provided) => ({
  //   ...provided,
  //   margin: 0,
  //   padding: 0,
  // }),
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
