import React, { useState } from "react";
import "./Login.css";
import { accounts } from "./Data";

export default function Authenticator({ onSetLoginDetails }) {
  const [showSignUp, setShowSignUp] = useState(false);

  function handleLogin() {
    setShowSignUp(!showSignUp);
  }

  function handleSignUp() {
    setShowSignUp(!showSignUp);
  }

  return (
    <>
      <Header />
      {!showSignUp && (
        <Login
          onHandleLogin={handleLogin}
          onSetLoginDetails={onSetLoginDetails}
        />
      )}
      {showSignUp && <Signup onHandleSignUp={handleSignUp} />}
    </>
  );
}

function Header() {
  return (
    <div className="header">
      <p>Bankist</p>
      <img src="./logo.png" alt="Logo" className="logo" />
    </div>
  );
}

function Login({ onHandleLogin, onSetLoginDetails }) {
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

    const foundAccount = accounts.find((account) => {
      return (
        account.owner.toLowerCase().split(" ").join("") === user &&
        account.pin === Number("1111")
      );
    });

    console.log(foundAccount);

    if (foundAccount) {
      console.log("Logged in");
      onSetLoginDetails(true);
    } else {
      console.log("Invalid username or pin");
    }
  }

  return (
    <div className="form-container" id="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLoginUser}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={userName}
          onChange={handleUsernameChange}
          required
        />
        <label htmlFor="password">Pin</label>
        <input
          type="password"
          name="password"
          value={pin}
          onChange={handlePinChange}
          required
        />
        <button className="btn--form" type="submit">
          Login
        </button>
      </form>
      <p className="label-btn">
        Don't have an account?{" "}
        <button className="btn--header" onClick={onHandleLogin}>
          Sign up
        </button>
      </p>
    </div>
  );
}

function Signup({ onHandleSignUp }) {
  const [newUsername, setNewUsername] = useState("");
  const [newPin, setNewPin] = useState("");

  function handleNewUsernameChange(event) {
    setNewUsername(event.target.value);
  }

  function handleNewPinChange(event) {
    setNewPin(event.target.value);
  }

  return (
    <div className="form-container" id="signup-form">
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="new-username">Username</label>
        <input
          type="text"
          name="new-username"
          value={newUsername}
          onChange={handleNewUsernameChange}
          required
        />
        <label htmlFor="new-password">Pin</label>
        <input
          type="password"
          name="new-password"
          value={newPin}
          onChange={handleNewPinChange}
          required
        />
        <button className="btn--form" type="submit">
          Sign Up
        </button>
      </form>
      <p className="label-btn">
        Already have an account?{" "}
        <button className="btn--header" onClick={onHandleSignUp}>
          Login
        </button>
      </p>
    </div>
  );
}
