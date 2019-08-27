import React, { Component } from 'react';
import './Home.css'
import $ from 'jquery'
export default class Home extends Component {

    render() {
        return (
            <div className="homeContainer">
                <div className="container">
                    <div className="top-tags">
                        <span className="htmlOpen"> &nbsp;&nbsp;&nbsp;&lt;html&gt;</span>
                        <span className="bodyOpen"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                    </div>
                 

                    <div className="devInfo">
                            <h1 className="devHi">
                            Hi, my name is</h1>

                        <h1 className="devName">Tabrez Ansari</h1>

                        <h1 className="devTag">I'm a Software Developer</h1>

                        <div className="devDesc">
                            <p>I'm a Software Developer based in Bangalore, B.E specializing in building exceptional, high-quality websites and  applications.</p>
                        </div>

                        <button className="moreBtn">Read More </button>
                    </div>
                    <div className="bottom-tags">
                    <span className="bodyClose"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;</span>
                    <span className="htmlClose"> &nbsp;&nbsp;&nbsp;&lt;/html&gt;</span>
                    </div>
                    

                </div>



            </div>

        )
    }
}