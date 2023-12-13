import "./App.css";
import "./Authenticator.css";

import { useRef, useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";
import HeaderMain from "./HeaderMain";
import Balance from "./Balance";
import Movements from "./Movements";
import Operation from "./Operation";
import Summary from "./Summary";

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
            <Operation
              operationType={"transfer"}
              headingOperationText={"Transfer Money"}
              formType={"transfer"}
              is2ndFormInput={true}
              formInputClassType1={"to"}
              formInputClassType2={"amount"}
              inputText={"text"}
              inputNumber={"number"}
              formBtnType={"transfer"}
              label1={"Transfer to"}
              label2={"Amount"}
            />
            <Operation
              operationType={"loan"}
              headingOperationText={"Request Loan"}
              formType={"loan"}
              is2ndFormInput={false}
              formInputClassType1={"loan-amount"}
              inputText={"number"}
              label1={"Amount"}
            />
            <Operation
              operationType={"close"}
              headingOperationText={"Close Account"}
              formType={"close"}
              is2ndFormInput={true}
              formInputClassType1={"user"}
              formInputClassType2={"pin"}
              inputText={"text"}
              inputNumber={"password"}
              formBtnType={"close"}
              label1={"Confirm User"}
              label2={"Confirm Pin"}
            />
            <Summary />
            <LogoutTimer />
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

function LogoutTimer() {
  return (
    <p className="logout-timer">
      You will be logged out in <span className="timer">05:00</span>
    </p>
  );
}
