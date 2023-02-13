import classes from './Page3.module.css';

import xerotank1image from './../icons/page3/xerotank1.png';
import xerotank2image from './../icons/page3/xerotank2.png';

import sagebar1image from './../icons/page3/sagebar1.png';
import sagebar2image from './../icons/page3/sagebar2.png';

const Page3 = () => {

    return (
        <>

            <h3 className={classes.heading1}>
                Upcoming events
            </h3>

            <div className="container">

                <div className='row'>

                    <div className='col-6'>

                        <div className='row'>

                            <div className='col-2'>
                                <img
                                    className={classes.xerotank1image}
                                    src={xerotank1image} />
                            </div>
                            <div className='col-5'>

                                <p className={classes.datexerotank}>Dec 22 - 23</p>
                                <h3 className={classes.headingxerotank}>XeroTank</h3>
                            </div>
                            <div className='col-2'>
                                <img
                                    className={classes.xerotank2image}
                                    src={xerotank2image} />
                            </div>
                        </div>

                        <h6 className={classes.h6xerotank}>
                            Guaranteed $100,000 of coaching will be awarded<br /> at this event to participating businesses
                        </h6>

                        <p> <i class="bi bi-percent" style={{ "color": "red" }}></i>Sponsor to be announced soon </p>
                        <p> Learn how to become a participant</p >
                        <p> Learn how to Sponsor your own event</p >
                        <p> Learn how to be a Coach 'shark'</p>

                        <button>Learn more</button>
                    </div>




                    <div className='col-6'>

                            <div className='row'>

                                <div className='col-2'>
                                    <img
                                        className={classes.sagebar1image}
                                        src={sagebar1image} />
                                </div>
                                <div className='col-5'>

                                    <p className={classes.datexerotank}>Dec 22 - 23</p>
                                    <h3 className={classes.headingxerotank}>SageBar</h3>
                                </div>
                                <div className='col-2'>
                                    <img
                                        className={classes.sagebar2image}
                                        src={sagebar2image} />
                                </div>
                            </div>

                            <h6 className={classes.h6xerotank}>
                            Guaranteed $100,000 of coaching will<br /> be awarded at this event to participating businesses
                            </h6>

                            <p> <i class="bi bi-percent" ></i>Sponsor to be announced soon </p>
                            <p> Learn how to become a participant</p >
                            <p> Learn how to Sponsor your own event</p >
                            <p> Learn how to be a Coach 'shark'</p>

                            <button>Learn more</button>

                    </div>
                </div>

            </div>
        </>
    )

}

export default Page3;