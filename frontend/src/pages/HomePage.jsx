import { useProducts } from "../contexts/ProductContext";
import "./productlist.css"; // ← Vanilla CSS file
import { Link } from "react-router-dom";

const HomePage = () => {
  const { products, loading } = useProducts();

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <Link
            to={`/product/${product._id}`}
            className="product-card"
            key={product._id}
          >
            <img
              src={`http://localhost:5000/uploads/${product.image}`}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₱{product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
