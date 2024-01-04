import React, { useState, useContext } from "react";
import "./Navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import UserContext from "../../context/UserContext";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(UserContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "navbar dark-mode" : "navbar"}>
      <div className="wrapper">
        <span className="name">Prakhar Agrawal</span>
        <Sidebar />
        <div className="social">
          <a href="https://www.linkedin.com/in/prakharagrawal-">
            <img src="/linkedin.png" alt="" />
          </a>

          <a href="https://twitter.com/Prakhar_2610">
            <img src="/twitter.png" alt="" />
          </a>
          
          <div>
            {/* <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button> */}
            <div className="container">
              <div className="toggle-switch">
                <label className="switch">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={toggleDarkMode}
                  />
                  <span className="slider" />
                </label>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
