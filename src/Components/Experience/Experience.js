import React, { Component } from 'react';
import './Experience.css'
import $ from 'jquery'
export default class Experience extends Component {

    render() {
        return (
            <div className="expContainer">
                <div className="container">
                    <div className="devExp">
                        <h3 className="expHead">
                            Experience
                        </h3>
                        <div className="expTabs">
                            <ul>
                                <li><button className="activeTab">Intellicar</button></li>
                                <li><button>SVCEConnect</button></li>
                            </ul>

                        </div>
                        <div className="jobDesc">
                            <h4>Application Engineer <span>@ Intellicar </span></h4>
                            <h5>July 2019 - Present</h5>
                            <div className="jobBrDesc">
                                <ul>
                                    <li>Developing and maintaining code for fleet managment and tracking  websites primarily using ReactJS, JavaScript,Socket.io,Nodejs, CSS, Sass,  and jQuery</li>
                                    <li>Manually testing websites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</li>
                                </ul>
                            </div>
                        </div>


                    </div>


                </div>



            </div>

        )
    }
}