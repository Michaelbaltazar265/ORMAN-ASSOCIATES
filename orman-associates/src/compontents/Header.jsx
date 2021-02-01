import "./index.css";
import React from "react-dom";

const Header = () => {
  return (
    <section className="navbar-section">
      <nav className="navbar navbar-expand-sm bg-light navbar-expand-sm">
        <div className="container ">
          <div className="row">
            <ul className="nav justify-content-center ">
              <li className="nav-item">
                <a className="nav-link" href="#home">Orman & Associates, Inc</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-us">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              {/* <li className="nav-item">
                <a href="#services">Work</a>
              </li> */}
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
        </div>
      </nav>
    </section>
  );
};

export default Header;
