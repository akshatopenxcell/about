import classes from './Page4.module.css';

import image1 from './../icons/page4/image1.png';
import image2 from './../icons/page4/image2.png';
import image3 from './../icons/page4/image3.png';




const Page4 = (props) => {

    return (

        <>
            <div style={{ "marginLeft": "-320px" }}>
                <h3 className={classes.heading1}>Our Products</h3>
                <p className={classes.content1}>CoachBar provides products for businesses, coaches, and CRO/CMOs of leading tech and <br />financial services companies.</p>
            </div>

            <div className='container'>

                <div className='row'>

                    <div className='col-6'>

                        <p className={classes.pheading}>For businesses selling products</p>
                        <h4 className={classes.heading2}>Enjoy successful software<br />implementation by excellent <br /> coaches</h4>
                        <p className={classes.content3}>CoachBar events, contests, and expert directory. ipsum dolor sit<br /> amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. laboris nisi ut aliquip<br /> ex ea commodo consequat. Duis aute irure dolor in reprehenderit<br /> in voluptate velit esse cillum</p>
                        <button>Find expert coaches</button>
                    </div>


                    <div className='col-6'>

                        <img
                            className={classes.image1}
                            src={image1} />
                    </div>
                </div>


            </div>

            <div className='container'>

                <div className='row'>

                    <div className='col-6'>
                        <img
                            className={classes.image2}
                            src={image2} />
                    </div>

                    <div className='col-6'>
                        <div className={classes.tempdiv1}>
                            <p className={classes.pheading}>For expert coaches</p>
                            <h4 className={classes.heading2}>Get more ideal customers</h4>
                            <p className={classes.content3}>CoachBar events, contests, and expert directory. Lorem ipsum<br />
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
                                tempor incididunt ut labore et dolore magna aliqua. laboris nisi ut<br />
                                aliquip ex ea commodo consequat. Duis aute irure dolor in<br />
                                reprehenderit in voluptate velit esse cillum</p>
                            <button>Apply to be a coach</button>
                        </div>

                    </div>
                </div>
            </div>


            <div className='container'>

                <div className='row'>

                    <div className='col-6'>
                        
                        <div className={classes.tempdiv2}>
                            <p className={classes.pheading11}>For CROs and CMOs of leading companies</p>
                            <h4 className={classes.heading11}>Reduce churn and increase sales by<br />efficiently scaling your partner <br /> network</h4>
                            <p className={classes.content11}>White-labeled Shark-tank events. ipsum dolor sit amet,<br />
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br />
                            labore et dolore magna aliqua. laboris nisi ut aliquip ex ea<br />
                            commodo consequat. Duis aute irure dolor in reprehenderit in<br />
                            voluptate velit esse cillum</p>
                            <button>Have your own breakthrough event</button>
                        </div>
                        
                    </div>


                    <div className='col-6'>

                        <img
                            className={classes.image3}
                            src={image3} />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Page4;