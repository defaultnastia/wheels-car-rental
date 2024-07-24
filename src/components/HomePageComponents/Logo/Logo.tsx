import icons from "../../../images/icons.svg";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <a className={css.logo} href="/">
      <svg>
        <use href={`${icons}#logo`}></use>
      </svg>
      Wheels
    </a>
  );
};

export default Logo;
