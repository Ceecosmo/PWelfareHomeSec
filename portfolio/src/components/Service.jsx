import React from 'react'
import Card2 from './Card2'

import Services from '/assets/images/fada4.jpg';

function Service() {
    
  return (
    <>
        <div className="bg-cover mt-5">
            <div className="text-center pt-3 text-light">
                <h2 className="pt-5" data-aos="fade-down-right">PRIEST INFO</h2>
                <p> HOME <i className="fa fa-arrow-right ms-3 me-3"></i>Images of Priests</p>
            </div>
        </div>



        <div className="container">
        <div className="row pt-5">
         
            <div className="col-md-4">
            <img src={Services} alt="" className='img-fluid rounded' data-aos="fade-up" />
            </div>
            <div className="col-md-8" data-aos="fade-up">
            <h2>DIRECTOR OF PRIESTS' WELFARE HOME, AWKA.</h2>
                    <div className='bg-red text-center'></div>
                    <div className="pt-3" data-aos="fade-up">
                        <p>The List of Our Priests. Our warehousing services are known nationwide to be one of the most reliable, safe and .</p>
                    </div>
            </div>
          </div>
          </div>



        <div className="container mt-5">

          <Card2/>

          
        </div>

       </>
  )
}

export default Service
