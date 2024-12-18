import PageHeader from "../components/pageHeader/PageHeader";
import { useFetchProducts } from "../hooks/useFetchProducts";
import headerImg from "../assets/heros/produkter.jpg";
import styles from "../components/productPage/productPage.module.css";

import ProductCard from "../components/productCard/ProductCard";

const ProductsPage = () => {
  const { products } = useFetchProducts();

  return (
    <section>
      <PageHeader headerType="products"
        headerImg={headerImg}
        title="På udkig efter nyt"
        toy="LEGETØJ"
        /* header2={styles.customHeader} */
      />
      <section className={styles.favGrid}>
        <div className={styles.gridHeader}>
          <h3>Alt vores</h3>
          <h2>LEGETØJ</h2>
        </div>
        <div className={styles.grid}>
          {products.map((product) => (
            <div className="ProductCard" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ProductsPage;
