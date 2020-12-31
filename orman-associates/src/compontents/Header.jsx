import "./index.css";
import React from "react-dom";

const Header = () => {
  return (
    <section className="navbar-section">
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container">
          <div className="navbar-header">
            <a
              href="https://www.buildzoom.com/contractor/orman-associates-inc"
              className="navbar-band"
            >
              Orman Associates
            </a>
          </div>
          <ul className="nav navbar-nav ">
            <li className="active">
              <a href="https://www.buildzoom.com/contractor/orman-associates-inc">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about-us">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#services">Services</a>
            </li>
            <li className="dropdown">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Page 1<span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="https://www.buildzoom.com/contractor/orman-associates-inc">
                    vnslvs
                  </a>
                </li>
                <li>
                  <a href="https://www.buildzoom.com/contractor/orman-associates-inc">
                    nvvnslkv
                  </a>
                </li>
                <li>
                  <a href="https://www.buildzoom.com/contractor/orman-associates-inc">
                    vsvsvds
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#testimonial">Testimonials</a>
            </li>
            <li className="nav-item">
              <a href="#contact-us">Contact Us</a>
            </li>

            <li className="nav-item phone">
              <a className="p-2" href="tel:9255778030">
                {" "}
                (925) 577-8030{" "}
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
