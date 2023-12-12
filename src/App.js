import "./App.css";
import "./Authenticator.css";

import Main from "./Main";

import { useRef, useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";

function App() {
  const [loginDetails, setLoginDetails] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const currentUser = useRef(null);

  function toggleLogin() {
    setShowSignUp(!showSignUp);
  }

  function toggleSignUp() {
    setShowSignUp(!showSignUp);
  }

  return (
    <div className="App">
      {!loginDetails && (
        <Authenticator>
          <Header />

          {!showSignUp && (
            <Login
              onToggleLogin={toggleLogin}
              onSetLoginDetails={setLoginDetails}
              currentUser={currentUser}
            />
          )}
          {showSignUp && <Signup onToggleSignUp={toggleSignUp} />}
        </Authenticator>
      )}
      {loginDetails && <Main currentUser={currentUser} />}
    </div>
  );
}

function Authenticator({ children }) {
  return <div>{children}</div>;
}

function Header() {
  return (
    <div className="header">
      <p>Bankist</p>
      <img src="./logo.png" alt="Logo" className="logo" />
    </div>
  );
}

export default App;
