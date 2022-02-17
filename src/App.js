import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [pass, setPass] = useState("");

  const inputHandler = (e) => {
    setPass(e.target.value);
    console.log(pass);
  };
  return (
    <div className="App">
      <h1 style={{ color: "navy" }}>Alphanumeric Password Checker</h1>
      <input onChange={inputHandler} />
      {pass.match(/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/) ? (
        <h4 style={{ color: "green" }}>Alphanumeric</h4>
      ) : (
        <h4 style={{ color: "red" }}>NOT Alphanumeric</h4>
      )}
    </div>
  );
}
