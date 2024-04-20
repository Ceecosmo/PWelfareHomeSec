import React from 'react'
import pic1 from '/assets/images/fada10.jpeg';
import pic2 from '/assets/images/fada11.jpeg';
import pic3 from '/assets/images/fada12.jpeg';
import pic4 from '/assets/images/fada15.jpeg';
import pic5 from '/assets/images/fada11.jpeg';
import pic6 from '/assets/images/fada15.jpeg';

function Card2() {
// an Array of objects
const CardData = [
  { image: '/assets/images/fada10.jpeg', title: 'ANGLICAN ARCHBISHOP & BISHOP PAULINUS EZEOKAFOR', content_text: 'Anglican Archbishop and Bishop Paulinus Ezeokafor with some of the clergies taking a snapshot after the ceremony...' },
  { image: '/assets/images/fada11.jpeg', title: 'ANGLICAN ARCHBISHOP & BISHOP PAULINUS EZEOKAFOR', content_text: 'Anglican Archbishop and Bishop Paulinus Ezeokafor blessing the kola nut and sharing discussion during the Visitation...' },
  { image: '/assets/images/fada12.jpeg', title: 'ANGLICAN ARCHBISHOP & BISHOP PAULINUS EZEOKAFOR', content_text: 'Anglican Archbishop and Bishop Paulinus Ezeokafor with some of the clergies and other Attendants taking a snapshot after the ceremony...' },
  { image: '/assets/images/fada15.jpeg', title: 'ANGLICAN ARCHBISHOP & BISHOP PAULINUS EZEOKAFOR', content_text: 'Anglican Archbishop and Bishop Paulinus Ezeokafor blessing the kola nut and sharing discussion during the Visitation...' },
  { image: '/assets/images/fada11.jpeg', title: 'ANGLICAN ARCHBISHOP & BISHOP PAULINUS EZEOKAFOR', content_text: 'Anglican Archbishop and Bishop Paulinus Ezeokafor blessing the kola nut and sharing discussion during the Visitation...' },
  { image: '/assets/images/fada15.jpeg', title: 'ANGLICAN ARCHBISHOP & BISHOP PAULINUS EZEOKAFOR', content_text: 'Anglican Archbishop and Bishop Paulinus Ezeokafor with some of the clergies taking a snapshot after the ceremony...' }
  // Add more card data objects as needed
];

  return (
    <>
<div className="container-fluid">
<div className="row">
{CardData.map((Card2, index) => (
<div className="col-md-4 mb-3" data-aos="fade-up">
<div className="card">
  <img src={Card2.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h4 className="card-title ">{Card2.title}</h4>
    <p className="card-text">{Card2.content_text}
    <a href="/Service" className="text-danger" style={{textDecoration:'none'}}>Read more</a></p>
              
              </div> 
              </div> 
              </div>
              



))}

</div>
</div>  
    </>
  )
}

export default Card2
