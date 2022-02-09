import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router
} from "react-router-dom";

import AppRoutes from "./routes/routes";


//Le style global
export default function DoCodeApp() {
  return (
    <Router>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </Router>
  );
}



