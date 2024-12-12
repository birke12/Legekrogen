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
      setProducts(data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter products that are recommended and sort them by price (highest first)
  const recomTrue = products.filter((product) => product.recommended === true);

  // Sort products by price in descending order (highest price first)
  const sortedByPrice = recomTrue.sort((a, b) => b.price - a.price); // Sorting by highest price first

  useEffect(() => {
    fetchProducts();
  }, []);

  // Return the sorted and filtered list, loading state, and error
  return {
    recomTrue: sortedByPrice, // Return the sorted list of recommended products
    products, // All products
    isLoading, // Whether the data is still loading
    error, // Any error encountered
  };
};

export { useFetchProducts };
