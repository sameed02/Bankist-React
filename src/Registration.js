import React, { useState } from "react";
import "./Registration.css";

export default function Registration() {
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
      {!showSignUp && <Login onHandleLogin={handleLogin} />}
      {showSignUp && <Signup onHandleSignUp={handleSignUp} />}
    </>
  );
}

function Header() {
  return (
    <div className="header">
      <p>Bankist</p>
      <img src="./logo.png" alt="Logo" class="logo" />
    </div>
  );
}

function Login({ onHandleLogin }) {
  return (
    <div className="form-container" id="login-form">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Pin</label>
        <input type="password" id="password" name="password" required />
        <button className="btn--form" type="submit">
          Login
        </button>
      </form>
      <p className="label-btn">
        Don't have an account? {""}
        <button className="btn--header" onClick={onHandleLogin}>
          Sign up
        </button>
      </p>
    </div>
  );
}

function Signup({ onHandleSignUp }) {
  return (
    <div className="form-container" id="signup-form">
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="new-username">Username</label>
        <input type="text" id="new-username" name="new-username" required />
        <label htmlFor="new-password">Pin</label>
        <input type="password" id="new-password" name="new-password" required />
        <button className="btn--form" type="submit">
          Sign Up
        </button>
      </form>
      <p className="label-btn">
        Already have an account? {""}
        <button className="btn--header" onClick={onHandleSignUp}>
          Login
        </button>
      </p>
    </div>
  );
}
