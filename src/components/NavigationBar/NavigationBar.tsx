import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import css from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <div className={css.stripe}>
      <div className={css.navbar}>
        <Logo></Logo>
        <nav className={css.navlist}>
          <ul>
            <li>
              <NavLink to="/catalog">Catalog</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
