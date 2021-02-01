import React from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
        'gmail-michael',
        'template_w6ktqsu',
        e.target,
        'user_KO4U5pHJSv8W2wIidKdhi'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        });

        e.target.reset()
  }

  return (
    <section className="contact-us" id="contact-us">
      <div className="container text-center">
        <h1>Contact Us</h1>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <div className="col form-group ">
              <input type='text' className='form-control' placeholder='Name' name='name' required />
            </div>
            <div className="col form-group ">
              <input type='email' className='form-control' placeholder='Email Address' name='email' required />
            </div>
            <div className="col form-group ">
              <input type='text' className='form-control' placeholder='Subject' name='subject' required/>
            </div>
            <div className="col form-group ">
              <textarea className='form-control' name="message" id="" cols="30" rows="8" placeholder='Your message' required></textarea>
            </div>
            <div className="col form-group ">
              <input type='submit' className='btn btn-primary btn-lg btn-block' value='Send' />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;