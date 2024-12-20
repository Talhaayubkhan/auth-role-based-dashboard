import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("users"));

  useEffect(() => {
    if (!userData) {
      navigate("/login");
    }
  }, [navigate, userData]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const handleHome = () => {
    navigate("/");
  };
  const isAdmin = userData?.role?.toLowerCase() === "admin";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex gap-4">
              {" "}
              {/* Flex container for buttons with gap */}
              <button
                onClick={handleHome}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Welcome back, {userData?.name || userData?.email}!
          </h2>
          <p className="text-gray-600">
            Logged in as:{" "}
            <span className="font-medium text-gray-900">{userData?.role}</span>
          </p>
        </div>

        {/* User Section */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-500 rounded-full p-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                User Profile
              </h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Name</p>
                <p className="font-medium text-gray-900">{userData?.name}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium text-gray-900">{userData?.email}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Role</p>
                <p className="font-medium text-gray-900">{userData?.role}</p>
              </div>
            </div>
          </div>

          {/* Admin Section */}
          {isAdmin && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-500 rounded-full p-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Admin Controls
                </h2>
              </div>
              <div className="space-y-4">
                <button className="w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-left">
                  <span className="font-medium text-gray-900">
                    Manage Users
                  </span>
                </button>
                <button className="w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-left">
                  <span className="font-medium text-gray-900">
                    System Settings
                  </span>
                </button>
                <button className="w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-left">
                  <span className="font-medium text-gray-900">
                    View Reports
                  </span>
                </button>
                <button className="w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-left">
                  <span className="font-medium text-gray-900">Access Logs</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
