import "./index.css";
import React from "react-dom";

const Header = () => {
  return (
   

    <nav className="navbar navbar-default justify-content-end">
      <div className="container justify-content-end">
        <div className="navbar-header">
          <a href=" " className="navbar-band">
            Orman Associates
          </a>
        </div>
        <ul className="nav navbar-nav ">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li className="header">
            <a href="#about-us">About Us</a>
          </li>
          <li className="header">
            <a href="#services ">Services</a>
          </li>
          <li className="header">
            <a href="# ">Work</a>
          </li>
          <li className="header">
            <a href="#testimonial ">Testimonials</a>
          </li>
          <li className="header">
            <a href="# ">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
