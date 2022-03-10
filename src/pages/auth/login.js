import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Helper } from "../../helpers/helper";
import { useClearError, useGuardAuth } from "../../hooks/login";
import { login } from "../../redux/ducks/auth";
import Spinner from "../../Theme/shared/spinner";
import logo from "./../../assets/img/loginLogo.svg";

const Input = ({
  reff,
  onFocus,
  isError,
  placeholder,
  type = "text",
  errorMsg,
}) => (
  <>
    <input
      ref={reff}
      onFocus={onFocus}
      className={!isError ? "" : "input-error"}
      type={type}
      placeholder={placeholder}
    />
    <span className={!isError ? "" : "msg-error"}>{errorMsg}</span>
  </>
);

export const Login = () => {
  //state
  const [error, setError] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  //redux actions
  const call = useDispatch();

  //redux state
  const isloading = useSelector((s) => s.auth.isLoading);
  
  //hooks
  useGuardAuth();
  useClearError();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = Helper.REF.get(emailRef);
    const password = Helper.REF.get(passwordRef);

    if (Helper.VALIDATION.isEmpty(email) || Helper.VALIDATION.isEmpty(password))
      setError(true);
    else {
      call(login({ identifier: email, password }));
      Helper.REF.set(emailRef, "");
      Helper.REF.set(passwordRef, "");
    }
  };

  const handleFocusInput = () => setError(false);

  return (
    <div className="form-container">
      <div className="form-heading">
        <img src={logo} alt="logo" />
        <h4>Please sign in to start learning</h4>
      </div>
      <div className="form-body">
        <form onSubmit={handleLoginSubmit}>
          <Input
            reff={emailRef}
            onFocus={handleFocusInput}
            errorMsg="Please enter your email !"
            placeholder="Email address"
            type="email"
            isError={error}
          />

          <br />
          <Input
            reff={passwordRef}
            onFocus={handleFocusInput}
            errorMsg="Please enter your password !"
            placeholder="Password "
            type="password"
            isError={error}
          />

          <br />
          <button type="submit">{isloading ? <Spinner /> : ""} Login </button>
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
