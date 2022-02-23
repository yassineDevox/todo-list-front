import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../redux/ducks/auth";
import Spinner from "../../Theme/shared/spinner";
import logo from "./../../assets/img/loginLogo.svg";

export const Login = () => {
  //state
  const [error, setError] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  //redux actions
  const call = useDispatch();
  //redux state
  const errorServer = useSelector((s) => s.auth.error);
  const isloading = useSelector((s) => s.auth.isLoading);
  //on submit login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email === "" || password === "") setError(true);
    else {
      call(login({ identifier: email, password }));
    }
  };
  ///--display error msg
  useEffect(() => {
    if (errorServer !== "")
      toast.error(errorServer, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }, [errorServer]);

  const handleFocusInput = () => setError(false);

  return (
    <div className="form-container">
      <div className="form-heading">
        <img src={logo} alt="logo" />
        <h4>Please sign in to start learning</h4>
      </div>
      <div className="form-body">
        <form onSubmit={handleLoginSubmit}>
          <input
            ref={emailRef}
            onFocus={handleFocusInput}
            className={!error ? "" : "input-error"}
            type="text"
            placeholder="Email address"
            autoComplete={false}
          />

          <span className={!error ? "" : "msg-error"}>
            Please enter your email !
          </span>
          <br />
          <input
            ref={passwordRef}
            onFocus={handleFocusInput}
            type="password"
            className={!error ? "" : "input-error"}
            placeholder="Password "
          />
          <span className={!error ? "" : "msg-error"}>
            Please enter your Password !
          </span>
          <br />
          <button type="submit">{isloading && <Spinner />} Login </button>
        </form>
      </div>
      <div className="form-footer">
        <Link to="/forget-pass">
          <button className="outiline">Reset Password</button>
        </Link>
      </div>
    </div>
  );
};
