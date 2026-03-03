import { useAuthStore } from "../auth.store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name: "Ahmed" }, "fake-token");
    navigate("/");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <button
        onClick={handleLogin}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
