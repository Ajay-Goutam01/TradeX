import { useNavigate } from "react-router-dom";

import AuthLayout from "../../../layouts/AuthLayout";

import LoginForm from "../components/LoginForm";
import useAuth  from "../hooks/useAuth";

function Login() {
  const navigate = useNavigate();

  const { loginUser} = useAuth();

  const handleLogin = async (data) => {
    const success = await loginUser(data);

    if (success) {
      navigate("/dashboard");
    }
  };

  return (
    <AuthLayout>
      <LoginForm onSubmit={handleLogin} />
    </AuthLayout>
  );
}

export default Login;
