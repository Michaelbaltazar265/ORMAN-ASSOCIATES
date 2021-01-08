import "./index.css";
import React from "react";

const Testimonial = () => {
  return (
    <section className="testimonial" id="reviews">
      <hr />
      <div className="container text-center">
        <h1>Reviews</h1>
        <div className="row">
          <div className="talkbubble">
            <p>
              “I have been delighted with Orman & Associates over the years, and
              confidently recommend them to friends and clients. They have the
              highest of standards in both workmanship and client satisfaction.
              I have found them to be unusually insightful and creative when
              tackling a “challenges,” and have noted that they frequently offer
              suggestions which result in an even better end product than the
              homeowner had envisioned.”
            </p>
            <p className="person">– Brenda Zwahlen, Broker</p>
          </div>
          <div className="talkbubble">
            <p>
              “Extremely punctual and professional. They committed to starting
              at 8:00 am sharp, but most days were there earlier. I had a two
              week time deadline which involved extensive work. They made the
              promise that it would be completed by that date, and it was met
              while still providing high quality workmanship. No cutting
              corners. Justin oversees the work that is being done and really
              keeps on top of things and digs in whenever necessary. Really nice
              people working for them. Highly recommend.”
            </p>
            <p className="person">– Jeannette Van Bibber, Homeowner</p>
          </div>
          <div className="talkbubble">
            <p>
              “Very professional, always there when they said they would be! Our
              new deck looks great! They had some original ideas that made the
              difference between an ordinary deck and a gorgeous one!”
            </p>
            <p className="person">– Jamece, Homeowner</p>
          </div>
        </div>
        <div className="row">
          <h4 className="review-sites">
            Checkout what are happy clients have to say on a few treated sites
          </h4>
          <div className="col-md-4">
            <a href="https://www.yelp.com/biz/orman-and-associates-danville">
              <img className="yelp" src="../yelp_icon.png" alt="yelp" />
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://www.buildzoom.com/contractor/orman-associates-inc">
              <img
                className="buildZoom"
                src="../buildZoom.png"
                alt="buildZoom"
              />
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://www.angieslist.com/companylist/us/ca/danville/orman-and-associates-reviews-8281423.htm">
              <img
                className="angies-list"
                src="../angieslist-reviews.png"
                alt="angies-list"
              />
            </a>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Testimonial;
