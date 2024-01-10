import React from 'react'
import "./Login.css";
import { loginurl } from '../../Spotify';

function Login() {
  return (
    <div className='login'>
        {/*Spotify Logo*/}
      {/*Login with spotpify button*/}
      <img src='https://i.pinimg.com/originals/11/da/ef/11daefa7555a23abe899dea9bfb81ea8.jpg'></img>
      <a href={loginurl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login