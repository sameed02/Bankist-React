import "./App.css";
import "./Authenticator.css";

import { useRef, useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";
import HeaderMain from "./HeaderMain";
import Balance from "./Balance";
import Movements from "./Movements";
import Operation from "./Operation";

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

  function handleLogout() {
    setLoginDetails(false);
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

      {loginDetails && (
        <>
          <HeaderMain user={currentUser} onHandleLogout={handleLogout} />
          <Main>
            <Balance />
            <Movements
              movements={currentUser.current.movements}
              movementsDates={currentUser.current.movementsDates}
            />
            <Operation />
          </Main>
        </>
      )}
    </div>
  );
}

export default App;

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

function Main({ children }) {
  return <div className="app">{children}</div>;
}
