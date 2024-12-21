// import { Link } from "react-router-dom";

// const Home = () => {
//   const userData = JSON.parse(localStorage.getItem("users"));
//   const isAdmin = userData?.role?.toLowerCase() === "admin";

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 text-white">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header Section */}
//         <div className="flex justify-between items-center mb-10">
//           <h1 className="text-4xl font-bold">Home Page</h1>
//           <div className="flex items-center gap-3">
//             <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
//               {userData?.role}
//             </span>
//             <span className="text-sm font-bold">{userData?.name}</span>
//           </div>
//         </div>

//         {/* Card Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Admin Cards */}
//           {isAdmin && (
//             <>
//               {/* Card 1 */}
//               <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
//                 <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
//                   <span className="text-4xl">📊</span>
//                 </div>
//                 <div className="p-6">
//                   <h2 className="text-2xl font-semibold mb-2 text-gray-800">
//                     My Dashboard
//                   </h2>
//                   <p className="text-gray-600 mb-4">
//                     View comprehensive dashboard and metrics for system
//                     performance.
//                   </p>
//                   <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
//                     <Link to="/dashboard"> View Dashboard</Link>
//                   </button>
//                 </div>
//               </div>

//               {/* Card 2 */}
//               <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
//                 <div className="h-48 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
//                   <span className="text-4xl">👥</span>
//                 </div>
//                 <div className="p-6">
//                   <h2 className="text-2xl font-semibold mb-2 text-gray-800">
//                     User Management
//                   </h2>
//                   <p className="text-gray-600 mb-4">
//                     Manage user accounts, roles, and permissions efficiently.
//                   </p>
//                   <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
//                     Manage Users
//                   </button>
//                 </div>
//               </div>

//               {/* Card 3 */}
//               <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
//                 <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
//                   <span className="text-4xl">⚙️</span>
//                 </div>
//                 <div className="p-6">
//                   <h2 className="text-2xl font-semibold mb-2 text-gray-800">
//                     System Settings
//                   </h2>
//                   <p className="text-gray-600 mb-4">
//                     Configure and manage system settings and preferences.
//                   </p>
//                   <button className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
//                     Open Settings
//                   </button>
//                 </div>
//               </div>
//             </>
//           )}

//           {/* User Card */}
//           {!isAdmin && (
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
//               <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
//                 <span className="text-4xl">👤</span>
//               </div>
//               <div className="p-6">
//                 <h2 className="text-2xl font-semibold mb-2 text-gray-800">
//                   My Dashboard
//                 </h2>
//                 <p className="text-gray-600 mb-4">
//                   Access your personal dashboard and manage your profile
//                   settings.
//                 </p>
//                 <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
//                   <Link to="/dashboard"> View Dashboard</Link>
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { Link } from "react-router-dom";

const Home = () => {
  const userData = JSON.parse(localStorage.getItem("users"));
  const isAdmin = userData?.role?.toLowerCase() === "admin";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-purple-900">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-black opacity-10 pattern-grid-lg"></div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Welcome to Home
            </h1>
            <p className="text-blue-100 text-lg">
              Manage your workspace efficiently
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg rounded-2xl p-4">
            <div className="flex flex-col items-center gap-1">
              <span className="text-white font-medium">{userData?.name}</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-sm text-blue-100">
                {userData?.role}
              </span>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">
                {userData?.name?.[0]?.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {isAdmin ? (
            <>
              {/* Admin Dashboard Card */}
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-white/10">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <span className="text-5xl relative z-10">📊</span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    My Dashboard
                  </h2>
                  <p className="text-blue-100 mb-6">
                    View comprehensive dashboard and metrics for system
                    performance.
                  </p>
                  <Link to="/dashboard">
                    <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-300 font-medium">
                      View Dashboard
                    </button>
                  </Link>
                </div>
              </div>

              {/* User Management Card */}
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-white/10">
                <div className="h-48 bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <span className="text-5xl relative z-10">👥</span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    User Management
                  </h2>
                  <p className="text-blue-100 mb-6">
                    Manage user accounts, roles, and permissions efficiently.
                  </p>
                  <button className="w-full px-6 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors duration-300 font-medium">
                    Manage Users
                  </button>
                </div>
              </div>

              {/* Settings Card */}
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-white/10">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <span className="text-5xl relative z-10">⚙️</span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    System Settings
                  </h2>
                  <p className="text-blue-100 mb-6">
                    Configure and manage system settings and preferences.
                  </p>
                  <button className="w-full px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors duration-300 font-medium">
                    Open Settings
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* User Dashboard Card */
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-white/10">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <span className="text-5xl relative z-10">👤</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  My Dashboard
                </h2>
                <p className="text-blue-100 mb-6">
                  Access your personal dashboard and manage your profile
                  settings.
                </p>
                <Link to="/dashboard">
                  <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-300 font-medium">
                    View Dashboard
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
