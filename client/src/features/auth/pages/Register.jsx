import { useNavigate } from "react-router-dom";

import AuthLayout from "../../../layouts/AuthLayout";
import RegisterForm from "../components/RegisterForm";
import useAuth  from "../hooks/useAuth";

function Register() {
  const navigate = useNavigate();

  const { registerUser } = useAuth();

  const handleRegister = async (formData) => {
    const success = await registerUser(formData);

    if (success) {
      navigate("/dashboard");
    }
  };

  return (
    <AuthLayout>
      <RegisterForm onSubmit={handleRegister} />
    </AuthLayout>
  );
}

export default Register;