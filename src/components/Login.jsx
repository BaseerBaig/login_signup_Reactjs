import React from "react";

const Login = ({ setActive }) => {
  return (
    <>
      <input type="email" placeholder="Enter Email Address" />
      <input type="password" placeholder="Enter Password" />

      <div className="forgot">Forgot password?</div>

      <button className="main-btn">Login</button>

      <div className="link">
        Not a member? <span onClick={() => setActive("signup")}>Signup Now</span>
      </div>
    </>
  );
};

export default Login;
