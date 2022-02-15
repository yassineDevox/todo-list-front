import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router
} from "react-router-dom";
import storeRedux from "./redux/store";
import AppRoutes from "./routes/routes";


//Le style global
export default function DoCodeApp() {
  return (
    <Router>
      <Provider store={storeRedux}>
        <AppRoutes />
      </Provider>
    </Router>
  );
}



