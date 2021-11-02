// import logo from './logo.svg';
import React, { useState, useEffect, useRef } from "react";
import '../App.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BIG_CAROUSEL = 1;
const SMALL_CAROUSEL = 0;

const responsive = {
  embiggenedDesktop: {
    breakpoint: { max: 50000, min: 1500 },
    items: 12,
  },
  superExtraDuperUltraMegaLargeDesktop: {
    breakpoint: { max: 50000, min: 1500 },
    items: 11,
  },
  superDuperUltraMegaLargeDesktop: {
    breakpoint: { max: 1499, min: 1350 },
    items: 10,
  },
  superDuperMegaLargeDesktop: {
    breakpoint: { max: 1349, min: 1200 },
    items: 9,
  },
  superDuperLargeDesktop: {
    breakpoint: { max: 1199, min: 1050 },
    items: 8,
  },
  superLargeDesktop: {
    breakpoint: { max: 1049, min: 900 },
    items: 7,
  },
  largeDesktop: {
    breakpoint: { max: 899, min: 750 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 749, min: 600 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 599, min: 450 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 449, min: 0 },
    items: 3,
  },
};

const big_responsive = {
  superLargeDesktop: {
    breakpoint: { max: 50000, min: 2000 },
    items: 5,
  },
  largeDesktop: {
    breakpoint: { max: 1999, min: 1500 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1499, min: 1000 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 999, min: 500 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 499, min: 0 },
    items: 1,
  },
};



function MultiCarousel(props) {
  const carouselRef = useRef();
  if(props.size === SMALL_CAROUSEL) {
    return (
      <Carousel
        responsive={responsive}
        // ref={carouselRef}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        swipeable={true}
        partialVisible={true}
        draggable={true}
        // sliderClass={{
        //   paddingTop: "10px",
        //   paddingBottom: "10px",
        // }}
        arrows={false}
      >
        {props.products.map((product) => {
          return (
            <img src={product} className="home-carousel-panel"/>
          );
        })}
      </Carousel>
    );
  } else {
    return (
      <Carousel
        responsive={big_responsive}
        // ref={carouselRef}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        swipeable={true}
        partialVisible={true}
        draggable={true}
        // sliderClass={{
        //   paddingTop: "10px",
        //   paddingBottom: "10px",
        // }}
        arrows={false}
      >
        {props.products.map((product) => {
          return (
            <img src={product} className="gallery-reel-panel"/>
          );
        })}
      </Carousel>
    );
  }
}

export default MultiCarousel;
