import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./contexts/AuthContext";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
