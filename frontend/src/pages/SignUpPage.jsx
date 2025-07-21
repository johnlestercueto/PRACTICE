import SignUpForm from "../components/SignUpForm";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (formData) => {
    try {
      await register(formData);
      alert("Successfully registered!");
      navigate("/login");
    } catch (error) {
      alert(error.message || "Signup failed");
    }
  };
  return <SignUpForm onSubmit={handleSignUp} />;
};

export default SignUpPage;
