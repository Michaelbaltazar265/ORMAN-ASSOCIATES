import "./index.css";
import React from "react-dom";

const Header = () => {
  return (

    <section className='navbar-section'>
      <div className='container'>
        <ul className="nav justify-content-center">
              <li className="nav-item">
               <a className="nav-link" href="#home"> 
               <img className='d-inline-block mr-1' src="../ormanassoc_logo.jpg" alt=" orman-logo" />
               </a>
               </li>
             <li className="nav-item">
                <a className="nav-link" href="#about-us">About Us</a>
             </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
             </li>
             <li className="nav-item">
                <a className="nav-link" href="#reviews">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-us">Contact Us</a>
              </li>
             <li className="nav-item">
                 <a className="nav-link" href="tel:9255778030">
                  Click here to call now!!
               </a>
              </li>
           </ul>
      </div>
    </section>
    

  );
};

export default Header;
