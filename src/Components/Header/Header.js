import React, { Component } from "react";
import "./Header.css";
import Resume from "../../Assets/TabrezAnsari.pdf";
import tabrez from "../../Assets/tabrez.png";

export default class Header extends Component {
  setViewIndex = (index) => {
    this.props.viewHandler(index);
  };
  showNav = () => {
    let mobNav = document.getElementById("head-mobile");
    mobNav.style.display = "block";
  };

  render() {
    return (
      <div className="header">
        <img className="imgLogo" src={tabrez} alt="MainLogo" />
        <div className="menu-bar" onClick={() => this.showNav()}>
          <i
            style={{ fontStyle: "normal" }}
            className="fa fa-bars menu-mobile"
          ></i>
        </div>
        <div id="head-mobile" className="header-mobile">
          <div className="menus">
            <a
              className="menus-a"
              href="#"
              onClick={() => this.setViewIndex(0)}
            >
              <i className="fa fa-home header-icon"></i>
            </a>
            <a
              href="#"
              className="menus-a"
              onClick={() => this.setViewIndex(1)}
            >
              <i className="fa fa-user header-icon"></i>{" "}
            </a>
            <a
              href="#"
              className="menus-a"
              onClick={() => this.setViewIndex(2)}
            >
              <i className="fa fa-briefcase  header-icon"></i>{" "}
            </a>
            <a
              href="#"
              className="menus-a"
              onClick={() => this.setViewIndex(3)}
            >
              <i className="fa fa-envelope header-icon"></i>{" "}
            </a>
          </div>

          <div className="social-mobile">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/tabrezprofile"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fa fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tabrezansari"
                  target="_blank"
                  rel="noopener"
                >
                  {" "}
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tabrezprofile/"
                  target="_blank"
                  rel="noopener"
                >
                  {" "}
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/tabrezansari_"
                  rel="noopener"
                  target="_blank"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-right">
          <a onClick={() => this.setViewIndex(0)}>
            <small>01.</small> Home
          </a>
          <a onClick={() => this.setViewIndex(1)}>
            <small>02.</small> About
          </a>
          <a onClick={() => this.setViewIndex(2)}>
            <small>03.</small> Experience
          </a>
          {/* <a onClick={() => this.setViewIndex(3)}>
            <small>04.</small> Blogs
          </a> */}
          <a onClick={() => this.setViewIndex(4)}>
            <small>05.</small> Contact
          </a>
          <a href={Resume} target="_blank" rel="noopener" className="resumeBtn">
            RESUME
          </a>
        </div>
      </div>
    );
  }
}
