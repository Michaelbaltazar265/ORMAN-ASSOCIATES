import "./index.css";
import React from 'react';

const Footer = () => { 
    return ( 
        <section className='footer'>
            <footer className='text-center text-lg-start'>
            <div className='container'>
          <div className="row">
    <div className="col-md-4">
    <img src="https://img.icons8.com/android/48/000000/phone.png" alt='phone'/>
       <h3><a href="tel:9255778030"> (925) 577-8030 </a></h3>
    </div>
    <div className="col-md-4 offset-md-4">
    <img src="https://img.icons8.com/ios-filled/48/000000/licence.png" alt='licence' />
      <h3> Licence # 907485</h3>
      </div>
    <div className="col-md-4 offset-md-4">
    <img src="https://img.icons8.com/material/48/000000/worldwide-location--v1.png" alt='location' />
      <h3>P.O. Box 902 <br/> Danville, CA 94526</h3>
    </div>
  </div>
          <div className="intro-lead-in contact p-5"><span className="copyright contact ">Copyright &copy; Orman & Associates,Inc
            2020</span></div>
            </div>
            </footer>
        </section>
    )
}

export default Footer;