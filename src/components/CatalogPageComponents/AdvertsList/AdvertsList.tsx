import AdvertCard from "../AdvertCard/AdvertCard";
import { Advert } from "../../../redux/types";

type Props = {
  carAdverts: Advert[];
};

const AdvertsList = ({ carAdverts }: Props) => {
  return (
    <div>
      <ul>
        {carAdverts.map((carAdvert: Advert) => (
          <li key={carAdvert.id}>
            <AdvertCard carAdvert={carAdvert} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdvertsList;
