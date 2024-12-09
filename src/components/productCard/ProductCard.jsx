import { FaCheck } from "react-icons/fa"; // Icon for the checkmark
import styles from "./productCard.module.css";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

const ProductCard = ({ product }) => {
  const [favorites, setFavorites] = useLocalStorage("Favorites", []);
  const isFavorite = favorites.includes(product.id);

  const handleLike = () => {
    setFavorites((prevFavorites) =>
      isFavorite
        ? prevFavorites.filter((fav) => fav !== product.id)
        : [...prevFavorites, product.id]
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
          className={isFavorite ? styles.removeButton : styles.addButton}
        >
          {isFavorite ? "Fjern fra Favoritter" : "Tilføj til Favoritter"}
        </button>
      </div>
    </figure>
  );
};

export default ProductCard;
