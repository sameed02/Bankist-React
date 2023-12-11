import React, { useState } from "react";
import "./Login.css";
import { accounts } from "./Data";

export default function Authenticator({ onSetLoginDetails, currentUser }) {
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
          currentUser={currentUser}
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

function Login({ onHandleLogin, onSetLoginDetails, currentUser }) {
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
      currentUser.current = foundAccount;
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

  const handleSignUp = (event) => {
    event.preventDefault();

    // Check if an account with the same owner already exists
    const existingAccount = accounts.find(
      (account) => account.owner.toLowerCase() === newUsername.toLowerCase()
    );

    if (existingAccount) {
      console.log("Account with this owner already exists");
      // Handle the case where the account already exists, e.g., show an error message
    } else {
      // Create a new account object
      const newAccount = {
        owner: newUsername,
        movements: [200, -200, 340, -300, -20, 50, 400, -460], // Add any additional properties as needed
        interestRate: 0, // Example value
        pin: Number(newPin),
      };

      // Add the new account to the accounts array
      accounts.push(newAccount);

      // Log the new account
      console.log("New account created:", newAccount);
    }
  };

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
        <button className="btn--form" type="submit" onClick={handleSignUp}>
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
