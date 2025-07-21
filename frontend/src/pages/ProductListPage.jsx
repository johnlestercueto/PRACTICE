// src/pages/ProductListPage.jsx
import { useProduct } from "../contexts/ProductContext";
import "./productlist.css"; // ← Vanilla CSS file

const ProductListPage = () => {
  const { products, loading } = useProduct();

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">₱{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductListPage;
