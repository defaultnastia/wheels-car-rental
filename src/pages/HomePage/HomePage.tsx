import Reviews from "../../components/Reviews/Reviews";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className={css.hero}>
        <h1>Hi traveler, we are WHEELS!</h1>
        <h3>
          Welcome to our car rental service, where convenience meets
          reliability!
        </h3>
      </div>
      <h2 className={css.title}>We Offer</h2>
      <ul className={css.promoList}>
        <li>
          <h3>Rent a car for any purpose</h3>
          <p>
            Whether you're planning a road trip, need a vehicle for business, or
            require a temporary ride while yours is in the shop, we've got you
            covered with a diverse fleet of top-quality cars, SUVs, and vans
            confidence!
          </p>
        </li>
        <li>
          <h3>Book a ride easily</h3>
          <p>
            Our seamless booking process, competitive rates, and exceptional
            customer service ensure a hassle-free experience every time. Trust
            us for your transportation needs and enjoy the freedom of the open
            road with confidence
          </p>
        </li>
      </ul>
      <h2 className={css.title}>Reviews</h2>
      <Reviews />
    </div>
  );
};

export default HomePage;
