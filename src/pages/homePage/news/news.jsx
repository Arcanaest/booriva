import { useEffect } from "react";
import ProductCard from "../../../components/productCard/productCard";
import Title from "../../../components/title/title";
import styles from "./news.module.sass";
import { useState } from "react";

const News = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=000")
      .then((res) => res.json())
      .then((res) => setProducts(res[0].products.slice(0, 4)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={styles.news}>
      <div className="wrapper">
      <Title categoryName="Новинки" subCategoryName="Новинки" />
      </div>
      <div className={styles.grid}>
        {products.map(({ id, images, name, price }) => (
          <ProductCard key={id} image={images[0]} name={name} price={price} />
        ))}
      </div>
    </div>
  );
};

export default News;
