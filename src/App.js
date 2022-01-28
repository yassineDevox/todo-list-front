import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./components/navbar";
import Checkpoints from "./pages/checkpoints";
import Dashboard from "./pages/dashboard";
import Store from "./pages/store";
import TrackDetails from "./pages/trackDetails";
import Workshops from "./pages/workshops";

//Le style global
import "./style/app.css"

export default function App() {
  return (
    <>
      {/* global desgin  */}

      {/* content of the page  */}
      <Router>
        {/* car on utilise Link Component */}
        <div className="border d-flex ">
          <NavBar />
          <div className="p-3">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/checkpoints" element={<Checkpoints />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/store" element={<Store />} />
            <Route path="/tracks/:id/curriculum" element={<TrackDetails />} />
            
          </Routes>
          </div>
        </div>

      </Router>


    </>
  );
}



