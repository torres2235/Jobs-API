import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [responseData, setResponseData] = useState(null);

  const navigate = useNavigate();

  /* Form Validation */
  const validateForm = () => {
    const newErrors = {};
    const emailTrimmed = email.trim();
    if (!emailTrimmed) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailTrimmed)) {
        newErrors.email = "Email is invalid";
      }
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* API Call */
  const URL = "https://jobs-api-075j.onrender.com/api/v1/auth/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const login = { email, password };

      try {
        const response = await fetch(URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(login),
        });
        console.log("Attempting login", { email, password });

        const data = await response.json();
        setResponseData(data); // Store the API response
        //console.log("API Response:", data);
        //console.log(response.status);
        if (response.status == 200) {
          console.log("API Response:", data);
          navigate("/dashboard");
        } else {
          console.log(response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div>
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center ">
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-600">
            Ctrl+Alt+Employed
          </h1>
        </Link>
      </nav>

      <motion.div
        className="flex items-center justify-center min-h-full pt-[5%] min-w-fit bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg border-1 border-gray-300"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Sign in
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-800"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-800"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>
              {/* <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </a>
            </div> */}
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
            <Link to="/register" className="text-blue-500 item">
              Need an account?
            </Link>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
