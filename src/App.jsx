import React, { useState } from "react";
import "./App.css";

import Tabs from "./components/Tabs.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";


function App() {
  const [active, setActive] = useState("login");

  return (
    <div className="form-container">
      <h2>Login Form</h2>

      <Tabs active={active} setActive={setActive} />

      {active === "login" ? (
        <Login setActive={setActive} />
      ) : (
        <Signup setActive={setActive} />
      )}
    </div>
  );
}

export default App;
