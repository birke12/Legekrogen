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
      console.log(data); // Log the products array
      setProducts.data // Assuming the API response has a 'products' key
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

 const recomTrue = products.filter((product) => product.recommended = true)

  useEffect(() => {
    fetchProducts();
  }, []);

  // Return the full products list, loading state, and error
  return {
   recomTrue,
    products, // All products
    isLoading, // Whether the data is still loading
    error, // Any error encountered
  };
};

export { useFetchProducts };
