import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";

import AppRoutes from "./routes/routes";

//Le style global
export default function DoCodeApp() {
  return (

    <Router>
      <AppRoutes />
    </Router>
  );
}



