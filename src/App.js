import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ForgetPasswordPage from "./components/pages/ForgetPasswordPage";
import HomePage from "./components/pages/HomePage";

import "./App.css";

export default function App() {
  // localStorage.setItem("token", "");
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage></LandingPage>} />
          <Route path="/login" element={<LoginPage></LoginPage>} />
          <Route path="/register" element={<RegisterPage></RegisterPage>} />
          <Route
            path="/forget-password"
            element={<ForgetPasswordPage></ForgetPasswordPage>}
          />
          <Route path="/home" element={<HomePage></HomePage>} />
        </Routes>
      </Router>
    </div>
  );
}
