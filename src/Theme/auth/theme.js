import React, { useState } from 'react';
import "./../../assets/style/auth.css"
import logo from "./../../assets/img/loginLogo.svg"

export const ThemeAUTH = () => {
  
  const [error, setError] = useState(false);

  return (

    <main className='d-flex'>
      <section className='joinUs'>
        <div className='joinUs-container'>
          <h1 className="joinUs" >
            Join our <br /> community and learn fast on LEARN
          </h1>
        </div>
      </section>
      <section className='form'>
        <main>
          <div className="form-container">
            <div className="form-heading">
              <img src={logo} alt="logo" />
              <h4>Please sign in to start learning</h4>
            </div>
            <div className="form-body">
              <form>
                <input className={error && "input-error"} type="text" placeholder="Email address" />
                <span className={error && "msg-error"}>Please enter your email !</span>
                <br />
                <input type="password" className={error && "input-error"} placeholder="Password " />
                <span className={error && "msg-error"} >Please enter your Password !</span>
                <br />
                <button onClick={(e)=>{
                  e.preventDefault()
                  setError(true)
                }} type="submit">Login</button>
              </form>
            </div>
            <div className="form-footer">
              <button className="outiline">Reset Password</button>
            </div>
          </div>
        </main>
      </section>
    </main>

  );
};

