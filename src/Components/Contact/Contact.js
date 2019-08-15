import React,{Component} from 'react';
import './Contact.css'
import $ from 'jquery'
export default class Contact extends Component{

    render(){
        return(
               <div className="contactContainer">
                <div className="container">
                    <div className="devContact">
                        <h3 className="contactHead">
                           So what's next?
                        </h3>
                        <h4 className="getTouch">
                            Get In Touch
                        </h4>
                        <p className="brDesc">Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!

                            </p>
                        <a href="mailto:tabrezdaily007@gmail.com" target="_top">
                            <button className="getTouchBtn">Say Hello</button>
                        </a>
                     </div>
                   

               </div>

               
               
            </div>

        )
    }
}