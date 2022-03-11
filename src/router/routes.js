import React from "react";

//router
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
  Outlet,
} from "react-router-dom";
//auth
import {
  ForgetPassPage,
  LoginPage,
  RegisterPage,
  ResetPassPage,
} from "pages/auth";
//errors
import { Error404 } from "pages/errors";
//website
import { AddTodoPage, ListTodoPage } from "pages/website";

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
        <Route path="/todo" element={<PrivateTodo />}>
          <Route path="all" element={<ListTodoPage />} />
          <Route path="add" element={<AddTodoPage />} />
        </Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;