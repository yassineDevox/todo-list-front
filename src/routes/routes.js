import React from "react";
import { useSelector } from "react-redux";

//router
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

//admin pages
import {
  Checkpoints,
  Dashboard,
  Interviews,
  Projects,
  Store,
  Students,
  TrackDetails,
} from "../pages/app";

//auth pages
import { ForgetPassword, Login, ResetPassword } from "../pages/auth";
import DoCodeAppTheme from "../Theme";

//guards
function AdminGuard() {
  const { jwt } = useSelector((s) => s.auth.userInfo);
  return jwt ? <Outlet /> : <Navigate to="/" />;
}

function AuthGuard() {
    const { jwt } = useSelector((s) => s.auth.userInfo);
    return jwt ? <Outlet /> : <Navigate to="dashboard" />;
}

const AppRoutes = () => {
  return (
    <DoCodeAppTheme>
      <Routes>
        {/* auth routes */}
        <Route path="" element={<AuthGuard />}>
          <Route exact path="" element={<Login />} />
          <Route path="reset-pass" element={<ResetPassword />} />
          <Route path="forget-pass" element={<ForgetPassword />} />
        </Route>
        {/* admin routes */}
        <Route path="" element={<AdminGuard />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="checkpoints" element={<Checkpoints />} />
          <Route path="projects" element={<Projects />} />
          <Route path="interviews" element={<Interviews />} />
          <Route path="students" element={<Students />} />
          <Route path="store" element={<Store />} />
          <Route path="tracks/:id/curriculum" element={<TrackDetails />} />
        </Route>
      </Routes>
    </DoCodeAppTheme>
  );
};

export default AppRoutes;
