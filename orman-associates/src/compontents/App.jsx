
import "./index.css";
import React from "react";
import Header from "./Header";
import CarouselComponent from "./CarouselImage";
import Quote from './quote';
import CompanyInfo from './CompanyInfo';
import AboutUs from './AboutUs';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';
import Footer from './Footer'

class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = { 
      view: { name: "home"}
    }; 

    this.setView = this.setView.bind(this);
  } 

  setView(name){ 
    this.setState({ 
      view: { 
        name: name
      }
    });
  }

  render() {

    if(this.state.view.name === "home"){ 

      return (
        <>
          <Header home={this.state.view} />
          <section className='gap'></section>

          < Quote />
          <div className="container">
            <CarouselComponent />
          </div>
          < CompanyInfo />
          < AboutUs />
          < Testimonial />
          < ContactUs />
          < Footer />
        </>
      );
    }
    if(this.state.view.name === "work"){ 
      return (
        <Header setView={this.setView} /> 

      )
    }
   
  }
}

export default App;
