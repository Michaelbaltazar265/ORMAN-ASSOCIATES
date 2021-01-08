import "./index.css";
import React from "react-dom";

const Header = () => {
  return (
    <section className="navbar-section">
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container">
          <ul className="nav navbar-nav ">
            <li className="nav-item">
              <a href="#home">Orman & Associates, Inc</a>
            </li>
            <li className="nav-item">
              <a href="#about-us">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a href="#services">Work</a>
            </li>
            <li className="nav-item">
              <a href="#reviews">Reviews</a>
            </li>
            <li className="nav-item">
              <a href="#contact-us">Contact Us</a>
            </li>

            <li className="nav-item phone">
              <a className="p-2" href="tel:9255778030">
                Click here to call now!!
              </a>
            </li>
          </ul>
        </div>
        <br />
      </nav>
    </section>
  );
};

export default Header;
