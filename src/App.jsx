import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/homePage";
import Footer from "./layout/footer/footer";
import CatalogPage from "./pages/catalogPage/catalogPage";
import FavoritesPage from "./pages/favoritesPage/favoritesPage";
import ProductShowCase from "./pages/productShowCase/productShowCase";
import Header from "./layout/header/header";
import Cart from "./layout/cart/cart";
import Empty from "./layout/cart/empty/empty";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  const favorites = useSelector((state) => state.favorites.favorites);
  const navigate = useNavigate();

 
  useEffect(() => {
    if (isCartOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isCartOpen]);

  useEffect(() => {
    setIsCartOpen(false);
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div>
      <Header setIsCartOpen={setIsCartOpen} cartItems={cartItems}/>
      <Cart
        setIsCartOpen={setIsCartOpen}
        isCartOpen={isCartOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}

      />
      {isCartOpen && <Empty setIsCartOpen={setIsCartOpen} />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog/:id" element={<CatalogPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route
          path="/product/:id"
          element={
            <ProductShowCase
              setCartItems={setCartItems}
              cartItems={cartItems}
              setIsCartOpen={setIsCartOpen}
            />
          }
        />

        <Route path="/favoritesPage" element={<FavoritesPage />} />
      </Routes>
      <Footer />
    </div>
  );
};


export default App;
