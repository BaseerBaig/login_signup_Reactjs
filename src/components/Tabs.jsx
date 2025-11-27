import React from "react";

const Tabs = ({ active, setActive }) => {
  return (
    <div className="tab-buttons">
      <button
        className={active === "login" ? "active" : ""}
        onClick={() => setActive("login")}
      >
        Login
      </button>

      <button
        className={active === "signup" ? "active" : ""}
        onClick={() => setActive("signup")}
      >
        Signup
      </button>
    </div>
  );
};

export default Tabs;
