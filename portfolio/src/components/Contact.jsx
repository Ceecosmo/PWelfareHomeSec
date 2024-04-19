import React from 'react'
import FORM2 from '/Form2'

import Services from '/assets/images/fada4.jpg';



function Contact() {
  return (
    <>
    <div className="bg-cover mt-5">
            <div className="text-center pt-3 text-light">
                <h2 className="pt-5" data-aos="fade-down-right">Contact</h2>
                <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i>Contact</p>
            </div>
        </div>



    <div className="container mt-5" >
<div className="row">
<div className="col-md-7" data-aos="fade-up">
 <div className="container">
        <div className="row">
         
            <div className="col-md-7">
            <img src="https://priestwelfare.onrender.com/assets/images/fada4.jpg" alt="" style={{width:'390px', height:'470px'}} className='img-fluid rounded' data-aos="fade-up" />
            </div>
            <div className="col-md-5" data-aos="fade-up">
            <h3>DIRECTOR OF PRIESTS' WELFARE HOME, AWKA.</h3>
                    <div className='bg-red text-center'></div>
                    <div className="pt-3" data-aos="fade-up">
                        <p>Send Us a Message with your active Email address for you to be notified with more of Our Tips.
                          OR <br></br> <span className='text-danger1' style={{fontWeight:'bold'}}>Reach Us on: 08066555555. <br></br>WhatsApp: 09067688888.</span>
                        </p>
                    </div>
            </div>
          </div>
          </div>
 </div>
<div className="col-md-5" data-aos="fade-up">
<h2>Send Us a Message</h2>
<FORM2/>
</div>

</div>
</div>

    
    </>
  )
}

export default Contact