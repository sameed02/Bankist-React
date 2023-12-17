import "./App.css";
import "./Authenticator.css";

import { useState, useEffect } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";
import HeaderMain from "./HeaderMain";
import Balance from "./Balance";
import Movements from "./Movements";
import Operation from "./Operation";
import Summary from "./Summary";

import transferMoney from "./TransferMoney";
import loanMoney from "./LoanMoney";
import closeAccount from "./CloseAccount";
import { accounts } from "./Data";
import { LogoutTimer } from "./LogoutTimer";

function App() {
  const [accountsDb, setAccountsDb] = useState(accounts);
  const [loginDetails, setLoginDetails] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [transferTo, setTransferTo] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [closeAccountUser, setCloseAccountUser] = useState("");
  const [closeAccountPin, setCloseAccountPin] = useState("");

  const [currentUser, setCurrentUser] = useState(null);

  const [movements, setMovements] = useState([]);
  const [movementsDates, setMovementsDates] = useState([]);

  const [interest, setInterest] = useState([]);
  const [totalCredit, setTotalCredit] = useState([]);
  const [totalDebit, setTotalDebit] = useState([]);

  useEffect(() => {
    if (currentUser) {
      setMovements(currentUser.movements);
      setMovementsDates(currentUser.movementsDates);

      const totalInterest = currentUser.interestValue.reduce(
        (acc, currVal) => acc + currVal,
        0
      );

      setInterest(totalInterest);

      const credit = currentUser.movements
        .filter((val) => val > 0)
        .reduce((acc, currCredit) => acc + currCredit, 0);
      setTotalCredit(credit);

      const debit = currentUser.movements
        .filter((val) => val < 0)
        .reduce((acc, currCredit) => acc + currCredit, 0);
      setTotalDebit(debit);
    }
  }, [currentUser]);

  const toggleLogin = () => setShowSignUp(!showSignUp);

  const toggleSignUp = () => setShowSignUp(!showSignUp);

  const handleLogout = () => {
    setLoginDetails(false);
  };

  const handleTransferTo = (e) => setTransferTo(e.target.value);

  const handleTransferAmount = (e) => setTransferAmount(Number(e.target.value));

  const handleLoanAmount = (e) => setLoanAmount(Number(e.target.value));

  const handleCloseAccountUser = (e) => setCloseAccountUser(e.target.value);

  const handleCloseAccountPin = (e) => {
    setCloseAccountPin(Number(e.target.value));
  };

  return (
    <div className="App">
      {!loginDetails && (
        <Authenticator>
          <Header />

          {!showSignUp && (
            <Login
              onToggleLogin={toggleLogin}
              onSetLoginDetails={setLoginDetails}
              setCurrentUser={setCurrentUser}
            />
          )}
          {showSignUp && <Signup onToggleSignUp={toggleSignUp} />}
        </Authenticator>
      )}

      {loginDetails && (
        <>
          <HeaderMain user={currentUser} onHandleLogout={handleLogout} />
          <Main>
            <Balance totalCredit={totalCredit} totalDebit={totalDebit} />
            {currentUser && (
              <Movements
                movements={movements}
                movementsDates={movementsDates}
              />
            )}
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
              inputValue={transferTo}
              inputValue2={transferAmount}
              setInputValue={setTransferTo}
              setInputValue2={setTransferAmount}
              handleChange={handleTransferTo}
              handleChange2={handleTransferAmount}
              handleClick={transferMoney}
              setMovements={setMovements}
              setMovementsDates={setMovementsDates}
              currentUser={currentUser}
              setTotalCredit={setTotalCredit}
              setTotalDebit={setTotalDebit}
              setCurrentUser={setCurrentUser}
            />
            <Operation
              operationType={"loan"}
              headingOperationText={"Request Loan"}
              formType={"loan"}
              is2ndFormInput={false}
              formInputClassType1={"loan-amount"}
              inputText={"number"}
              label1={"Amount"}
              inputValue={loanAmount}
              setInputValue={setLoanAmount}
              handleChange={handleLoanAmount}
              handleClick={loanMoney}
              currentUser={currentUser}
              setMovements={setMovements}
              setMovementsDates={setMovementsDates}
              accountsDb={accountsDb}
              setAccountsDb={setAccountsDb}
              setInterest={setInterest}
              setCurrentUser={setCurrentUser}
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
              inputValue={closeAccountUser}
              inputValue2={closeAccountPin}
              setInputValue={setCloseAccountUser}
              setInputValue2={setCloseAccountPin}
              handleChange={handleCloseAccountUser}
              handleChange2={handleCloseAccountPin}
              handleClick={closeAccount}
              accountsDb={accountsDb}
              setAccountsDb={setAccountsDb}
              closeAccountUser={closeAccountUser}
              closeAccountPin={closeAccountPin}
              handleLogout={handleLogout}
            />
            <Summary
              interest={interest}
              totalCredit={totalCredit}
              totalDebit={totalDebit}
            />
            <LogoutTimer onHandleLogout={handleLogout} />
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
