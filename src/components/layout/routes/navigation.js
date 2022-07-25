import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from "../../../logo.svg";
import Home from "../../../views/home/home/index";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
