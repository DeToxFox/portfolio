// Project by:  David Turner
// Date Written: 	August 13, 2022
// File Name: 		David_Turner_Final_Sprint_Portfolio.zip
// GitHub URL: 	https://github.com/DeToxFox/Software-Development-S-22-5-Final-Sprint.git

import React from "react";
import { JsData } from "./JsData";
import JsSlider from "./JsSlider";
import "../styles/slider.css";

const JavaScriptPage = () => {
  return (
    <>
      <div className="langHeading">
        <h1 id="langTitle">JAVASCRIPT PROJECTS</h1>
      </div>

      <div className="langTitleBlock">
        <p id="projectDescription">
          <h1>Gary Blue's Diner</h1> Local restaurant owner, Gary Blue is
          looking to create a website for his establishment, "Gary Blue’s
          Diner", to increase exposure. The following is some of the UI and code
          snippets.
        </p>
      </div>
      <div id="langslider">
        <JsSlider slides={JsData} />
      </div>
    </>
  );
};

export default JavaScriptPage;
