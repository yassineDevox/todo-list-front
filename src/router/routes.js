import React from "react";

//router
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import RegisterPage from "../pages/register";
import LoginPage from "../pages/login";
import TodoPage from "../pages/todo";
import ForgetPassPage from "../pages/forgetPass";
import ResetPassPage from "../pages/resetPassword";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forget-pass" element={<ForgetPassPage />} />
        <Route
          path="/resetPassword/code/:code/email/:email"
          element={<ResetPassPage />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
