import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import LogInForm from "../components/LogInForm";

const LogInPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogIn = async (formData) => {
    try {
      const data = await login(formData);

      if (data.user.role === "admin") {
        navigate("/admin");
      } else if (data.user.role === "user") {
        navigate("/");
      }
    } catch (error) {
      alert(error.message || "Login failed.");
    }
  };

  return <LogInForm onSubmit={handleLogIn} />;
};

export default LogInPage;
