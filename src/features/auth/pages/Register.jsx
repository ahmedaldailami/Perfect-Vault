// import { useAuthStore } from "../auth.store";
// import { useNavigate } from "react-router-dom";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../auth.store";
import Branding from "./Branding";
import InputField from "./components/InputField";
import { Shield } from "lucide-react";
import Switcher from "./Switcher";
import Divider from "./components/Divider";
import SocialBtns from "./components/SocialBtns";

const Register = () => {
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
          className="absolute top-8 right-8 size-[46px] bg-card border rounded-[10px] flex items-center justify-center cursor-pointer [transition:all_0.2s_ease]"
          id="themeToggle"
        >
          <Shield />
        </button>

        <div className="w-full max-w-[420px]">
          <div className="text-center mb-10">
            <h1 className="text-[32px] font-bold mb-3 text-primary">
              Create Account
            </h1>
            <p className="text-[16px] text-secondary">
              Start your Perfect journey today
            </p>
          </div>

          {/* <!-- Tab Switcher --> */}
          <Switcher />

          {/* <!-- register Form --> */}
          <form id="registerForm">
            <InputField
              label="Full Name"
              placeholder="Enter your full name"
              id="name"
              type="text"
            />
            <InputField
              label="Email Address"
              placeholder="Enter your email"
              id="email"
              type="email"
            />
            <InputField
              label="Password"
              placeholder="Create a Password"
              id="Password"
              type="password"
            />
            <div className="mb-5">
              <div className="flex gap-1.5 mt-3">
                <div className="flex-[1] h-1 bg-border rounded-[2px] [transition:background-color_0.3s_ease]"></div>
                <div className="flex-[1] h-1 bg-border rounded-[2px] [transition:background-color_0.3s_ease]"></div>
                <div className="flex-[1] h-1 bg-border rounded-[2px] [transition:background-color_0.3s_ease]"></div>
                <div className="flex-[1] h-1 bg-border rounded-[2px] [transition:background-color_0.3s_ease]"></div>
              </div>
              <p className="text-xs text-muted mt-2">
                Use 8+ characters with a mix of letters, numbers & symbols
              </p>
            </div>

            <div className="flex justify-between items-center mb-6">
              <div
                className="flex items-center gap-[10px] cursor-pointer"
                id="rememberMe"
              >
                <div className="w-[20px] h-[20px] border-[2px] border-solid border-[var(--border)] rounded-[6px] flex items-center justify-center [transition:all_0.2s_ease]">
                  <Shield />
                </div>
                <span className="text-sm text-secondary">
                  I agree to the{" "}
                  <a href="#" className="text-myColor">
                    Terms of Service{" "}
                  </a>
                  and{" "}
                  <a href="#" className="text-myColor">
                    Privacy Policy
                  </a>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full p-4 gradiant border-none rounded-xl text-base font-semibold [font-family:inherit] text-[#1c1c1e] cursor-pointer [transition:all_0.2s_ease] mb-6 hover:bg-myColor-light hover:-translate-y-0.5 [box-shadow:0_8px_24px_rgba(184,_115,_51,_0.3)]"
              onClick={handleLogin}
            >
              Create Account
            </button>

            <Divider />
            <SocialBtns />

            <p className="text-center text-sm text-secondary">
              Already have an account?{" "}
              <NavLink
                to="/login"
                end="login"
                className="text-myColor hover:text-myColor no-underline font-semibold"
              >
                Sign in
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
