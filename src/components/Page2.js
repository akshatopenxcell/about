import classes from './Page2.module.css'

import probelm1image from './../icons/page2/problem1.png';
import probelm2image from './../icons/page2/problem2.png';
import probelm3image from './../icons/page2/problem3.png';
import boldapprochimage from './../icons/page2/bold_approach.png';


import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const Page2 = (props) => {

    return (
        <>
            <h2 className={classes.heading}>We turn big problems in great results</h2>
            <p className={classes.content1}>
                We've discovered that software investments by businesses deliver 5 times better returns when software<br />
                coaches are engaged. We call these digital makeovers. And, we're on a mission to create 100K great matches<br />
                between coaches and businesses.
            </p>

            <div className="container">

                <div className='row'>
                    <div className='col-4'>

                        <div className='row'>
                            <div className='col'>
                                <img
                                    style={{

                                    }}
                                    src={probelm1image} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <h3 className={classes.problem1heading}>Problem #1</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p className={classes.problem1content}>
                                    90% of businesses that implement accounting,<br /> inventory, ecommerce, CRM and ERP systems<br /> WITHOUT coaches rate their projects as failures
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-4'>

                        <div className='row'>
                            <div className='col'>
                                <img
                                    style={{

                                    }}
                                    src={probelm2image} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <h3 className={classes.problem1heading}>Problem #2</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p className={classes.problem2content}>
                                    99% of software businesses are struggling to grow <br /> their partner network despite knowing their <br /> customers churn quickly when they self implement
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-4'>

                        <div className='row'>
                            <div className='col'>
                                <img
                                    style={{

                                    }}
                                    src={probelm3image} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <h3 className={classes.problem1heading}>Problem #3</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p className={classes.problem3content}>
                                    75% of coaches say their #1 most pressing priority <br /> for 2023 is generating more ideal customers in <br /> their sales pipeline
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <ElectricBoltIcon className={classes.electricbolticon}></ElectricBoltIcon>

            <h2 className={classes.heading2}>What we're doing to help</h2>
            <p className={classes.content2}>We've created CoachBar to profoundly improve the outcomes of business software<br /> investments by accelerating the awareness, availability, and use of software coaches by<br /> businesses.</p>




            <div className="container">

                <div className='row'>

                    <div className='col-6'>
                        <img className={classes.image3}
                        src={boldapprochimage}  width="560" height="400"/>
                    </div>

                    <div className='col-6'>
                            <div className='row'>
                                <div className='col'>
                                    <h2 className={classes.heading3}>
                                        Our bold approach -<br /> Sponsored 'shark-tank'<br /> events</h2>
                                </div>
                            </div>      

                            <div className='row'>
                                <div className='col'>
                                    <p className={classes.content3}>
                                    Millions of people have been inspired by 14 seasons of SharkTank<br /> reality shows. Nearly 1/2 million businesses have tried to be on<br /> the show. Too many investors and coaches have thought they<br /> would be an outstanding Shark. Only a select few ever get to do<br /> this. Now, CoachBar is creating opportunities.
                                    </p>
                                </div>
                            </div>        
                    </div>
                </div>

            </div>
        </>
    )
}

export default Page2;