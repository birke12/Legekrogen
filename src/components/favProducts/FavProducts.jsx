import { useFetchProducts } from "../../hooks/useFetchProducts";
import ProductCard from "../productCard/ProductCard";
import Loading from "../loading/Loading";

const FavProducts = () => {
  const { isLoading, products } = useFetchProducts(); // Use products instead of ratings

  return (
    <section className="grid">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} /> // Use ProductCard and product
          ))}
        </>
      )}
    </section>
  );
};

export default FavProducts;
