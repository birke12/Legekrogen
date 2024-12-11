import { FaCheck } from "react-icons/fa"; // Icon for the checkmark
import styles from "./productCard.module.css";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

const ProductCard = ({ product }) => {
  const [products, setProducts] = useLocalStorage("Products", []);
  const isProducts = products.includes(product.id);

  const handleLike = () => {
    setProducts((prevProducts) =>
      isproducts
        ? prevProducts.filter((pro) => pro !== product.id)
        : [...prevProducts, product.id]
    );
  };

  return (
    <figure className={styles.ProductCard}>
      {/* Upper Half: Product Image */}
      <Link to={`/products/${product.id}`}>
        <img
          className={styles.imageCard}
          src={product.thumbnail} // Thumbnail for the product
          alt={product.title} // Title as alt text
        />
      </Link>

      {/* Price Section */}
      <div className={styles.priceContainer}>
        <p className={styles.priceTxt}>Pris:</p>
        <p className={styles.price}>${product.price}</p>
      </div>

      {/* Features Section */}
      <div className={styles.features}>
        <p className={styles.feature}>
          <FaCheck className={styles.checkmark} /> Høj kvalitet
        </p>
        <p className={styles.feature}>
          <FaCheck className={styles.checkmark} /> Hurtig levering
        </p>
      </div>

      {/* Favorite Button Section */}
      <div className={styles.likeContainer}>
        <button
          onClick={handleLike}
          className={isProducts ? styles.removeButton : styles.addButton}
        >
          {isProducts ? "Fjern fra Kruv" : "Tilføj til Kurv"}
        </button>
      </div>
    </figure>
  );
};

export default ProductCard;
