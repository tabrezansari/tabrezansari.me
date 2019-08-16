import React,{Component} from 'react';
import './Contact.css'
import $ from 'jquery'
export default class Contact extends Component{

    render(){
        return(
               <div className="contactContainer">
                <div className="container">
                <span className="htmlOpen"> &nbsp;&nbsp;&nbsp;&lt;html&gt;</span>
                 <span className="bodyOpen"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                    <div className="devContact">
                    <span className="h1Open"> &nbsp;&nbsp;&nbsp;&lt;h1&gt;</span>

                        <h3 className="contactHead">
                           So what's next?
                        </h3>
                        <span className="h1Close"> &nbsp;&nbsp;&nbsp;&lt;/h1&gt;</span>

                        <span className="h12Open"> &nbsp;&nbsp;&nbsp;&lt;h1&gt;</span>
                        <h4 className="getTouch">
                            Get In Touch
                        </h4>
                        <span className="h12Close"> &nbsp;&nbsp;&nbsp;&lt;/h1&gt;</span>
                        <span className="pOpen"> &nbsp;&nbsp;&nbsp;&lt;p&gt;</span>

                        <p className="brDesc">Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!

                            </p>

                            <span className="pClose"> &nbsp;&nbsp;&nbsp;&lt;/p&gt;</span>
                            <span className="btnOpen"> &nbsp;&nbsp;&nbsp;&lt;btn&gt;</span>

                        <a href="mailto:tabrezdaily007@gmail.com" target="_top">
                            <button className="getTouchBtn">Say Hello</button>
                        </a>
                        <span className="btnClose"> &nbsp;&nbsp;&nbsp;&lt;/btn&gt;</span>

                     </div>
                     <span className="bodyClose"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;</span>
                  <span className="htmlClose"> &nbsp;&nbsp;&nbsp;&lt;/html&gt;</span>
                   

               </div>

               
               
            </div>

        )
    }
}