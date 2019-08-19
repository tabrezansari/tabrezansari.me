import React,{Component} from 'react';
import './About.css'
import Skills from '../Skills/Skills'
import $ from 'jquery'
import react from '../../Assets/skills/react.svg'
import {tools,lang} from '../Constants/constants';
export default class About extends Component{

    render(){
        return(
               <div className="aboutContainer">
                <div className="container">
                <span className="htmlOpen"> &nbsp;&nbsp;&nbsp;&lt;html&gt;</span>
                 <span className="bodyOpen"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                    <div className="devAbout">
                        <div className="leftSide">
                    <span className="h1Open"> &nbsp;&nbsp;&nbsp;&lt;h1&gt;</span>
                        <h3 className="aboutHead">
                            About Me 
                        </h3>
                        <span className="h1Close"> &nbsp;&nbsp;&nbsp;&lt;/h1&gt;</span>

                        <div className="info">
                        <span className="pOpen"> &nbsp;&nbsp;&nbsp;&lt;p&gt;</span>

                            <div className="leftDesc">
                             <p className="brDesc">
                             Hello! I'm Tabrez Ansari, a software Developer based in Bangalore, BE who enjoys building things  for Web ,Mobile and desktop. I develop exceptional desktop,mobile,and web apps .

                            </p>
                            <p className="brDesc">
                            Shortly after graduating from Vishveshwaraya Technological University, I joined the engineering team at Intellicar Telematics Pvt. Ltd. where I work on a wide variety of interesting and meaningful projects on a daily basis.
                            </p>
                            </div>
                            <span className="pClose"> &nbsp;&nbsp;&nbsp;&lt;/p&gt;</span>

                          
                        </div>
                        <span className="bodyClose"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;</span>
                         <span className="htmlClose"> &nbsp;&nbsp;&nbsp;&lt;/html&gt;</span>
                    </div>
                    <div className="rightSide">
                                <div className="tooltech">
                                <h3 className="toolHead">
                                    Tools &amp; Frameworks 
                                </h3>
                                <div className="skillsCont">
                                 {
                                    tools.map((data)=>(
                                        <div className="skill">
                                        <div className="skillImg">
                                            <img src={require("../../Assets/skills/"+data.logo)} />
                                        </div>
                                        <span>{data.name}</span>
                                    </div>
                                    ))
                                 }
                                   
                                </div>
                                </div>

                                <div className="tooltech">
                                <h3 className="toolHead">
                                    Programming Languages 
                                </h3>
                                <div className="skillsCont">
                                 {
                                    lang.map((data)=>(
                                        <div className="skill">
                                        <div className="skillImg">
                                            <img src={require("../../Assets/skills/"+data.logo)} />
                                        </div>
                                        <span>{data.name}</span>
                                    </div>
                                    ))
                                 }
                                   
                                </div>
                                </div>
                            </div>
                        
                    </div>

               </div>

               
               
            </div>

        )
    }
}