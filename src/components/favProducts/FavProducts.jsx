import { useFetchProducts } from "../../hooks/useFetchProducts";
import ProductCard from "../productCard/ProductCard";
import Loading from "../loading/Loading";
import styles from "./favProducts.module.css";


const FavProducts = () => {
  const { isLoading, recomTrue, error } = useFetchProducts(); // Destructure recomTrue from the hook

  if (isLoading) return <Loading />;
  if (error) return <p>Error: {error}</p>; // Handle any errors

  return (
    <section className={styles.favGrid}>
      <div className={styles.gridHeader}>
      <h3>Et udpluk af vores </h3>
      <h2>LEGETØJ</h2>
      </div>
      <div className={styles.grid}>

      {recomTrue.length > 0 ? (
        recomTrue.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No recommended products available.</p>
      )}

      </div>
    </section>
  );
};

export default FavProducts;
