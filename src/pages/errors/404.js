import React from "react";
import Page404 from "assets/images/404.svg";
import { useNavigate } from "react-router-dom";

export const Error404 = () => {
  const navTo = useNavigate();
  return (
    <div className="d-flex flex-column gap-3 justify-content-center align-items-center vh-100">
      <img src={Page404} alt="not found page" width="500" height="400" />
      <button className="btn btn-success" onClick={() => navTo("/todo")}>
        Back Home 😇
      </button>
    </div>
  );
};
