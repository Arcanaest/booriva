import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import InstaPage from "../../layout/instaPage/instaPage";
import ProductList from "../catalogPage/productList";
import Sidebar from "./Sidebar";
import Title from "../../components/title/title"; // Импортируем Title 
import styles from "./catalogPage.module.sass";

const CatalogPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activePriceFilter, setActivePriceFilter] = useState("all");
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const params = qs.parse(location.search.substring(1));
    try {
      if (params.subcatid) {
        const response = await fetch(
          `https://65588446e93ca47020a966c9.mockapi.io/categoriesCatalog?categoryId=${params.subcatid}`
        );
        if (!response.ok) {
          throw new Error("Ошибка загрузки продуктов");
        }
        const data = await response.json();
        setCategoryName(data[0].menuName);
        setProducts(data[0].products);
        setSubCategoryName(data[0].categoryName);
        fetchSubcategories(data[0].menuId);
      } else {
        const response = await fetch(
          `https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=${id}`
        ); 
        if (!response.ok) {
          throw new Error("Ошибка загрузки продуктов");
        }
        const data = await response.json();
        setCategoryName(data[0].menuName);
        setSubCategoryName(data[0].menuName);
        setProducts(data[0].products);
        fetchSubcategories(data[0].menuId);
      }
    } catch (err) {
      setError(err.message);
      setCategoryName("");
      setSubCategoryName("");
      setProducts([]);
      fetchSubcategories("");
    }
  };

  const fetchSubcategories = async (menuId) => {
    try {
      const response = await fetch(
        `https://640ef1d54ed25579dc40e2a6.mockapi.io/categories?menuId=${menuId}`
      );
      if (!response.ok) {
        throw new Error("Ошибка загрузки подкатегорий");
      }
      const data = await response.json();
      setSubcategories(data[0].categories);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [location]);

  useEffect(() => {
    const params = qs.parse(location.search.substring(1));
    if (params.subcatid) {
      setActiveSubcategory(params.subcatid);
    }
    let filtered = [...products];
    if (params.price) {
      setActivePriceFilter(params.price);
      if (params.price === "all") {
        filtered = products;
      } else if (params.price === "500") {
        filtered = products.filter((product) => product.price <= 500);
      } else if (params.price === "1000") {
        filtered = products.filter(
          (product) => product.price > 500 && product.price <= 1000
        );
      } else if (params.price === "1500") {
        filtered = products.filter(
          (product) => product.price > 1000 && product.price <= 1500
        );
      } else if (params.price === "1500+") {
        filtered = products.filter((product) => product.price > 1500);
      }
    }
    setFilteredProducts(filtered);
  }, [products, location.search]);

  const toNavigate = (id) => {
    navigate("?subcatid=${id}");
  };
  console.log(filteredProducts);

  const filterByPrice = (priceRange) => {
    const params = qs.parse(location.search.substring(1));
    const newParams = { ...params, price: priceRange };
    navigate("?${qs.stringify(newParams)}");
  };

  if (error) return <p>Ошибка: {error}</p>;

  return (
    <>
      {" "}
      <Header />{" "}
      <main>
        {" "}
        <div className={"wrapper " + styles.catalog}>
          {" "}
          <div className={styles.catalog__left__side}>
            {" "}
            <div className={styles.title}>
              {" "}
              <Title
                categoryName={categoryName}
                subCategoryName={subCategoryName}
              />{" "}
            </div>{" "}
            <div className={styles.subcategoryWrapper}>
              {" "}
              <Sidebar
                subcategories={subcategories}
                activeSubcategory={activeSubcategory}
                toNavigate={toNavigate}
                activePriceFilter={activePriceFilter}
                filterByPrice={filterByPrice}
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className={styles.right}>
            {" "}
            <div className={styles.banner}></div>{" "}
            {filteredProducts && filteredProducts.length > 0 ? (
              <ProductList
                products={filteredProducts}

              />
            ) : (
              <div>No products available</div>
            )}{" "}
          </div>{" "}
        </div>{" "}
      </main>{" "}
      <InstaPage />{" "}
    </>
  );
};

export default CatalogPage;
