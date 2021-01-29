import "./index.css";
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const  CarouselComponent = ()=> {

  return (
    <div className="carousel-wrapper">
    <Carousel infiniteLoop useKeyboardArrows autoPlay className='carousel'>
        <div>
            <img src='../backyard-1.jpg' alt="laying out the foundation" />
        </div>
        <div>
            <img src="../backyard-2.jpg" alt="layout" />
        </div>
        <div>
            <img src="../backyard-3.jpg" alt="waiting for it to dry"/>
        </div>
        <div>
            <img src="../backyard-4.jpg" alt="finished"/>
        </div>
        <div>
            <img  src="../cat-excavator-1.jpg" alt="cat-excavator"/>
        </div>
        <div>
            <img  src="../commercial-work-2.jpg" alt="commercial-work"/>
        </div>
        

        <div>
            <img  src="../staircase-before.jpg" alt="before "/>
        </div>
        <div>
            <img  src="../staircase-after.jpg" alt="after"/>
        </div>
    </Carousel>
</div>
  );
}


export default CarouselComponent;