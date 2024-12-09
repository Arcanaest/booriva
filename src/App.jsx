import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/homePage";
import Footer from "./layout/footer/footer";
import CatalogPage from "./pages/catalogPage/catalogPage";
import ProductShowCase from "./pages/productShowCase/productShowCase";
import Header from "./layout/header/header";
import Cart from "./layout/cart/cart";
import Empty from "./layout/cart/empty/empty";
import { useEffect, useState } from "react";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isVisibles, setIsVisibles] = useState(false);
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
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
  return (
    <div>
      <Header setIsCartOpen={setIsCartOpen} />
      <Cart
        setIsCartOpen={setIsCartOpen}
        isCartOpen={isCartOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setIsVisibles={setIsVisibles}
      />
      {isVisibles && <Empty setIsVisibles={setIsVisibles} />}
      
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
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
