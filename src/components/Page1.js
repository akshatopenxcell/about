
import classes from './Page1.module.css'

import pic from "./../icons/Heading.png";
import pic2 from "./../icons/page1_text1.png";
import pic3 from "./../icons/page1_content1.png";
import pic4 from "./../icons/page1_content2.png";
import pic5 from "./../icons/page1_content3.png";
import Button from '@mui/material/Button';



const Page1 = (props) => {

    return (
        <>
            <div class="container">
                <div className="row">

                        <div className="col-md-6">


                            <div className='row'>
                                <img className={classes.doublethepayback} 
                                 style={{
                                    "margin-top": "97px","height":"170px",
                                }}
                                 src={pic}  />
                            </div>

                            <div className='row'>
                                <img className={classes.page1content}
                                    style={{
                                        "margin-top": "20px","height":"170px",

                                    }}
                                    src={pic2} />
                            </div>
                            

                            <div className='row'>
                            <Button   
                            className={classes.btnfindtheexpert}
                            style={{
                                "background":"#1C2C44",
                                "box-sizing":"border-box",
                                "justify-content": "center",
                                "width":"387.45px",
                                "height": "68px",
                                "color": "white",
                                "marginLeft":"50px",
                                "marginTop":"20px",

                            }}
                            variant="outlined" >Watch Video About Our Company</Button>
                            </div>

                        </div>

                        <div className="col-md-6" style={{"marginTop":"80px"}}>
                            <div className={classes.container1}>
                                <img src={pic3}  className={classes.img1} />
                                <img src={pic4}  className={classes.img2} />
                                <img src={pic5}  className={classes.img3} />

                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Page1;