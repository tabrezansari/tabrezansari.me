import React, { Component } from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import "./MainLayout.css";
import $ from "jquery";
import { thisExpression } from "@babel/types";

export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewIndex: 0,
    };
    this.viewHandler = this.viewHandler.bind(this);
  }

  viewHandler = (idx) => {
    this.setState({ viewIndex: idx });
  };

  componentDidMount() {
    $("body").click(function () {
      $("#head-mobile").hide();
    });
  }

  getHomeView = () => {
    return <Home />;
  };

  getExperienceView = () => {
    return <Experience />;
  };

  getAboutView = () => {
    return <About />;
  };

  getContactView = () => {
    return <Contact />;
  };

  getViews = () => {
    switch (this.state.viewIndex) {
      case 0:
        return this.getHomeView();
        break;
      case 1:
        return this.getAboutView();
        break;
      case 2:
        return this.getExperienceView();
        break;
      case 3:
        return this.getContactView();
        break;
    }
  };
  render() {
    return (
      <div className="mainLayout">
        <div id="large-header" style={{ position: "fixed" }}>
          <canvas id="demo-canvas"></canvas>
        </div>
        <Header viewHandler={this.viewHandler} />
        <div className="mainBody">{this.getViews()}</div>
        <div className="leftSocial">
          <ul>
            <li>
              <a href="https://www.facebook.com/tabrezprofile" target="_blank">
                <i className="fa fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/tabrezansari" target="_blank">
                {" "}
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tabrezprofile/"
                target="_blank"
              >
                {" "}
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/tabrezansari_" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </li>

            <div className="vl"></div>
          </ul>
        </div>
      </div>
    );
  }
}
