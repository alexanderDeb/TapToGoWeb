import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "../Pages/welcomePage";
import LoginPage from "../Pages/loginPage";
import Dashboard from "../Pages/dashboard";
import Register from "../Pages/registerPage";
import IsAuthenticated from "./isAuthenticated";
import ProtectedRoutes from "./protectedRoutes";
import Stadistics from "../Pages/stadistics";

export default function Navigation() {
  return (
    <Router>
      <Routes>
        {/* When you are Authenticated you can't enter in the login page */}
        <Route element={<IsAuthenticated />}>
          <Route path="*" element={<WelcomePage />} />
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/stadistics" element={<Stadistics />} />
        </Route>
      </Routes>
    </Router>
  );
}
