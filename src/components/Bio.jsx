// Project by:  David Turner
// Date Written: 	August 13, 2022
// File Name: 		David_Turner_Final_Sprint_Portfolio.zip
// GitHub URL: 	https://github.com/DeToxFox/Software-Development-S-22-5-Final-Sprint.git

import React from "react";
import "../styles/bio.css";
import Collapsible from "react-collapsible";
import Profile_Pic from "../images/Profile_Pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Modal from "./Modal";

function Bio(props) {
  return (
    <>
      <div className="mainContainer">
        <div className="bio-container">
          <div className="col-button">
            <Collapsible trigger="Hello, I’m David Turner. I am in my second semester at Keyin College studying to become a fullstack software developer (click here for more)">
              <div id="inside-bio">
                <p id="bio-text-body">
                  I currently reside in Newfoundland, CA. I enjoy the challenge
                  of solving a problem using code and seeing the final result in
                  action and as a KPM (tutor) helping the semester 1 students to
                  understand coding logic as they learn the foundations of
                  coding. Please feel free to view my resume and contact me
                  using the buttons below.
                </p>

                <span className="bio-button">
                  <Modal />
                </span>

                <button className="bio-button" type="button">
                  <a
                    href="https://drive.google.com/file/d/1Qd8jCo9jmNjrTNaI2VTncy2v82Lv54Iv/view?usp=sharing"
                    target="_blank"
                  >
                    My Resume
                  </a>
                </button>
              </div>
            </Collapsible>
          </div>
        </div>
        <div className="profile-pic">
          <div>
            <img src={Profile_Pic} alt="" />
          </div>
          <div>
            <h1 id="socialMedia">Social Media</h1>
          </div>
          <div className="socialMedIcons">
            <span id="linkedin">
              <a
                href="https://www.linkedin.com/in/david-turner-24a3863b"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
            </span>
            <span id="gitHub">
              <a href="https://github.com/DeToxFox" target="_blank">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bio;
