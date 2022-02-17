import React from 'react';
import { ToastContainer } from 'react-toastify';
import "./../../assets/style/auth.css"

export const ThemeAUTH = ({children}) => {

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
         {children}
        </main>
      </section>
      <ToastContainer/>
    </main>

  );
};

