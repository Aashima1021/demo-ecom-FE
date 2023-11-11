import React, { Suspense, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import LoginWrapper from "./layout/LoginWrapper";

function App() {
  const [fire, setFire] = useState(false)
  setTimeout(() => {
    setFire(true)
  }, 2000)
  return (
    <Router basename={"/euphoria/dev/app/"}>
      {
        fire ? <LoginWrapper /> :
          <div
            className="flex items-center justify-center w-full"
            style={{ height: "100vh" }}
          >
            <SyncLoader size={20} color="#8A33FD" />
          </div>
      }
    </Router>
  );
}

export default App;
