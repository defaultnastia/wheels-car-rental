import { useEffect } from "react";
import AdvertsList from "../../components/CatalogPageComponents/AdvertsList/AdvertsList";
import { selectAdverts } from "../../redux/cars/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAdverts } from "../../redux/cars/operations";

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const carAdverts = useAppSelector(selectAdverts);

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  return (
    <div className="container">
      <AdvertsList carAdverts={carAdverts} />
    </div>
  );
};

export default CatalogPage;
