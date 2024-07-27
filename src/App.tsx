import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import Layout from "./Layout";
import { Toaster } from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { useEffect } from "react";
import { getAdverts } from "./redux/adverts/operations";
import { selectCurrentPage } from "./redux/adverts/selectors";
import { cleanAdverts } from "./redux/adverts/actions";

function App() {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(getAdverts(page));
  }, [dispatch, page]);

  useEffect(() => {
    return () => {
      dispatch(cleanAdverts());
    };
  }, [dispatch]);

  return (
    <Layout>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
