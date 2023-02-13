import classes from './Page6.module.css';
import image1 from './../icons/page6/image1.png';


const Page6 = (props) => {

    return (
        <>


            {/* <div className='container'>

                <div className='row'>
                       
                </div>
            </div> */}

            <div className={classes.maindiv}>

                <div>
                    
                    <h3 className={classes.headingh31} >
                    Start getting  
                    <span className={classes.span1}> much</span>
                    <span className={classes.span2}> larger</span>
                    <span className={classes.span3}> payoffs </span> from <br /> your software investments
                    </h3>
                   
                   
                    <img
                        className={classes.image1}
                        src={image1} />
                </div>

                <div>
                    <button className={classes.youremailbtn}>
                        Your Email
                    </button>

                    <button className={classes.subnscribebtn}>
                    Subscribe
                    </button>
                </div>
               
            </div>
        </>
    )
}

export default Page6;