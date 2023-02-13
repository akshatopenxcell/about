import classes from './Footer.module.css';
import pic from "./../icons/footer/Logo.png";

const Footer = (props) => {

    return (
        <>
            <div className={classes.maindiv}>

                <div className='container'>

                    <div className='row'>

                        <div className='col-8'>

                            <h4 className={classes.headingh41}>Final Proposition</h4>
                            <p className={classes.content1}>Join over 4,000+ companies already growing with us.</p>
                        </div>

                        <div className='col-4'>
                            <div className={classes.tempdiv1}>
                                <button className={classes.btn1}>Learn more</button>
                                <button className={classes.btn2}>Get Started</button>
                            </div>
                        </div>
                    </div>


                    <hr className={classes.line1} />

                    <div className='row'>
                        <div className='col-4'>

                            <img className={classes.logo}  src={pic} />
                            <p className={classes.content1}>Morbi quis purus felis.<br /> Sed eu nibh<br /> scelerisque magna <br />accumsan fringilla nec </p>
                        </div>

                        <div className='col-8'>

                            <div className='row'>
                                <div className='col-2'>
                                   
                                    <ul className={classes.list1}>
                                    <p  className={classes.list1header}>Product</p>
                                        <li>Overview</li>
                                        <li>Features</li>
                                        <li>Solutions</li>
                                        <li>Tutorials</li>
                                        <li>Pricing</li>
                                        <li>Releases</li>
                                    </ul>
                                </div>
                                <div className='col-2'>
                                    <ul  className={classes.list1}>
                                        <p className={classes.list1header}>Company</p>
                                        <li>About us</li>
                                        <li>Careers</li>
                                        <li>Press</li>
                                        <li>News</li>
                                        <li>Media kit</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                                <div className='col-2'>
                                 
                                    <ul  className={classes.list1}>
                                         <p className={classes.list1header}>Resources</p>
                                        <li>Blog</li>
                                        <li>Newsletter</li>
                                        <li>Events</li>
                                        <li>Help centre</li>
                                        <li>Tutorials</li>
                                        <li>Support</li>
                                    </ul>
                                </div>
                                <div className='col-2'>
                                    
                                    <ul  className={classes.list1}>
                                        <p className={classes.list1header}>Social</p>
                                        <li>Twitter</li>
                                        <li>LinkedIn</li>
                                        <li>Facebook</li>
                                        <li>GitHub</li>
                                        <li>AngelList</li>
                                        <li>Dribbble</li>
                                    </ul>
                                </div>
                                <div className='col-2'>
                                    
                                    <ul  className={classes.list1}>
                                         <p className={classes.list1header}>Legal</p>
                                        <li>Terms</li>
                                        <li>Privacy</li>
                                        <li>Cookies</li>
                                        <li>Licenses</li>
                                        <li>Settings</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    <hr className={classes.line2} />
                </div>

            </div>


        </>
    )
}

export default Footer;