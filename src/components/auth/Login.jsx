import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { users } from "../utility/usersData";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Save user details and token to localStorages
      localStorage.setItem("authToken", "mock");
      localStorage.setItem("users", JSON.stringify(user));

      alert(`Welcome back, ${user?.name}!`);
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="border border-gray-300 shadow-lg w-1/3 p-6 m-auto mt-20 rounded-lg bg-white">
      <h1 className="text-3xl font-bold mb-5 text-center text-gray-700">
        Login
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        {error && <p className="text-sm text-red-500">{error}</p>}

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            id="email"
            className="border border-gray-300 p-2 rounded-md w-full mt-1 focus:outline-blue-400"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            id="password"
            className="border border-gray-300 p-2 rounded-md w-full mt-1 focus:outline-blue-400"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          className="text-lg text-white bg-blue-500 p-2 rounded-md hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-gray-600 text-sm text-center">
        Don't have an account?{" "}
        <Link to="/SignUp" className="text-blue-500 hover:underline">
          Register Here
        </Link>
      </p>
    </div>
  );
};

export default Login;
