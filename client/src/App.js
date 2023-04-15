import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BarMenu, MainContent } from "./components";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };
  useState(() => {
    if (localStorage.getItem("access_token")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  });
  return (
    <>
      <div className="main-page">
        <BarMenu
          loginStatus={loginStatus}
          loginCbHandler={loginCbHandler}
        ></BarMenu>
        <MainContent loginCbHandler={loginCbHandler}></MainContent>
      </div>
    </>
  );
}

export default App;
