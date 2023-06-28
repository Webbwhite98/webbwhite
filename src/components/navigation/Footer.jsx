import React from 'react';
import {NavLink} from "react-router-dom";

const Footer=()=>{


    return(
        <footer className="footer">
            {/*<div className="waves">*/}
            {/*    <div className="wave" id="wave1"></div>*/}
            {/*    <div className="wave" id="wave2"></div>*/}
            {/*    <div className="wave" id="wave3"></div>*/}
            {/*    <div className="wave" id="wave4"></div>*/}
            {/*</div>*/}

            <ul className="menu">
                <li className="nav-item"><NavLink to={"/"} className={'menu__link'} exact={true}>Home</NavLink></li>
                <li className="menu__item"><NavLink to={"/about"} className={'menu__link'} exact={true}>About Me</NavLink></li>
                <li className="menu__item"><NavLink to={"/projects"} className={'menu__link'} exact={true}>Projects</NavLink></li>
                <li className="menu__item"><NavLink to={"/contact"} className={'menu__link'} exact={true}>Contact Me</NavLink></li>





            </ul>
            <p style={{opacity: "0.75"}}>2023 Webb White</p>

        </footer>

    )

}
export default Footer;