// import { useAuthStore } from "../auth.store";
// import { useNavigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../auth.store";
import Branding from "./Branding";
import InputField from "./components/InputField";
import { Shield } from "lucide-react";
import Switcher from "./Switcher";
import Divider from "./components/Divider";
import SocialBtns from "./components/SocialBtns";

const Login = () => {
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name: "Ahmed" }, "fake-token");
    navigate("/");
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* <!-- Left Side - Branding --> */}
      <Branding />

      <div className="flex-1 flex flex-col justify-center items-center p-15 relative">
        <button
          className="absolute top-[32px] right-[32px] w-[46px] h-[46px] bg-[var(--bg-card)] border-[1px] border-solid border-[var(--border)] rounded-[10px] flex items-center justify-center cursor-pointer [transition:all_0.2s_ease]"
          id="themeToggle"
        >
          <Shield />
        </button>

        <div className="w-full max-w-[420px]">
          <div className="text-center mb-10">
            <h1 className="text-[32px] font-bold mb-3 text-primary">
              Welcome Back
            </h1>
            <p className="text-[16px] text-secondary">
              Enter your credentials to access your account
            </p>
          </div>

          {/* <!-- Tab Switcher --> */}
          <Switcher />

          {/* <!-- Login Form --> */}
          <form className="auth-form active" id="loginForm">
            <InputField
              label="Email Address"
              placeholder="Enter your email"
              id="email"
              type="email"
            />
            <InputField
              label="Password"
              placeholder="Enter your Password"
              id="Password"
              type="password"
            />

            <div className="flex justify-between items-center mb-6">
              <div
                className="flex items-center gap-[10px] cursor-pointer"
                id="rememberMe"
              >
                <div className="w-[20px] h-[20px] border-[2px] border-solid border-[var(--border)] rounded-[6px] flex items-center justify-center [transition:all_0.2s_ease]">
                  <Shield />
                </div>
                <span className="text-sm text-secondary">Remember me</span>
              </div>
              <a
                href="#"
                className="text-sm text-myColor hover:text-myColor-light no-underline font-medium [transition:color_0.2s_ease]"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full p-4 gradiant border-none rounded-xl text-base font-semibold [font-family:inherit] text-[#1c1c1e] cursor-pointer [transition:all_0.2s_ease] mb-6 hover:bg-myColor-light hover:-translate-y-0.5 [box-shadow:0_8px_24px_rgba(184,_115,_51,_0.3)]"
              onClick={handleLogin}
            >
              Sign In
            </button>

            <Divider />
            <SocialBtns />

            <p className="text-center text-sm text-secondary">
              Don't have an account?
              <a
                href="#"
                id="switchToRegister"
                className="text-myColor hover:text-myColor no-underline font-semibold"
              >
                Sign up for free
              </a>
            </p>
          </form>

          {/* <!-- Success Message --> */}
          {/* <div className="success-message" id="successMessage">
            <div className="success-icon">
              <Shield />
            </div>
            <h2>Account Created!</h2>
            <p>
              Check your email to verify your account and get started with
              CryptoVault.
            </p>
            <button
              className="submit-btn"
              onclick="window.location.href='index.html'"
            >
              Go to Dashboard
            </button>
          </div> */}
        </div>

      </div>
    </div>
  );
};

export default Login;
