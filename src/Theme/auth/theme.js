import React from 'react';
import "./../../assets/style/auth.css"
import logo from "./../../assets/img/loginLogo.svg"

export const ThemeAUTH = () => {
  return (

    <main className='d-flex'>
      <section className='joinUs'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative', zIndex: 4 }}>
          <h1 className="joinUs" style={{ textAlign: 'center', color: '#29e7d6', fontSize: '4em', width: '50%' }}>
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
                <input type="text" placeholder="Email address" />
                <br />
                <input type="password" placeholder="Password " />
                <br />
                <button onclick="return false" type="submit">Login</button>
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

