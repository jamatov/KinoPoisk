import React from 'react'
import Slider from "react-slick";

export default function Biletikino() {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 6,
    variableWidth: true
  };
  return (
    <div className='Biletikino'>
      <div className='container2'>
        <h2> Билеты в кино </h2>
        <Slider className='slider' {...settings}>
          <div className='slider__item' style={{ width: 460 }}>
            <p>100</p>
          </div>
          <div className='slider__item' style={{ width: 140 }}>
            <p>200</p>
          </div>
          <div className='slider__item' style={{ width: 140}}>
            <p>75</p>
          </div>
          <div className='slider__item' style={{ width: 140 }}>
            <p>300</p>
          </div>
          <div className='slider__item' style={{ width: 140 }}>
            <p>225</p>
          </div>
          <div className='slider__item' style={{ width: 140 }}>
            <p>175</p>
          </div>
        </Slider>

      </div>
    </div>
  )
}
