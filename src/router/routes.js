import React from "react";

//router
import { Routes, Route, BrowserRouter as Router, Navigate, Outlet } from "react-router-dom";
import RegisterPage from "../pages/register";
import LoginPage from "../pages/login";
import TodoPage from "../pages/todo";
import ForgetPassPage from "../pages/forgetPass";
import ResetPassPage from "../pages/resetPassword";

//private routes 
function PrivateTodo() {
  const user = window.localStorage.getItem("user-info");
  return user ? <Outlet /> : <Navigate to="/" />;
}

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
        {/* secure todo Page  */}
        <Route path="/todo" element={<PrivateTodo/>}>
          <Route  element={<TodoPage />} />
        </Route>
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
