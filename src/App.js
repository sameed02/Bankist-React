import "./App.css";

import Main from "./Main";
import Authenticator from "./Authenticator";
import { useState } from "react";

function App() {
  const [loginDetails, setLoginDetails] = useState(false);
  return (
    <div className="App">
      {!loginDetails && <Authenticator onSetLoginDetails={setLoginDetails} />}
      {loginDetails && <Main />}
    </div>
  );
}

export default App;
