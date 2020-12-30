import React from "react";
import Header from "./Header";
import CarouselComponent from "./CarouselImage";
import Quote from './quote';
import CompanyInfo from './CompanyInfo';
import AboutUs from './AboutUs';
import Testimonial from './Testimonial'

class App extends React.Component {
  render() {
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
      </>
    );
  }
}

export default App;
