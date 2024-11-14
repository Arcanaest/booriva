import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import qs from "qs";
import Header from "../../layout/header/header";
import InstaPage from "../../layout/instaPage/instaPage";
import Title from "../../components/title/title";
import ProductList from "../catalogPage/productList";
import styles from "./catalogPage.module.sass";

const CatalogPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState([]); // Фильтрация по цене
  const [activePriceFilter, setActivePriceFilter] = useState("all"); // Узнаем активный фильтр
  const [activeSubcategory, setActiveSubcategory] = useState(null); // Состояние для активной подкатегории

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
        fetchSubcategories(data[0].menuId); // Запрос подкатегорий с использованием menuId
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
        fetchSubcategories(data[0].menuId); // Запрос подкатегорий с использованием menuId
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
    // Фильтрация продуктов по цене
    const params = qs.parse(location.search.substring(1));
    if (params.subcatid) {
      setActiveSubcategory(params.subcatid); // Установка активной подкатегории при загрузке
    }
    let filtered = [...products];

    if (params.price) {
      setActivePriceFilter(params.price); // Установка активного фильтра
      if (params.price === "all") {
        filtered = products; // Все продукты
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
    navigate(`?subcatid=${id}`);
  };

  const filterByPrice = (priceRange) => {
    const params = qs.parse(location.search.substring(1));
    const newParams = { ...params, price: priceRange };
    navigate(`?${qs.stringify(newParams)}`);
  };

  if (error) return <p>Ошибка: {error}</p>;

  return (
    <>
      <Header />
      <main>
        <div className={"wrapper " + styles.catalog}>
          <div>
            <div className={styles.catalog__left__side}>
              <div className={styles.title}>
                <Title
                  categoryName={categoryName}
                  subCategoryName={subCategoryName}
                >
                  {categoryName}
                </Title>
              </div>
              <div>
                <div className={styles.subcategoryWrapper}>
                  {categoryName !== "Новинки" && (
                    <div className={styles.filters}>
                      <div className={styles.subcategories}>
                        <h3 className={styles.left__side__title}>
                          ПОДКАТЕГОРИИ:
                        </h3>
                        <div className={styles.title__items}>
                          {subcategories.map((subcategory) => (
                            <div
                              onClick={() => toNavigate(subcategory.id)}
                              key={subcategory.id}
                              className={`${styles.left__side__item} ${
                                activeSubcategory === subcategory.id
                                  ? styles.active
                                  : ""
                              }`}
                            >
                              {subcategory.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.price}>
                  <h3 className={styles.left__side__title}>ЦЕНЫ:</h3>
                  <div className={styles.title__items}>
                    <ul type="circle">
                      <li
                        onClick={() => filterByPrice("all")}
                        className={`${styles.left__side__item} ${
                          activePriceFilter === "all" ? styles.active : ""
                        }`}
                      >
                        Все цены
                      </li>
                      <li
                        onClick={() => filterByPrice("500")}
                        className={`${styles.left__side__item} ${
                          activePriceFilter === "500" ? styles.active : ""
                        }`}
                      >
                        до 500
                      </li>
                      <li
                        onClick={() => filterByPrice("1000")}
                        className={`${styles.left__side__item} ${
                          activePriceFilter === "1000" ? styles.active : ""
                        }`}
                      >
                        500 — 1000
                      </li>
                      <li
                        onClick={() => filterByPrice("1500")}
                        className={`${styles.left__side__item} ${
                          activePriceFilter === "1500" ? styles.active : ""
                        }`}
                      >
                        1000 — 1500
                      </li>
                      <li
                        onClick={() => filterByPrice("1500+")}
                        className={`${styles.left__side__item} ${
                          activePriceFilter === "1500+" ? styles.active : ""
                        }`}
                      >
                        от 1500
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.sizes}>
                  <h3 className={styles.left__side__title}>РАЗМЕР:</h3>
                  <div className={styles.title__items}>
                    <ul type="circle">
                      <li className={styles.left__side__item}>XS — S</li>
                      <li className={styles.left__side__item}>S — M</li>
                      <li className={styles.left__side__item}>M — L</li>
                      <li className={styles.left__side__item}>L — XL</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.banner}></div>
            <div className={styles.productList}>
              {filteredProducts.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className={styles.productLink}
                >
                  <ProductList products={[product]} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <InstaPage />
    </>
  );
};

export default CatalogPage;
