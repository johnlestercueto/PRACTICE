// src/pages/ProductDetailsPage.jsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext";
import "./productdetails.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { product, fetchProduct, loading } = useProducts();

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  if (loading || !product) return <p>Loading product details...</p>;

  return (
    <div className="product-details">
      <img
        src={`http://localhost:5000/uploads/${product.image}`}
        alt={product.name}
        className="product-image"
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>₱{product.price}</p>

      <div className="button-group">
        <button className="add-to-cart-btn">Add to Cart</button>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
