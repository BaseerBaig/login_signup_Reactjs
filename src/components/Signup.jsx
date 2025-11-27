import React from "react";

const Signup = ({ setActive }) => {
  return (
    <>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Create Password" />

      <button className="main-btn">Create an Account</button>

      <div className="link">
        Already have an account?{" "}
        <span onClick={() => setActive("login")}>Login</span>
      </div>
    </>
  );
};

export default Signup;
