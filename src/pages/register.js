import React, { useRef } from "react";
import imgSignup from "./../assets/images/signup-image.jpg";
import { registerUser } from "../redux/ducks/user";
import { useDispatch } from "react-redux";
import { UserModel } from "./../model/user";
import { ROLE } from "../model/role";
import "./../assets/style/register.css";
import "./../assets/fonts/material-icon/css/material-design-iconic-font.min.css";
import axios from "axios";
import { useState } from "react";

// https://api.multiavatar.com/fn1.ln2

function RegisterPage() {
  const call = useDispatch();
  //refs
  const fn = useRef();
  const ln = useRef();
  const email = useRef();
  const password = useRef();
  const rPassword = useRef();
  const avatarURL = useRef();
  //use state for error
  const [error, setError] = useState("");

  const handleSubmitRegister = (e) => {
    e.preventDefault();

    //get all typed values from inputs
    let data = {
      f: fn.current.value,
      l: ln.current.value,
      e: email.current.value,
      p: password.current.value,
      rp: rPassword.current.value,
    };

    //validation of the data
    let error = false;
    Object.keys(data).forEach((k) => {
      if (data[k] === "") error = true;
    });

    if (error) alert("Error Values are empty 😥 !");
    else if (data.p !== data.rp)
      alert("Error Password should match the repeated Password 😥 !");
    else {
      //send data to the server via redux thunk
      //call the api api/auth/register
      let user = new UserModel(
        null,
        data.f,
        data.l,
        data.e,
        `https://api.multiavatar.com/${data.l}${data.f}`,
        ROLE.DEV,
        data.p,
        data.rp
      );
      axios
        .post("http://localhost:9000/api/auth/register", user)
        .then((response) => {
          setError("")
          alert(response.data.msg)
        })
        .catch((err) => setError(err.response.data.msg));
    }
  };
  return (
    <section className="signup mt-5 mb-0">
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <form
              method="POST"
              className="register-form"
              id="register-form"
              onSubmit={handleSubmitRegister}
            >
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name" />
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Firstname"
                  ref={fn}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name" />
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Lastname"
                  ref={ln}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email" />
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  ref={email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name" />
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Avatar URL Optional ?"
                  ref={avatarURL}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pass">
                  <i className="zmdi zmdi-lock" />
                </label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Password"
                  ref={password}
                />
              </div>
              <div className="form-group">
                <label htmlFor="re-pass">
                  <i className="zmdi zmdi-lock-outline" />
                </label>
                <input
                  type="password"
                  name="re_pass"
                  id="re_pass"
                  placeholder="Repeat your password"
                  ref={rPassword}
                />
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="agree-term"
                  id="agree-term"
                  className="agree-term"
                />
                <label htmlFor="agree-term" className="label-agree-term">
                  <span>
                    <span />
                  </span>
                  I agree all statements in
                  <a href="#" className="term-service">
                    Terms of service
                  </a>
                </label>
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Register"
                />
              </div>
            </form>
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          </div>
          <div className="signup-image">
            <figure>
              <img src={imgSignup} alt="sing up image" />
            </figure>
            <a href="#" className="signup-image-link">
              I am already member
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
