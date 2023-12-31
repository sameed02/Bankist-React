import React, { useState } from "react";
import { accounts } from "./Data";

export function Login({ onToggleLogin, onSetLoginDetails, setCurrentUser }) {
  const [userName, setUserName] = useState("");
  const [pin, setPin] = useState("");

  function handleUsernameChange(event) {
    setUserName(event.target.value);
  }

  function handlePinChange(event) {
    setPin(event.target.value);
  }

  function handleLoginUser(e) {
    e.preventDefault();

    const user = userName.toLowerCase().split(" ").join("");
    const password = Number(pin);

    const foundAccount = accounts.find((account) => {
      return (
        account.owner.toLowerCase().split(" ").join("") === user &&
        account.pin === password
      );
    });

    console.log(foundAccount);

    if (foundAccount) {
      console.log(`${foundAccount.owner}:Logged in`);
      setCurrentUser(foundAccount);
      onSetLoginDetails(true);
    } else {
      console.log("Invalid username or pin");
    }
  }

  return (
    <div className="form-container" id="login-form">
      <h2>Login</h2>
      <form className="form-authenticator" onSubmit={handleLoginUser}>
        <label htmlFor="username">Username</label>
        <input
          className="input-authenticator"
          type="text"
          name="username"
          value={userName}
          onChange={handleUsernameChange}
          required
        />
        <label htmlFor="password">Pin</label>
        <input
          className="input-authenticator"
          type="password"
          name="password"
          value={pin}
          onChange={handlePinChange}
          required
        />
        <button className="btn-form" type="submit">
          Login
        </button>
      </form>
      <p className="label-btn">
        Don't have an account?{" "}
        <button className="btn-header" onClick={onToggleLogin}>
          Sign up
        </button>
      </p>
    </div>
  );
}
