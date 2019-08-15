import React,{Component} from 'react';
import './About.css'
import $ from 'jquery'
export default class About extends Component{

    render(){
        return(
               <div className="aboutContainer">
                <div className="container">
                    <div className="devAbout">
                        <h3 className="aboutHead">
                            About Me 
                        </h3>
                        <div className="info">
                            <div className="leftDesc">
                             <p className="brDesc">
                             Hello! I'm Tabrez Ansari, a software Developer based in Bangalore, BE who enjoys building things that live on the internet or for the desktop. I develop exceptional desktop,mobile,and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.

                            </p>
                            <p className="brDesc">
                            Shortly after graduating from Vishveshwaraya Technological University, I joined the engineering team at Intellicar Telematics Pvt. Ltd. where I work on a wide variety of interesting and meaningful projects on a daily basis.
                            </p>
                            </div>
                            <div className="rightDesc">
                                
                            </div>
                        </div>
                        
                    </div>

               </div>

               
               
            </div>

        )
    }
}