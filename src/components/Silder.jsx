import React from 'react'
import data from "./data/data-slider.json"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SliderWrapper = styled.div`

    width: 100%;

    a{
        width: 100%;
        margin-top: 70px;
        img{
            width: 100%;
            border-radius: 10px;
            // height: 165px;
            object-fit: cover;
            aspect-ratio: 6/3;
        }
    }
    .slick-arrow{
        display: none !important;
    }

`
const Silder = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        scrollBar: true,
        autoplay: true,
        swipeToSlide: true,
        centerPadding: 30,
        pauseOnFocus: true,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <SliderWrapper >

            <Slider {...settings}>

              {
                data.slides.map((item) => (
                    <a  key={item.id} href="#">
                        <img src={item.image} alt="" />
                    </a>
                ))
                
              }




            </Slider>
        </SliderWrapper>
    )
}

export default Silder