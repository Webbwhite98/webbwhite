import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';
const Header =()=>{
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const navigate= useNavigate();
    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };




    return(
        <>
            <header className={"navbar navbar-expand-sm flex-md-row bd-navbar"}>



                {/*<img onClick={()=>navigate(`/`)} className={"navbar-brand"}  alt={'logo'}/>*/}
                <div style={{paddingLeft:'10vw'}}>
                    <h2>Webb White</h2>
                </div>


                <div className={'navbar-nav-scroll'} style={{paddingLeft:'15vw'}}>
                    <ul className={'nav justify-content-end'}>
                        <li className={'nav-item'}>
                            <NavLink to={"/"} className={'menu__link'} exact={true}>Home</NavLink>
                        </li>
                    </ul>
                </div>

                <div className={'navbar-nav-scroll'}>
                    <ul className={'nav justify-content-end'}>
                        <li className={'nav-item'}>
                            <NavLink to={"/about"} className={'menu__link'} exact={true}>About Me</NavLink>
                        </li>
                    </ul>
                </div>


                <div className={'navbar-nav-scroll'}>
                    <ul className={'nav justify-content-end'}>
                        <li className={'nav-item'}>
                            <NavLink to={"/projects"} className={'menu__link'} exact={true}>Projects</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={'navbar-nav-scroll'}>
                    <ul className={'nav justify-content-end'}>
                        <li className={'nav-item'}>
                            <NavLink to={"/contact-us"} className={'menu__link'} exact={true}>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>


                <div className={'header-mobile'}>

                    <div style={{paddingRight:'2vw'}} onClick={()=> toggleMobileNav()}>
                        {mobileNavOpen ? <CloseIcon style={{ fontSize: '30px', color: 'white' }} /> : <MenuIcon style={{ fontSize: '30px', color: 'white' }} />}
                    </div>

                    {mobileNavOpen ?
                        <nav className="mobile-nav">
                           <div style={{paddingTop:'1vh', paddingLeft:'10vw'}}>
                               <h2>Webb White</h2>
                           </div>
                            <ul>
                                <li><NavLink onClick={()=>setMobileNavOpen(!mobileNavOpen)} to={"/"} className={'menu__link'} exact={true}>Home</NavLink></li>
                                <li><NavLink onClick={()=>setMobileNavOpen(!mobileNavOpen)} to={"/about"} className={'menu__link'} exact={true}>About Me</NavLink></li>
                                <li><NavLink onClick={()=>setMobileNavOpen(!mobileNavOpen)} to={"/projects"} className={'menu__link'} exact={true}>Projects</NavLink></li>
                                <li><NavLink onClick={()=>setMobileNavOpen(!mobileNavOpen)} to={"/contact-us"} className={'menu__link'} exact={true}>Contact</NavLink></li>
                            </ul>
                        </nav>:''
                    }
                </div>




            </header>
        </>
    );


}
export default Header;
