import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Footer from "./layout/footer/footer";
import CatalogPage from "./pages/catalogPage/catalogPage";
import FavoritesPage from "./pages/favoritesPage/favoritesPage";
import { useEffect, useState } from "react";

const App = () => {
  const [favorites, setFavorites] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route
          path="/catalog/:id"
          element={
            <CatalogPage favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route
          path="/catalog"
          element={
            <CatalogPage favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route
          path="/favoritesPage"
          element={
            <FavoritesPage favorites={favorites} setFavorites={setFavorites} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
