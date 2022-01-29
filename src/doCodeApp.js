import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Checkpoints from "./pages/checkpoints";
import Dashboard from "./pages/dashboard";
import Interviews from "./pages/interviews";
import Projects from "./pages/project";
import Store from "./pages/store";
import Students from "./pages/students";
import TrackDetails from "./pages/trackDetails";
import { Theme } from "./Theme/theme";

//Le style global
export default function DoCodeApp() {
  return (

    <Router>
      <Theme>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/checkpoints" element={<Checkpoints />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/students" element={<Students />} />
          <Route path="/store" element={<Store />} />
          <Route path="/tracks/:id/curriculum" element={<TrackDetails />} />
        </Routes>
      </Theme>
    </Router>
  );
}



