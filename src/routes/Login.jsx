import React, { useState } from 'react';
import group from '../assets/group.png';
import './login.css';
import '../reset.css';

console.log(group);
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="layout">
      <div>
        <img classname="hero-image" src={group} alt="group"></img>
      </div>
      <div className="login">
        <div className="login-options">
          <p className="log-in">Log in</p>
          <p className="sign-up">Sign Up</p>
        </div>
        <hr></hr>
        <div className="text">
          <p className="large-text">To Continue</p>
          <p className="small-text">We need your name & email</p>
        </div>
        <form action="/login/password" method="post">
          <div className="email">
            <input
              id="email"
              name="email"
              type="text"
              autocomplete="email"
              placeholder="Email"
              required
              autofocus
            />
          </div>
          <div className="password">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              autocomplete="current-password"
              required
            />
          </div>
          {/* <input type="hidden" name="_csrf" value="<%= csrfToken %>" /> */}
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
