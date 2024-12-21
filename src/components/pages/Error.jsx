import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <h1 className="text-9xl font-bold animate-bounce">404</h1>
      <p className="text-2xl mt-4">Oops! Page Not Found.</p>
      <p className="text-lg mt-2">
        Click the button below to go to the home page.
      </p>
      <button
        onClick={handleRedirect}
        className="mt-6 px-6 py-3 text-xl font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Go to Login/Signup
      </button>
    </div>
  );
};

export default Error;
