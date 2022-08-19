// Project by:  David Turner
// Date Written: 	August 13, 2022
// File Name: 		David_Turner_Final_Sprint_Portfolio.zip
// GitHub URL: 	https://github.com/DeToxFox/Software-Development-S-22-5-Final-Sprint.git

import React from "react";
import { PyData } from "./PyData";
import PySlider from "./PySlider";
import "../styles/slider.css";

export default function PythonProjectsPage() {
  return (
    <>
      <div className="langHeading">
        <h1 id="langTitle">PYTHON PROJECTS</h1>
      </div>

      <div className="langTitleBlock">
        <p id="projectDescription">
          <h1>The One Stop Insurance Company</h1> The One Stop Insurance Company
          needs a program to enter and calculate new insurance policies and
          information for its customers. This utilized a data files for
          constants and policy information. The following is some of the code
          snippets and final output.
        </p>
      </div>
      <div id="langSlider">
        <PySlider slides={PyData} />
      </div>
    </>
  );
}
