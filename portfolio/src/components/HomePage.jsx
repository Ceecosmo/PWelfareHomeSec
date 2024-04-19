import React from 'react'
import MARY from '/assets/images/Marys.jpg'
import JESUS from '/assets/images/Jesus1sss.jpg'
import About from '/assets/images/fada9.jpg'
import Services from '/assets/images/fada4.jpg';
import Card1 from '/Card'
import FORM from '/Form'

// const reactLogo ="Marys.jpg"
// const viteLogo ="Jesus1sss.jpg"
// const reactLogoPath = `/src/assets/images/${reactLogo}`
// const viteLogoPath = `/src/assets/images/${viteLogo}`



function HomePage() {
  return (
    <>

<div className="bg-image mt-0" >
        <div className="container text-light">
          <div className="pt-5 text-center" data-aos="fade-down-right">
            <h1 className='pt-5' style={{ fontSize: '30px', fontWeight: 'bold', marginTop: '55px' }}>
              Welcome to Catholic <span style={{ color: 'yellow' }}> <i className="fa-solid fa-plus"></i></span>Priests' Welfare Home Awka
            </h1>
            <p style={{ fontSize: '24px', fontWeight: '700px' }}>A Home of Peace.
              Thanks for your Visit.</p>
            <div className="bg-red mx-auto"></div>
          </div>
        </div>
        <div className="container text-center">
          <a href="https://priestwelfare.onrender.com/tracking" className="btn btn-danger mt-4" data-aos="fade-up-left">Learn More</a>
        </div>
      </div>

      <div className="bg-gray">
        <div className="container-fluid">
          <div className="row ">

            <div className="d-flex">
              <div className="col-md-6"  >


                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner" style={{ margin: '0 -100px' }} >
                    <div className="carousel-item active text-center"  >
                      <img src="https://priestwelfare.onrender.com/assets/images/fada9.jpg" className="d-block w-100" style={{ height: '288px' }} alt="..." />
                      <div className="carousel-caption d-none d-md-block text-center">
                        <h5>1. The Priests' Welfare Household</h5>
                        <p>Stay Safe With Us, Stay Safe With Us, Stay Safe With Us.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://priestwelfare.onrender.com/assets/images/fada9.jpg" className="d-block w-100" style={{ height: '288px' }} alt="..." />
                      <div className="carousel-caption d-none d-md-block text-center">
                        <h5>2. The Priests' Welfare Household</h5>
                        <p>Stay Safe With Us, Stay Safe With Us, Stay Safe With Us.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://priestwelfare.onrender.com/assets/images/fada9.jpg" className="d-block w-100" style={{ height: '288px' }} alt="..." />
                      <div className="carousel-caption d-none d-md-block text-center">
                        <h5>3. The Priests' Welfare Household</h5>
                        <p>Stay Safe With Us, Stay Safe With Us, Stay Safe With Us.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-1">
                <div className="join" style={{ marginLeft: '-92px' }}>
                  <div className="jesus">
                    <img src="https://priestwelfare.onrender.com/assets/images/Jesus1sss.jpg" className="" alt="..." />

                  </div>

                  <div className="mary pt-2">

                    <img src="https://priestwelfare.onrender.com/assets/images/Marys.jpg" className="" alt="..." />
                  </div>
                </div>
              </div>

              <div className="col-md-5">
                <div className="join2">
                  <h3 className='text-start text-danger'>The Catholic Priests' Welfare Home Awka</h3>
                  <h4 className='text-start'>The Catholic Priests' Welfare Home Awka is rooted by Most Rev. Dr Paulinus Ezeokafor, We strongly believe that this togetherness brings us Peace, Harmony and Progress..</h4>
                  <p>The Catholic Priests' Welfare Home Awka</p>
                  <p>The Catholic Priests' Welfare Home Awka</p>
                  <p>The Catholic Priests</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>








      <div className="container pt-5">
        <div className="text-center " data-aos="fade-up">
          <h3 className='era bg-body-tertiary'>The Brief Era of Catholic <span style={{ color: 'yellow' }}> <i className="fa-solid fa-plus"></i></span>Priests' Welfare Home Awka</h3>
          {/* <div className="bg-red mx-auto"></div> */}

        </div>



        <div className="container-fluid pt-3">
          <div className="row">

            <div className="col mt-6">
              <img src="https://priestwelfare.onrender.com/assets/images/fada9.jpg" className="rounded img-fluid mb-5" alt="about" />


            </div>

            <div className="col-md-6" data-aos="fade-up">

              <h2>Priests' Welfare Home Awka, Nigeria</h2>
              <p className='rooted'>The Catholic Priests' Welfare Home Awka, is rooted by Most Rev. Dr Paulinus Ezeokafor, We strongly believe that this togetherness brings us Peace, Harmony and Progress.. All of these goals is in our interest and in the interest of all of our stakeholders are us customers, employees, investors and the planet as a whole. We add value to cargo people’s interaction with excellent services or products. Engaging our employees and nurture investment on the stock holds market we show concern, by engaging our employees and nurture investment on the stock holds market.</p>
              <a href="https://priestwelfare.onrender.com/Service" className="btn btn-danger">Learn More</a>

            </div>

          </div>
        </div></div>


      <div className="container pt-5 ">
        <div className="text-center"><h4 className='text-danger'> FEATURES </h4>
          <h2>Covering All Our Activities</h2>
        </div>


        <Card1 />
        <div className="text-center " data-aos="fade-up">

          <a href="https://priestwelfare.onrender.com/Service" className="btn btn-danger">Load More</a>

        </div>
      </div>


      <div className="bg-warning mt-5" style={{ minHeight: '200px', padding: '20px 0' }}>
        <div className="container">
          <div className="row pt-5 d-flex justify-content-center">
            <div className='col-md-8' data-aos="fade-up">
              <h2>Masses @Catholic Priests' Welfare Home Awka, Nigeria</h2>

              <p> <b>Sunday Masses (In the Chapel):</b> 7:00am.
                <b> Other Masses hold in every morning by 7:00am.</b>
                <b> Night Prayer holds in the evening by 7:00pm everyday.</b>
              </p>
            </div>
            <div className="col-md-4 text-md-end text-sm-start" data-aos="fade-up">
              <a href='https://priestwelfare.onrender.com/contact' className="btn btn-danger1">More Schedule</a>
            </div>
          </div>

        </div>
      </div>





      <div className="container mt-5" >
        <div className="row">
          <div className="col-md-7" data-aos="fade-up">
            <div className="container">
              <div className="row">



                <div className="col-md-7">

                  <img src="https://priestwelfare.onrender.com/assets/images/fada4.jpg" alt="" style={{ width: '390px', height: '470px' }} className='img-fluid rounded' data-aos="fade-up" />
                </div>
                <div className="col-md-5" data-aos="fade-up">
                  <h3>DIRECTOR OF PRIESTS' WELFARE HOME, AWKA.</h3>
                  <div className='bg-red text-center'></div>
                  <div className="pt-3" data-aos="fade-up">
                    <p>Send Us a Message with your active Email address for you to be notified with more of Our Tips.
                      OR<br></br><span className='text-danger1' style={{ fontWeight: 'bold' }}>Reach Us on: 08066555555, WhatsApp: 09067688888</span>
                    </p>

                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-md-5" data-aos="fade-up">
            <h2>Send Us Messages</h2>
            <FORM />
          </div>

        </div>
      </div>
      <br></br><br></br><br></br>
      <div className="container">
        <div className="col-xs-12 text-center mt-5">
          <h4 className='era font-weight-4 text-danger '>CULTURAL CELEBRATION AT PRIESTS' WELFARE HOME</h4>
        </div>

        <div className="row mb-0 mt-4">

          <div className="col-md-3">

            <div className="col-md-12 col-sm-12 col-xs-12 col-centered text-center">
           
            <iframe src="https://youtube.com/embed/L03lP-YE-j4?playlist=L03lP-YE-j4&loop=1" allow="geolocation 'none' accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen></iframe>
            <h6>WATCH ALL ALL EVENTS EVENTS VIDEOS WATCH ALL ALL EVENTS EVENTS VIDEOS</h6>
            </div>
          </div>


          <div className="col-md-3">

            <div className="col-md-12 col-sm-12 col-xs-12 col-centered text-center">

            <iframe src="https://youtube.com/embed/L03lP-YE-j4?playlist=L03lP-YE-j4&loop=1" allow="geolocation 'none' accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen></iframe>
            <h6>WATCH ALL ALL EVENTS EVENTS VIDEOS WATCH ALL ALL EVENTS EVENTS VIDEOS</h6>
            </div>
          </div>




          <div className="col-md-3">

            <div className="col-md-12 col-sm-12 col-xs-12 col-centered text-center">

            <iframe src="https://youtube.com/embed/L03lP-YE-j4?playlist=L03lP-YE-j4&loop=1" allow="geolocation 'none'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen></iframe>
            <h6>WATCH ALL ALL EVENTS EVENTS VIDEOS WATCH ALL ALL EVENTS EVENTS VIDEOS</h6>
            </div>
          </div>




          <div className="col-md-3">

            <div className="col-md-12 col-sm-12 col-xs-12 col-centered text-center">

            <iframe src="https://youtube.com/embed/L03lP-YE-j4?playlist=L03lP-YE-j4&loop=1" allow="geolocation 'none'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen></iframe>
            <h6>WATCH ALL ALL EVENTS EVENTS VIDEOS WATCH ALL ALL EVENTS EVENTS VIDEOS</h6>
            </div>
          </div>

          {/* <iframe className='video' src=" https://youtube.com/embed/L03lP-YE-j4?playlist=L03lP-YE-j4&loop=1" title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                            






        </div>
      </div>




    </>


  )
}

export default HomePage