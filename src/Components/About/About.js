import React,{Component} from 'react';
import './About.css'
import Skills from '../Skills/Skills'
import $ from 'jquery'
export default class About extends Component{

    render(){
        return(
               <div className="aboutContainer">
                <div className="container">
                <span className="htmlOpen"> &nbsp;&nbsp;&nbsp;&lt;html&gt;</span>
                 <span className="bodyOpen"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                    <div className="devAbout">
                    <span className="h1Open"> &nbsp;&nbsp;&nbsp;&lt;h1&gt;</span>
                        <h3 className="aboutHead">
                            About Me 
                        </h3>
                        <span className="h1Close"> &nbsp;&nbsp;&nbsp;&lt;/h1&gt;</span>

                        <div className="info">
                        <span className="pOpen"> &nbsp;&nbsp;&nbsp;&lt;p&gt;</span>

                            <div className="leftDesc">
                             <p className="brDesc">
                             Hello! I'm Tabrez Ansari, a software Developer based in Bangalore, BE who enjoys building things that live on the internet or for the desktop. I develop exceptional desktop,mobile,and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.

                            </p>
                            <p className="brDesc">
                            Shortly after graduating from Vishveshwaraya Technological University, I joined the engineering team at Intellicar Telematics Pvt. Ltd. where I work on a wide variety of interesting and meaningful projects on a daily basis.
                            </p>
                            </div>
                            <span className="pClose"> &nbsp;&nbsp;&nbsp;&lt;/p&gt;</span>

                            <div className="rightDesc">
                                <Skills/>
                            </div>
                        </div>
                        <span className="bodyClose"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;</span>
                  <span className="htmlClose"> &nbsp;&nbsp;&nbsp;&lt;/html&gt;</span>
                        
                    </div>

               </div>

               
               
            </div>

        )
    }
}