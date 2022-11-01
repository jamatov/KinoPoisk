import React from 'react'
import Slider from "react-slick";
import Turk from '../images/kino-turk.webp'



export default function SliderPus() {

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
    <div className='SliderPlus'>
      <div className='container2'>
        <h2> Смотрят сейчас </h2>
        <Slider className='plus-slider' {...settings}>

          <div  className='slider__item'>
            <img src={Turk} alt="" />
            <div className='slider-topblock'>
              <span className='left-icon'></span>
              8.2
              <span className='right-icon'></span>
            </div>
            <div className='plus-block'>

            </div>

          </div>

          <div  className='slider__item'>
            <img src={Turk} alt="" />

            <div className='slider-topblock'>
              <span className='left-icon'></span>
              8.2
              <span className='right-icon'></span>
            </div>
            <div className='plus-block'>
              
            </div>
            
          </div>

          <div  className='slider__item'>
            <img src={Turk} alt="" />

            <div className='slider-topblock'>
              <span className='left-icon'></span>
              8.2
              <span className='right-icon'></span>
            </div>
            <div className='plus-block'>
              
            </div>
            
          </div>

          <div  className='slider__item'>
            <img src={Turk} alt="" />

            <div className='slider-topblock'>
              <span className='left-icon'></span>
              8.2
              <span className='right-icon'></span>
            </div>
            <div className='plus-block'>
              
            </div>
            
          </div>

          <div  className='slider__item'>
            <img src={Turk} alt="" />

            <div className='slider-topblock'>
              <span className='left-icon'></span>
              8.2
              <span className='right-icon'></span>
            </div>
            <div className='plus-block'>
              
            </div>
            
          </div>
          <div  className='slider__item'>
            <img src={Turk} alt="" />

            <div className='slider-topblock'>
              <span className='left-icon'></span>
              8.2
              <span className='right-icon'></span>
            </div>
            <div className='plus-block'>
              
            </div>
            
          </div>
          <div  className='slider__item'>
            <img src={Turk} alt="" />

            <div className='slider-topblock'>
              <span className='left-icon'></span>
              8.2
              <span className='right-icon'></span>
            </div>
            <div className='plus-block'>
              
            </div>
            
          </div>
          <div  className='slider__item'>
            <img src={Turk} alt="" />

            <div className='slider-topblock'>
              <span className='left-icon'></span>
              8.2
              <span className='right-icon'></span>
            </div>
            <div className='plus-block'>
              
            </div>
            
          </div>
        </Slider>
      </div>
    </div>
  )
}
