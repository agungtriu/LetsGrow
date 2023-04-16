import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BarMenu, MainContent } from "./components";

function App() {
  const [loginStatus, setLoginStatus] = useState({
    status: false,
    data: {},
  });
  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };
  useState(() => {
    if (localStorage.getItem("access_token")) {
      setLoginStatus({
        status: true,
        data: {
          username: localStorage.username,
          image: localStorage.image,
          role: localStorage.role,
        },
      });
    } else {
      setLoginStatus({ status: false, data: {} });
    }
  });
  return (
    <>
      <div>
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
