import React from "react";
import Tutorials from "../Tutorial/Tutorials";
import Information from "./Information";

const HomePage = () => {
  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Tutorials></Tutorials>
        </div>
        <div id="footer">
          <Information></Information>
        </div>
      </div>
    </>
  );
};

export default HomePage;
