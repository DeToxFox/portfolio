// Project by:  David Turner
// Date Written: 	August 13, 2022
// File Name: 		David_Turner_Final_Sprint_Portfolio.zip
// GitHub URL: 	https://github.com/DeToxFox/Software-Development-S-22-5-Final-Sprint.git

import React from "react";
import { ReactData } from "./ReactData";
import ReactSlider from "./ReactSlider";
import "../styles/slider.css";

const ReactJSPage = () => {
  return (
    <>
      <div className="langHeading">
        <h1 id="langTitle">React JS PROJECTS</h1>
      </div>

      <div className="langTitleBlock">
        <p id="projectDescription">
          <h1>Safe Space</h1> Safe space is a social media webapp. Following
          inspiration from any social media apps of today. The following is some
          of the UI and code snippets.
        </p>
      </div>
      <div id="langslider">
        <ReactSlider slides={ReactData} />
      </div>
    </>
  );
};

export default ReactJSPage;
