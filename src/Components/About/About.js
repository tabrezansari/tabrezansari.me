import React, { Component } from "react";
import "./About.css";

import { tools, lang } from "../Constants/constants";
export default class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <div className="container">
          <div className="top-tags">
            <span className="htmlOpen"> &nbsp;&nbsp;&nbsp;&lt;html&gt;</span>
            <span className="bodyOpen"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
          </div>
          <div className="devAbout">
            <div className="leftSide">
              <h3 className="aboutHead">About Me</h3>

              <div className="info">
                <div className="leftDesc">
                  <p className="brDesc">
                    Hello! I'm Tabrez Ansari, a software Developer based in
                    Bangalore, BE who enjoys building things for Web ,Mobile and
                    desktop. I develop exceptional desktop,mobile,and web apps .
                  </p>
                  <p className="brDesc">
                    Shortly after graduating from Vishveshwaraya Technological
                    University, I joined the engineering team at Intellicar
                    Telematics Pvt. Ltd. where I work on a wide variety of
                    interesting and meaningful projects on a daily basis.
                  </p>
                </div>
              </div>
            </div>
            <div className="rightSide">
              <div className="tooltech">
                <h3 className="toolHead">Tools &amp; Frameworks</h3>
                <div className="skillsCont">
                  {tools.map((data) => (
                    <div className="skill">
                      <div className="skillImg">
                        <img
                          src={require("../../Assets/skills/" + data.logo)}
                          alt="logo"
                        />
                      </div>
                      <span>{data.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tooltech">
                <h3 className="toolHead">Programming Languages</h3>
                <div className="skillsCont">
                  {lang.map((data) => (
                    <div className="skill">
                      <div className="skillImg">
                        <img
                          src={require("../../Assets/skills/" + data.logo)}
                          alt="logo"
                        />
                      </div>
                      <span>{data.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-tags">
            <span className="bodyClose"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;</span>
            <span className="htmlClose"> &nbsp;&nbsp;&nbsp;&lt;/html&gt;</span>
          </div>
        </div>
      </div>
    );
  }
}
