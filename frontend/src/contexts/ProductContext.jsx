// src/contexts/ProductContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} from "../services/productServices";

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProduct = async (id) => {
    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (newProduct) => {
    const created = await createProduct(newProduct);
    setProducts((prev) => [...prev, created]);
  };

  const editProduct = async (id, updatedProduct) => {
    const updated = await updateProduct(id, updatedProduct);
    setProducts((prev) =>
      prev.map((product) => (product._id === id ? updated : product))
    );
  };

  const removeProduct = async (id) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((product) => product._id !== id));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        product,
        loading,
        addProduct,
        editProduct,
        fetchProduct,
        removeProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
