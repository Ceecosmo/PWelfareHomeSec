import React from 'react'
import galary1 from '/assets/images/fada12.jpeg'
import galary2 from '/assets/images/fada10.jpeg'
import galary3 from '/assets/images/fada11.jpeg'
import galary4 from '/assets/images/fada12.jpeg'
import FORM2 from '/Form2'

function Footer() {
  return (
    <>
    <div className="bg-dark text-light mt-5 py-5">
      <div className="container">
        <div className="row pt-2">
         
          <div className="col-md-3 mb-2">
            <h4>PHOTO GALLERY</h4>
            <div className="d-flex ">
              <div className="flex-grow-1 mb-3 me-2">
              <img src="https://priestwelfare.onrender.com/assets/images/fada12.jpeg" alt="" className='img-fluid rounded' />
              </div>
              <div className="flex-grow-1 ms-2">
              <img src="https://priestwelfare.onrender.com/assets/images/fada10.jpeg" alt="" className='img-fluid rounded' />
              
              </div>
            </div>

            <div className="d-flex">
              <div className="flex-grow-1 mb-3 me-2">
              <img src="https://priestwelfare.onrender.com/assets/images/fada11.jpeg" alt="" className='img-fluid rounded' />
              </div>
              <div className="flex-grow-1 ms-2">
              <img src="https://priestwelfare.onrender.com/assets/images/fada12.jpeg" alt="" className='img-fluid rounded' />
              
              </div>
            </div>

          </div>

          <div className="col-md-3">
         <FORM2/>
               {/*<h4>OUR NEWSLETTER</h4>
            <p>Sign up today for tips and latest news and exclusive special offers.</p>
            
            <input type="email" placeholder='Enter your email' className="form-control mt-3 mb-3" />

            
            <button className="btn btn-danger">Submit</button>
*/}
          </div>
          <div className="col-md-3">
            <h4 >PRAYER OF THE DAY</h4>Prayer of the day,
            <p style={{textAlign:'justify'}}>Prayer of the day, Prayer of the day, Prayer of the day, Prayer of the day, Prayer of the day, Prayer of the day, Prayer of the day.</p>
          </div>
          <div className="col-md-3">
            <h4>QUICK LINKS</h4>
            <ul className="list-unstyled">
              <li><a href="#" className='text-light text-decoration-none'>PRIEST INFO</a></li>
              <li><a href="#" className='text-light text-decoration-none'>Our Services</a></li>
              <li><a href="#" className='text-light text-decoration-none'>All Event</a></li>
              <li><a href="#" className='text-light text-decoration-none'>Media</a></li>
            </ul>

          </div>
         
        
        </div>
      </div>

      <div className="mt-5 text-center">
        <p> &copy; Copyright {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </div>
    
    
    
    
    </>
  )
}

export default Footer