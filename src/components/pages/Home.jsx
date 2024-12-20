import { Link } from "react-router-dom";

const Home = () => {
  const userData = JSON.parse(localStorage.getItem("users"));
  const isAdmin = userData?.role?.toLowerCase() === "admin";

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Welcome to Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {userData?.role}
            </span>
            <span className="text-sm font-bold">{userData?.name}</span>
          </div>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Admin Cards */}
          {isAdmin && (
            <>
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                    My Dashboard
                  </h2>
                  <p className="text-gray-600 mb-4">
                    View comprehensive dashboard and metrics for system
                    performance.
                  </p>
                  <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    <Link to="/dashboard"> View Dashboard</Link>
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <span className="text-4xl">👥</span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                    User Management
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Manage user accounts, roles, and permissions efficiently.
                  </p>
                  <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                    Manage Users
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                  <span className="text-4xl">⚙️</span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                    System Settings
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Configure and manage system settings and preferences.
                  </p>
                  <button className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
                    Open Settings
                  </button>
                </div>
              </div>
            </>
          )}

          {/* User Card */}
          {!isAdmin && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  My Dashboard
                </h2>
                <p className="text-gray-600 mb-4">
                  Access your personal dashboard and manage your profile
                  settings.
                </p>
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  <Link to="/dashboard"> View Dashboard</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
