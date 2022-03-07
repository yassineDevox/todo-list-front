import React, { useRef, useState } from "react";
import "assets/style/register.css";
import "assets/fonts/material-icon/css/material-design-iconic-font.min.css";
import imgSignin from "assets/images/signin-image.jpg";
import axios from "axios";
import { CredentialsModel } from "model/credantials";
import { Link, useParams } from "react-router-dom";

export function ResetPassPage() {
  //refs
  const passRef = useRef("");
  const rPassRef = useRef("");

  //state
  const [error, setError] = useState("");

  //recuperer les params
  const {code,email} = useParams()

  //submit 
  const handleSubmit = (e) => {
    e.preventDefault();
    //valider les donne
    const rp = rPassRef.current.value;
    const p = passRef.current.value;
    if (!rp || !p) alert("error empty values 😞");
    else if(rp!==p) alert("Passwords should be matched 😞");
    else {
      //communication avec le serveur
      axios
        .post(
          `http://localhost:9000/api/auth/reset-password/code/${code}/email/${email}`,
         {password:p,repeatedPassword:rp}
        )
        .then((response) => {
          setError("");
        })
        .catch((errServer) => setError(errServer.response.data.msg));
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
            <Link to="/" className="signup-image-link">Login</Link>
          </div>
          <div className="signin-form">
            <h2 className="form-title">Reset Password</h2>
            <form className="register-form" onSubmit={handleSubmit}>
              
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
                <label htmlFor="your_pass">
                  <i className="zmdi zmdi-lock" />
                </label>
                <input
                  ref={rPassRef}
                  type="password"
                  name="your_pass"
                  id="your_pass"
                  placeholder="Repeated Password"
                  onFocus={() => setError("")}
                />
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit"
                  defaultValue="Change Password"
                />
              </div>
            </form>
            <div
              className={error? "alert alert-danger" : "d-none"}
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

