import "./App.css";

import Main from "./Main";
import Authenticator from "./Authenticator";
import { useRef, useState } from "react";

function App() {
  const [loginDetails, setLoginDetails] = useState(false);
  const currentUser = useRef(null);
  return (
    <div className="App">
      {!loginDetails && (
        <Authenticator
          onSetLoginDetails={setLoginDetails}
          currentUser={currentUser}
        />
      )}
      {loginDetails && <Main currentUser={currentUser} />}
    </div>
  );
}

export default App;
