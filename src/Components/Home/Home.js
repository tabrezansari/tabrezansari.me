import React,{Component} from 'react';
import './Home.css'
import $ from 'jquery'
export default class Home extends Component{

    render(){
        return(
               <div className="homeContainer">
                <div className="container">
                <span className="htmlOpen"> &nbsp;&nbsp;&nbsp;&lt;html&gt;</span>
                 <span className="bodyOpen"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>

                  <div className="devInfo">
                        <span className="pOpen"> &nbsp;&nbsp;&nbsp;&lt;p&gt;</span>
                            <h1 className="devHi">
                            Hi, my name is</h1>
                        <span className="pClose"> &nbsp;&nbsp;&nbsp;&lt;/p&gt;</span>

                        <span className="h1Open"> &nbsp;&nbsp;&nbsp;&lt;h1&gt;</span>
                            <h1 className="devName">Tabrez Ansari</h1>                      

                            <h1 className="devTag">I build things for web</h1>
                         <span className="h1Close"> &nbsp;&nbsp;&nbsp;&lt;/h1&gt;</span>

                        <span className="p2Open"> &nbsp;&nbsp;&nbsp;&lt;p&gt;</span>  
                            <div className="devDesc">
                                <p>I'm a software Developer based in Bangalore, B.E specializing in building exceptional, high-quality websites and applications.</p>
                            </div>
                        <span className="p2Close"> &nbsp;&nbsp;&nbsp;&lt;/p&gt;</span>

                        <span className="btnOpen"> &nbsp;&nbsp;&nbsp;&lt;btn&gt;</span>
                          <button className="moreBtn">Read More </button>
                         <span className="btnClose"> &nbsp;&nbsp;&nbsp;&lt;/btn&gt;</span>
                  </div>
                  <span className="bodyClose"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;</span>
                  <span className="htmlClose"> &nbsp;&nbsp;&nbsp;&lt;/html&gt;</span>

               </div>

               
               
            </div>

        )
    }
}