import React, { useState } from "react";
import { accounts } from "./Data";

export function Signup({ onToggleSignUp }) {
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
    const existingAccount = accounts.find((account) => {
      return (
        account.owner.toLowerCase() === newUsername.toLowerCase() &&
        account.pin === Number(newPin)
      );
    });

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
        <button className="btn--form" type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
      <p className="label-btn">
        Already have an account?{" "}
        <button className="btn--header" onClick={onToggleSignUp}>
          Login
        </button>
      </p>
    </div>
  );
}
