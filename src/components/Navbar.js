
import { NavLink } from 'react-router-dom';

import pic from "./../icons/navbarIcon.png";
import classes from './Navbar.module.css';

const NavBar = (props) =>{


    return (
        <>
                <nav className={classes.nav}>
                   
                    <ul>
                        <img className='nav_logo'   style={{ "margin-left": "120px"}}
                        src={pic} alt="logo" width={100} height={100} />
                        <li style={{ "margin-top": "30px"}}>
                            <a href='#'>Home</a>
                        </li>

                        <li style={{ "margin-top": "30px"}}>
                            <a id='products_nav' href='#'>
                                Products
                            </a>
                        </li>
                        <li style={{ "margin-top": "30px"}}>
                            <a id='resources_nav' href='#'>
                                Resources
                            </a>
                        </li>

                        <li style={{ "margin-top": "30px"}}>
                            <a id='pricing_nav' href='#'>
                                Pricing
                            </a>
                        </li>

                        <li style={{ "margin-top": "35px","marginLeft":"570px"}}>
                            <a id='login_nav' href='#'>
                                Log in
                            </a>
                        </li>

                        <li 
                            style={{ "margin-top": "30px","width": "98px","height": "50px",
                            "justify-content": "center",
                        "align-items": "center","padding": "10px 18px",
                        "background": "#1C2C44","color":"white","border-radius": "10px","white-space": "nowrap",
                             }}
                        >
                            <a  href='#' style={{"color":"white"}}>Sign up</a>
                        </li>
                    </ul>
                </nav>
        </>
    )
}

export default NavBar;