import AddProductForm from "../components/AddProductform";
import { useProducts } from "../contexts/ProductContext";

const AddProductPage = () => {
  const { addProduct } = useProducts();

  const handleAddProduct = async (formData) => {
    try {
      await addProduct(formData);
      alert("Add product sucessfully");
    } catch (error) {
      alert(error.message || "add product  failed");
    }
  };

  return <AddProductForm onSubmit={handleAddProduct} />;
};

export default AddProductPage;
