import React from "react";
import Header from "./Header";
import CarouselComponent from "./CarouselImage";
import Quote from './quote';
import CompanyInfo from './CompanyInfo';
import AboutUs from './AboutUs';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';

class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = { 
      view: "home"
    };
  }
  render() {

    if(this.state.view === "home"){ 

      return (
        <>
          <Header />
          < Quote />
          <div className="container">
            <CarouselComponent />
          </div>
          < CompanyInfo />
          < AboutUs />
          < Testimonial />
          < ContactUs />
        </>
      );

    }
   
  }
}

export default App;
