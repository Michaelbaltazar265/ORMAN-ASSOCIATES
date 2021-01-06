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
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mr-auto">
            <div className="col-8 form-group pt-2 mr-auto">
              <input type='text' className='form-control' placeholder='Name' name='name' />
            </div>
            <div className="col-8 form-group pt-2 mr-auto">
              <input type='email' className='form-control' placeholder='Email Address' name='email' />
            </div>
            <div className="col-8 form-group pt-2 mr-auto">
              <input type='text' className='form-control' placeholder='Subject' name='subject' />
            </div>
            <div className="col-8 form-group pt-2 mr-auto">
              <textarea className='form-control' name="message" id="" cols="30" rows="8" placeholder='Your message'></textarea>
            </div>
            <div className="col-8 pt-3 mr-auto">
              <input type='submit' className='btn btn-info' value='Send' />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
