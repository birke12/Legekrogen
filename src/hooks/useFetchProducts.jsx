import { useEffect, useState } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]); // Holds all products
  const [error, setError] = useState(null); // Holds any error message
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://legekrogen.webmcdm.dk/products");
      const data = await response.json();
      console.log("Fetched Products:", data.products); // Log the products array
      setProducts(data.products); // Set all fetched products
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Return the full products list, loading state, and error
  return {
    products, // All products
    isLoading, // Whether the data is still loading
    error, // Any error encountered
  };
};

export { useFetchProducts };
