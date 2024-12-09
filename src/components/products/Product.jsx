import { useFetchProducts } from "../../hooks/useFetchProducts";

const Products = () => {
  // Correctly call the hook and destructure its return values
  const { products, isLoading, error } = useFetchProducts();

  // Add console.log to watch the fetched products
  console.log("Fetched Products:", products);

  return (
    <section className="products-grid">
      {isLoading ? (
        <p>Loading...</p> // Replace <Loading /> with a fallback if Loading isn't defined
      ) : error ? (
        <p>Error: {error}</p> // Handle error if it exists
      ) : (
        <>
          {products && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products available.</p>
          )}
        </>
      )}
    </section>
  );
};

export default Products;
