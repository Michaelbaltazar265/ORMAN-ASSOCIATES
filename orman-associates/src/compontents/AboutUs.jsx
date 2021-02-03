import "./index.css";
import React from "react";

const AboutUs = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="container text-center">
        <h1>About Us</h1>
        <div className="row">
          <p>
            Orman & Associates is the San Francisco Bay Area’s new residential
            general contracting services company. We strive to offer superior
            craftsmanship and customer service. Based out of the East Bay, Orman
            & Associates was founded on the vision to deliver an innovative,
            family-oriented approach to home improvement. We’re encouraging
            residential home owners, prospective buyers and sellers to
            experience our professionalism and reliability for themselves!
            Accommodating projects of all sizes, Orman & Associates is excited
            to apply 20 years of general contracting experience to help
            homeowners accomplish their home improvement dreams!
          </p>
        </div>
        <div className="card mb-3">
          <div className="row no-gutters">
            
              <div className="col-md-4">
                <img
                  className="card-img"
                  src="../justin-orman.jpeg"
                  alt="justin orman"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title p-4"> Meet Justin</h4>
                  <p className="card-text">
                    Justin started his construction career in 1988 working for
                    SOBA Construction learning the trade skills he would need to
                    eventually earn an A, B and Hazardous Materials Contractors
                    License. Today he applies his years of project management
                    and hands on labor experience to run an efficient and
                    professional crew of skilled laborers.
                  </p>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
