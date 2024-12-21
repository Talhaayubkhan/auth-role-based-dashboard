import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Error from "./components/pages/Error";
import ProtectedRoutes from "./components/pages/ProtectedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />

          <Route
            path="dashboard"
            element={
              <ProtectedRoutes allowedRoles={["Admin", "User"]}>
                <Dashboard />
              </ProtectedRoutes>
            }
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
