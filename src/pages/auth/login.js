import React, { useRef, useState } from "react";
import "assets/style/register.css";
import "assets/fonts/material-icon/css/material-design-iconic-font.min.css";
import imgSignin from "assets/images/signin-image.jpg";
import axios from "axios";
import { CredentialsModel } from "model/credantials";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "shared/spinner/spinner";
import { loadUserFromAPI } from "redux/ducks/auth";
import { useDispatch } from "react-redux";

export function LoginPage() {

  //router 
  const navTo = useNavigate()

  //refs
  const emailRef = useRef("");
  const passRef = useRef("");
  //state
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  //call redux actions 
  const call = useDispatch()

  //submit login
  const handleSubmit = (e) => {
    e.preventDefault();
    //valider les donne
    const em = emailRef.current.value;
    const p = passRef.current.value;
    if (!em || !p) alert("error empty values 😞");
    else {
      // spinner tourne stp
      setIsLoading(true);
      //communication avec le serveur
      axios
        .post(
          "http://localhost:9000/api/auth/login",
          new CredentialsModel(em, p)
        )
        .then((response) => {
          setError("");
          setIsLoading(false);
          //appeler loadUser pour enregister le userInfo
          call(loadUserFromAPI(response.data))
          //nav to todo list page 
          navTo("/todo/all")
        })
        .catch((errServer) => {
          setIsLoading(false)
          setError(errServer.response.data?.msg);
        });
        emailRef.current.value="";
        passRef.current.value="";
    }
  };
  return (
    <section className="sign-in  mt-5 mb-0">
      <div className="container">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src={imgSignin} alt="sing up image" />
            </figure>
            <Link to="/forget-pass" className="signup-image-link">
              forget password
            </Link>
            <Link to="/register" className="signup-image-link">
              create account
            </Link>
          </div>
          <div className="signin-form">
            <h2 className="form-title">Sign In</h2>
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="your_name">
                  <i className="zmdi zmdi-account material-icons-name" />
                </label>
                <input
                  ref={emailRef}
                  type="text"
                  name="your_name"
                  id="your_name"
                  placeholder="Your Email"
                  onFocus={() => setError("")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="your_pass">
                  <i className="zmdi zmdi-lock" />
                </label>
                <input
                  ref={passRef}
                  type="password"
                  name="your_pass"
                  id="your_pass"
                  placeholder="Password"
                  onFocus={() => setError("")}
                />
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="agree-term"
                />
                <label htmlFor="remember-me" className="label-agree-term">
                  <span>
                    <span />
                  </span>
                  Remember me
                </label>
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit me-1"
                  value="Log in"
                />
                {isLoading ? <Spinner /> : ""}
              </div>
            </form>
            <div
              className={error !== "" ? "alert alert-danger mt-2" : "d-none"}
              role="alert"
            >
              {error}
            </div>
            <div className="social-login">
              <span className="social-label">Or login with</span>
              <ul className="socials">
                <li>
                  <a href="#">
                    <i className="display-flex-center zmdi zmdi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="display-flex-center zmdi zmdi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="display-flex-center zmdi zmdi-google"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
