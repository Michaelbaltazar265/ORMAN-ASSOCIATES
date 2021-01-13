import "./index.css";
import React from "react";

const CompanyInfo = () => { 


  return (
    <section className="services" id="services">
         <hr/>
      <div className="container text-center" >
        <h1> Services</h1>
        <h3>
          While we are more than happy to discuss all of your general
          construction needs, we specialize in
        </h3>
        <div className="row">
          <ul className="list-unstyled card-columns">
            <li className="item-list">Home Improvement Projects</li>
            <li className="item-list">Bathroom & Kitchen Remodel</li>
            <li className="item-list">Pool Demolition and Removal Services</li>
            <li className="item-list">Deck Construction & Restoration</li>
            <li className="item-list">Roofing & Stucco Repair</li>
            <li className="item-list">Outdoor Kitchen & Entertainment</li>
            <li className="item-list">Driveways and Concrete Repair</li>
            <li className="item-list"> and much more!</li>
          </ul>
        </div>
        <div className="row col-2">
          <h3>
            If you have any questions and would like to speak to us now call us
            now
          </h3>
          
          <p className='phone-icon phone'>
          <img src="https://img.icons8.com/ios-filled/26/000000/phone.png" alt='phone-icon'/><a className='p-2' href="tel:9255778030"> (925) 577-8030 </a>
          </p>
        </div>
      </div>
      <hr/>
    </section>
  );
};

export default CompanyInfo;
