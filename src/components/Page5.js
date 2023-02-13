import classes from './Page5.module.css';

import image1 from './../icons/page5/image1.png';
import image2 from './../icons/page5/image2.png';
import image3 from './../icons/page5/image3.png';


const Page5 = (props) => {

    return (
        <>

            <h3 className={classes.headeingh31}>Checklists and guides for coaches, business,<br /> and sponsors</h3>

            <div className='container'>

                <div className='row'>

                    <div className='col-4'>
                        <div className='row'>
                            <div className='col'>
                                <img
                                    className={classes.image1}
                                    src={image1} />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <h3 className={classes.image1h3heading}>Aenean lobortis orci id<br /> consectetur semper</h3>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <p className={classes.image1content}>
                                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
                                </p>
                                <button className={classes.image1btn}>Learn more</button>
                            </div>
                        </div>

                    </div>


                    <div className='col-4'>

                        <div className='row'>
                            <div className='col'>
                                <img
                                    className={classes.image1}
                                    src={image2} />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <h3 className={classes.image1h3heading}>Morbi quis purus felis. Sed<br />  eu nibh scelerisque</h3>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <p className={classes.image1content}>
                                    Lorem ipsum dolor sit amet, consectetur <br />  adipiscing elit, sed do eiusmod tempor
                                    <br /> incididunt
                                </p>
                                <button className={classes.image1btn}>Learn more</button>
                            </div>
                        </div>
                    </div>


                    <div className='col-4'>

                        <div className='row'>
                            <div className='col'>
                                <img
                                    className={classes.image1}
                                    src={image3} />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <h3 className={classes.image1h3heading}>Aenean lobortis orci id<br /> consectetur semper</h3>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <p className={classes.image1content}>
                                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
                                </p>
                                <button className={classes.image1btn}>Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


           
            <button className={classes.seemorebtn}>See more</button>
        </>
    )
}

export default Page5;