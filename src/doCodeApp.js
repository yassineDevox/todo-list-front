import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Checkpoints from "./pages/checkpoints";
import Dashboard from "./pages/dashboard";
import Store from "./pages/store";
import TrackDetails from "./pages/trackDetails";
import Workshops from "./pages/workshops";
import { Theme } from "./Theme/theme";

//Le style global
export default function DoCodeApp() {
  return (

    <Router>
      <Theme>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/checkpoints" element={<Checkpoints />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/store" element={<Store />} />
          <Route path="/tracks/:id/curriculum" element={<TrackDetails />} />
        </Routes>
      </Theme>
    </Router>
  );
}



