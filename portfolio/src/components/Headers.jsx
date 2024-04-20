import React, { useEffect, useState } from 'react';
 import LOGO from '/assets/images/logo.png'






function Headers() {

  function Headers1(){
  var x = document.getElementById("Searchtextbox").value;
  if (x == "") {
      alert("Search Bar is empty, Please enter name of the Priest to continue..!");

  }  
 // else if (x != "Searchtextbox") {
  // return window.location = "Parish.aspx";
 // }
 
 
  
  else {
      return window.location = "/Service?Search=" + document.getElementById("Searchtextbox").value;
  }
}
  // const Search = () =>{
    // const [searchTerm, setSearchTerm] = useState('');
    // const handleSearch = () => {
    //   alert("Please enter the name of Priest in the Search bar to continue..! searching for: " +searchTerm);

    // }
  //   var x = document.getElementById("Searchtextbox").value;
  // if (x == "") {
  //   alert("Please enter the name of Priest in the Search bar to continue..!");

  // } 

  //}
  
 // else if (x != "Searchtextbox") {
  // return window.location = "Parish.aspx";
 // }
 
 
  



  return (
    <>

{/* bg-body-tertiary */}
{/* style={{ height: '70px'}}  */}
<nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container" >
    <a className=" navbar-brand " href="/" ><img src="/assets/images/logo.png" /></a>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent " aria-expanded="false" aria-label="Toggle navigation ">
      
      <span className="navbar-toggler-icon "></span>
    </button>






    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav mx-auto" > 

        <li className="nav-item ">
          
          <a className="nav-link active" style={{color:'darkorange'}} aria-current="page" href="/"><i className="fa-solid fa-house"></i>HOME</a>
        </li>


        <li className="nav-item ">
        <div className="dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-user"></i>PRIEST INFO</a>

          <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/Service">Images Of Priests</a></li>
    <li><a className="dropdown-item" href="/">List Of Priests/Historical Life</a></li>
    
  </ul>

  </div>
        </li>
       
        <li className="nav-item">
        <div className="dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-calender-alt"></i>EVENTS</a>
          <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/Tracking">Our Conferences</a></li>
    <li><a className="dropdown-item" href="/">All Regions Visitation</a></li>
    <li><a className="dropdown-item" href="/">Some Other Priests' Activities</a></li>
    <li><a className="dropdown-item" href="/">Birthday Celebration of the Priests</a></li>
    
  </ul>
          </div>
        </li>

        <li className="nav-item">
        <div className="dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-file-media"></i>MEDIA</a>

          <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/Service">All News</a></li>
    <li><a  className="dropdown-item" href="/">Bible Verses</a></li>
    <li><a className="dropdown-item" href="/">About God The Father</a></li>
    <li><a className="dropdown-item" href="/">The Gospel Today</a></li>
    <li><a className="dropdown-item" href="/">Videos/Pictures</a></li>
    
  </ul>
          </div>
        </li>


        <li className="nav-item">
      
      <a className="nav-link " href="/Contact"><i className="fa-solid fa-phone"></i>CONTACT</a>

    </li>

        <li className="nav-item">
      
          <a className="nav-link" href="/SupportUs">SUPPORT US</a>

        
        </li>




      </ul>
      <div className="sach">
     <div className="search-container">
      <input className="mt-0" type="text1" style={{width:'260px'}} placeholder="Search for your Priest" id="Searchtextbox" aria-label="Search"/>
      
       <button  className="btn" type="button" style={{backgroundColor:'darkorange', color:'white'}}  value="Search"  onClick={Headers1}><i className="fa fa-search"></i></button>
       </div>

        

    </div>
    </div>
    
  </div>
  
</nav>
 
    </>
  )
}

export default Headers
