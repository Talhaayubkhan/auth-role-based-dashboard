// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState(""); // Added state for role
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate(); // To programmatically navigate

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     //   validate the credentials

//     if (!email || !password || !fullName || !role) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     // Simulate server request and success
//     setSuccess("Registration successful! You can now log in.");

//     // Store the new user data in localStorage, including dynamic role
//     const newUser = { fullName, email, password, role };
//     localStorage.setItem("users", JSON.stringify(newUser));

//     setTimeout(() => {
//       navigate("/login");
//     }, 2000);
//   };

//   return (
//     <div className="border border-gray-300 shadow-lg w-1/3 p-6 m-auto mt-20 rounded-lg bg-white">
//       <h1 className="text-3xl font-bold text-center mb-5 text-gray-700">
//         Sign Up
//       </h1>
//       <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//         {error && <p className="text-sm text-red-500">{error}</p>}
//         {success && <p className="text-sm text-green-500">{success}</p>}
//         <div>
//           <input
//             className="border border-gray-300 p-2 rounded-md w-full mt-1 focus:outline-blue-400"
//             type="text"
//             placeholder="Full Name"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             className="border border-gray-300 p-2 rounded-md w-full mt-1 focus:outline-blue-400"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             className="border border-gray-300 p-2 rounded-md w-full mt-1 focus:outline-blue-400"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         {/* Role Selection */}
//         <div>
//           <select
//             className="border border-gray-300 p-2 rounded-md w-full mt-1 focus:outline-blue-400"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//           >
//             <option value="">Select Role</option>
//             <option value="admin">Admin</option>
//             <option value="user">User</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="text-lg text-white bg-blue-500 p-2 rounded-md hover:bg-blue-600 transition"
//         >
//           Sign Up
//         </button>
//       </form>
//       <p className="mt-4 text-gray-600 text-sm text-center">
//         Already have an account?{" "}
//         <Link to="/login" className="text-blue-500 hover:underline">
//           Login Here
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default SignUp;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password || !fullName || !role) {
      setError("Please fill in all fields.");
      return;
    }

    setSuccess("Registration successful! You can now log in.");
    const newUser = { fullName, email, password, role };
    localStorage.setItem("users", JSON.stringify(newUser));

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-400 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-4xl font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-400 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          {success && (
            <div className="mb-4 bg-green-50 border-l-4 border-green-400 p-4">
              <p className="text-sm text-green-700">{success}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <div className="mt-1">
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/login"
                className="flex w-full justify-center text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Login Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
