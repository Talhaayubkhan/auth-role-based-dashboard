import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Added state for role
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // To programmatically navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    //   validate the credentials

    if (!email || !password || !fullName || !role) {
      setError("Please fill in all fields.");
      return;
    }

    // Simulate server request and success
    setSuccess("Registration successful! You can now log in.");

    // Store the new user data in localStorage, including dynamic role
    const newUser = { fullName, email, password, role };
    localStorage.setItem("users", JSON.stringify(newUser));

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="border border-gray-300 shadow-lg w-1/3 p-6 m-auto mt-20 rounded-lg bg-white">
      <h1 className="text-3xl font-bold text-center mb-5 text-gray-700">
        Sign Up
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {error && <p className="text-sm text-red-500">{error}</p>}
        {success && <p className="text-sm text-green-500">{success}</p>}
        <div>
          <input
            className="border border-gray-300 p-2 rounded-md w-full mt-1 focus:outline-blue-400"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <input
            className="border border-gray-300 p-2 rounded-md w-full mt-1 focus:outline-blue-400"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="border border-gray-300 p-2 rounded-md w-full mt-1 focus:outline-blue-400"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Role Selection */}
        <div>
          <select
            className="border border-gray-300 p-2 rounded-md w-full mt-1 focus:outline-blue-400"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <button
          type="submit"
          className="text-lg text-white bg-blue-500 p-2 rounded-md hover:bg-blue-600 transition"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-gray-600 text-sm text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login Here
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
