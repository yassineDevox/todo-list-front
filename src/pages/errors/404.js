import React from 'react'
import Page404 from "./../../assets/images/404.svg"

export const Error404 = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <img src={Page404} alt="not found page" />    
    </div>
  )
}

