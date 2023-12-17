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

    const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
    const formatter = new Intl.DateTimeFormat("en-GB", options);

    if (existingAccount) {
      console.log("Account with this owner already exists");
      // Handle the case where the account already exists, e.g., show an error message
    } else {
      // Create a new account object
      const newAccount = {
        owner: newUsername,
        movements: [500],
        movementsDates: [formatter.format(new Date())],
        interestRate: 1.5,
        interestValue: [0], // Example value
        pin: Number(newPin),
        totalDeposit: 0,
        totalCredit: 0,
        Balance: 0,
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
      <form className="form-authenticator">
        <label htmlFor="new-username">Username</label>
        <input
          className="input-authenticator"
          type="text"
          name="new-username"
          value={newUsername}
          onChange={handleNewUsernameChange}
          required
        />
        <label htmlFor="new-password">Pin</label>
        <input
          className="input-authenticator"
          type="password"
          name="new-password"
          value={newPin}
          onChange={handleNewPinChange}
          required
        />
        <button className="btn-form" type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
      <p className="label-btn">
        Already have an account?{" "}
        <button className="btn-header" onClick={onToggleSignUp}>
          Login
        </button>
      </p>
    </div>
  );
}
