import "./index.css";
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const  CarouselComponent = ()=> {
  return (
    <div className="carousel-wrapper">
    <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
            <img src='../img-01.jpg' alt="snow" />
        </div>
        <div>
            <img src="../img-02.jpg" alt="tree-lights" />
        </div>
        <div>
            <img src="../img-03.jpg" alt="tree-yellow"/>
        </div>
    </Carousel>
</div>
  );
}


export default CarouselComponent;