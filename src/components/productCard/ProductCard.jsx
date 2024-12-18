import styles from "./productCard.module.css";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

const ProductCard = ({ product }) => {
  const [products, setProducts] = useLocalStorage("addProduct", []);
  const isProducts = products.includes(product.id);

  const addToCart = () => {
    setProducts((addProducts) =>
      isProducts
        ? addProducts.filter((add) => add !== product.id)
        : [...addProducts, product.id]
    );
  };

  return (
    <figure className={styles.ProductCard}>
      {/* Upper Half: Product Image */}
      <div className={styles.imageContainer}>
        <Link to={`/products/${product.id}`}>
          <img
            className={styles.imageCard}
            src={product.image} // Thumbnail for the product
            alt={product.title} // Title as alt text
          />
        </Link>
      </div>

      {/* Bottom Half: Title, Subtitle, Price */}
      <div className={styles.detailsContainer}>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.description}>{product.description}</p>
        </div>
        <div className={styles.priceContainer}>
          {/* <p className={styles.priceTxt}>Pris:</p> */}
          <p className={styles.price}>{product.price} kr</p>
        </div>

        {/* Favorite Button Section */}
        {/* <div className={styles.likeContainer}>
          <button onClick={addToCart} className={styles.addButton}>
            {isProducts ? "Fjern fra Kurv" : "Tilføj til Kurv"}
          </button>
        </div> */}
      </div>
    </figure>
  );
};

export default ProductCard;
