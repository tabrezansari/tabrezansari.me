import React,{Component} from 'react';
import './Header.css';
import Resume from '../../Assets/tabrezansari.pdf'
import tabrez from '../../Assets/tabrez.png'
import tabrezsvg from '../../Assets/tabrezsvg.svg'
export default class Header extends Component{

setViewIndex=(index)=>{
this.props.viewHandler(index);
}

    render(){
        return(
            <div className="header">
                <img className="imgLogo" src={tabrez} />
                <div className="menu-bar" onClick={()=>this.showNav()}>
                 <i class="fas fa-bars"></i>
                </div>
                <div className="header-mobile">
                    <div className="menus">
                    <a  onClick={()=>this.setViewIndex(0)}><i class="fas fa-home header-icon"></i><small>Home</small></a>
                    <a   onClick={()=>this.setViewIndex(1)}><i class="fas fa-home header-icon"></i> <small>About</small></a>
                    <a  onClick={()=>this.setViewIndex(2)}><i class="fas fa-home header-icon"></i> <small>Experience</small></a>
                    <a  onClick={()=>this.setViewIndex(3)}><i class="fas fa-home header-icon"></i> <small>Contact</small></a>
                    </div>

                </div>
                <div className="header-right">
                    <a  onClick={()=>this.setViewIndex(0)}><small>01.</small> Home</a>
                    <a   onClick={()=>this.setViewIndex(1)}><small>02.</small> About</a>
                    <a  onClick={()=>this.setViewIndex(2)}><small>03.</small> Experience</a>
                    <a  onClick={()=>this.setViewIndex(3)}><small>04.</small> Contact</a>
                    <a href={Resume} target="_blank" className="resumeBtn">RESUME</a>


                </div>
            </div>
        )
    }
}