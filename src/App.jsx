import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Footer from "./layout/footer/footer";
import CatalogPage from "./pages/catalogPage/catalogPage";
import FavoritesPage from "./pages/favoritesPage/favoritesPage";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const App = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog/:id" element={<CatalogPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favoritesPage" element={<FavoritesPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;