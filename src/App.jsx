import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/homePage";
import Footer from "./layout/footer/footer";
import CatalogPage from "./pages/catalogPage/catalogPage";
import FavoritesPage from "./pages/favoritesPage/favoritesPage";
import ProductShowCase from "./pages/productShowCase/productShowCase";
import Header from "./layout/header/header";
import Cart from "./layout/cart/cart";
import Empty from "./layout/cart/empty/empty";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "./redux/cartSlice/cartSlice";

const App = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const favorites = useSelector((state) => state.favorites.favorites);
  const navigate = useNavigate();

  useEffect(() => {
    if (isCartOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isCartOpen]);

  useEffect(() => {
    dispatch(setIsCartOpen(false));
  }, [navigate, dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div>
      <Header />
      <Cart />
      {isCartOpen && cartItems.length === 0 && <Empty />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog/:id" element={<CatalogPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductShowCase />} />

        <Route path="/favoritesPage" element={<FavoritesPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
