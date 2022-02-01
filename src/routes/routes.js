import React from 'react';

//router
import {
    Routes,
    Route,
} from "react-router-dom";

//admin pages
import {
    Checkpoints,
    Dashboard,
    Interviews,
    Projects,
    Store,
    Students,
    TrackDetails
} from '../pages/app';

//auth pages
import {
    ForgetPassword,
    Login,
    ResetPassword
} from '../pages/auth';
import DoCodeAppTheme from '../Theme';

//theme


const AppRoutes = () => {
    return (
        <DoCodeAppTheme>
            <Routes>
                {/* auth routes */}
                <Route exact path="/" element={<Login />} />
                <Route path="/reset-pass" element={<ResetPassword />} />
                <Route path="/forget-pass" element={<ForgetPassword />} />
                {/* admin routes */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/checkpoints" element={<Checkpoints />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/interviews" element={<Interviews />} />
                <Route path="/students" element={<Students />} />
                <Route path="/store" element={<Store />} />
                <Route path="/tracks/:id/curriculum" element={<TrackDetails />} />
            </Routes>
        </DoCodeAppTheme>
    );
};

export default AppRoutes;
