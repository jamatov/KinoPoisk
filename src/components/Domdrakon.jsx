import React from 'react'
import Slider from "react-slick";
import Img from '../images/domdrakon.webp'


export default function Domdrakon() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className='Domdrakon'>
      <div className='container2'>
        <h2> «Дом Дракона»: финал </h2>
        <Slider className='slider__list' {...settings}>
          <div className='slider__item'>
            <img src={Img} alt="" />
          </div>

          <div className='slider__item'>
            <img src={Img} alt="" />
          </div>

          <div className='slider__item'>
            <img src={Img} alt="" />
          </div>

          <div className='slider__item'>
            <img src={Img} alt="" />
          </div>

          <div className='slider__item'>
            <img src={Img} alt="" />
          </div>

        </Slider>
      </div>
    </div>
  )
}
