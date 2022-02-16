import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/img/loginLogo.svg";
import "./../../assets/style/forgetPassword.css";

export const ForgetPassword = () => {
  const [error, setError] = useState(false);
  const emailRef = useRef("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (email === "") setError(true);
    else {
    }
  };

  const handleFocusInput = () => setError(false);
  return (
    <>
     <p className="back-login">
      <Link to="/">Back to login</Link>
     </p>
      <div className="form-container">
        <div className="form-heading">
          <img src={logo} alt="logo" height={25} />
          <h4>Enter the email associated with your account</h4>
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
            <button type="submit">Reset Password</button>
          </form>
        </div>
        <div className="form-footer">
          <span>
            If you have any trouble resetting your password, contact us at
            <a href=""> hello@domycode.co</a>
          </span>
        </div>
      </div>
    </>
  );
};
