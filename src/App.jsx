import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Footer from "./layout/footer/footer";
import CatalogPage from "./pages/catalogPage/catalogPage";
import ProductShowCase from "./pages/productShowCase/productShowCase";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog/:id" element={<CatalogPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductShowCase />} />
        <Route path="/product" element={<ProductShowCase />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
