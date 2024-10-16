import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../layout/header/header";
import InstaPage from "../../layout/instaPage/instaPage";
import Title from "../../components/title/title";
import ProductList from "../catalogPage/productList";


const CatalogPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=${id}`);
        if (!response.ok) {
          throw new Error("Ошибка загрузки продуктов");
        }
        const data = await response.json();
        
        setProducts(data[0].products);
      } catch (err) {
        setError(err.message);
      } 
    };

    fetchProducts();
  }, [id]);

  if (error) return <p>Ошибка: {error}</p>;

  return (
    <>
      <Header />
      <main>
        <h1>Каталог продуктов</h1>
        <div >
          <div >
            <Title />
          </div>
          <div >
            <ProductList products={products} /> 
          </div>
        </div>
        <InstaPage />
      </main>
    </>
  );
};

export default CatalogPage;
