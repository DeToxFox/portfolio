// Project by:  David Turner
// Date Written: 	August 13, 2022
// File Name: 		David_Turner_Final_Sprint_Portfolio.zip
// GitHub URL: 	https://github.com/DeToxFox/Software-Development-S-22-5-Final-Sprint.git

import { Link } from "react-router-dom";
import Company_Logo from "../images/Company_Logo.png";
import "../styles/heading.css";
import React from "react";

const Heading = () => {
  return (
    <>
      <div className="container">
        <div id="logo-wrapper">
          <img src={Company_Logo} alt="company_logo" />
        </div>
        <div id="nav-links">
          <span id="home">
            <Link to="/">Home</Link>
          </span>
          <span id="my-work-links">
            <span id="my-work-title">My Work:</span>

            <span id="py">
              <Link className="link" to="pythonProjectsPage">
                Python Projects
              </Link>
            </span>

            <span id="js">
              <Link className="link" to="javaScriptPage">
                JavaScript Projects
              </Link>
            </span>

            <span id="rJS">
              <Link className="link" to="reactJSPage">
                ReactJS Projects
              </Link>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Heading;
