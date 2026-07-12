import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCarSide,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import axios from "../api/axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.access_token);

      toast.success("Login Successful");

      setTimeout(() => {
        navigate("/dashboard");
      }, 800);
    } catch (error) {
      toast.error(
        error.response?.data?.detail ||
          error.response?.data?.message ||
          "Invalid Email or Password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-page">

        <div className="overlay"></div>

        <div className="login-wrapper">

          {/* ================= LEFT SIDE ================= */}

          <div className="hero-section">

            <div className="brand">

              <div className="brand-logo">
                <FaCarSide />
              </div>

              <div>
                <h1>DriveHub</h1>
                <span>Premium Dealership Platform</span>
              </div>

            </div>

            <div className="hero-text">

              <h2>
                Premium Vehicle
                <br />
                Inventory
                <br />
                Management
              </h2>

              <p>
                Manage inventory, monitor stock,
                handle purchases and sales,
                and grow your dealership with one
                modern platform.
              </p>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="login-card">

            <h2>Welcome Back</h2>

            <p className="subtitle">
              Sign in to continue
            </p>

            <form onSubmit={handleLogin}>

              <div className="input-group">

                <FaEnvelope className="input-icon" />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />

              </div>

              <div className="input-group">

                <FaLock className="input-icon" />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />

                <button
                  type="button"
                  className="eye-btn"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

              <div className="options">

                <label>

                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() =>
                      setRememberMe(!rememberMe)
                    }
                  />

                  Remember Me

                </label>

                <button
                  type="button"
                  className="forgot-password"
                >
                  Forgot Password?
                </button>

              </div>

              <button
                type="submit"
                className="login-button"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>

              <div className="register-link">

                Don't have an account?

                <Link to="/register">
                  Register
                </Link>

              </div>

            </form>

          </div>

        </div>

      </div>

      <ToastContainer
        position="top-right"
        theme="dark"
      />
    </>
  );
}

export default Login;