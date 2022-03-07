import "assets/style/register.css";
import "assets/fonts/material-icon/css/material-design-iconic-font.min.css";
import imgSignin from "assets/images/signin-image.jpg";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";


export function ForgetPassPage() {
  //refs
  const emailRef = useRef("");
  //state
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    //valider les donne
    const em = emailRef.current.value;
    if (!em) alert("error empty values 😞");
    else {
      //communication avec le serveur
      axios
        .post(
          "http://localhost:9000/api/auth/forget-password",
          {email:em}
        )
        .then((response) => {
            setError("")
        })
        .catch((errServer) =>setError(errServer.response.data.msg));
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
            
            <Link to="/"  className="signup-image-link"> 
            Login
            </Link>
          </div>
          <div className="signin-form">
            <h2 className="form-title">Forget Password</h2>
            <form className="register-form" 
            onSubmit={handleSubmit}>
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
                  onFocus={()=>setError("")}
                />
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit"
                  defaultValue="Send Email"
                />
              </div>
            </form>
            <div className={error ? "alert alert-danger m-1":"d-none"} role="alert">
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

