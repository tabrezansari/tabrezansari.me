import React,{Component} from 'react';
import './Header.css';
import Resume from '../../Assets/TabrezAnsari.pdf'
export default class Header extends Component{

setViewIndex=(index)=>{
this.props.viewHandler(index);
}

    render(){
        return(
            <div className="header">
                <a href="#default" className="logo">
                &lt; T/ &gt;
                </a>
                <div className="header-right">
                    <a  href="#home" onClick={()=>this.setViewIndex(0)}><small>01.</small> Home</a>
                    <a  href="#home" onClick={()=>this.setViewIndex(1)}><small>02.</small> About</a>
                    <a href="#contact" onClick={()=>this.setViewIndex(2)}><small>03.</small> Skills</a>
                    <a href="#about" onClick={()=>this.setViewIndex(3)}><small>04.</small> Work</a>
                    <a href="#about"  onClick={()=>this.setViewIndex(4)}><small>05.</small> Contact</a>
                    <a href={Resume} target="_blank" className="resumeBtn">RESUME</a>


                </div>
            </div>
        )
    }
}