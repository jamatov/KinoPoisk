import React from 'react'
import Biletikino from '../components/Biletikino'
import Domdrakon from '../components/Domdrakon'
import Header from '../components/Header'
import Homecards from '../components/Homecards'
import SliderPus from '../components/SliderPus'
import Yandexplus from '../components/Yandexplus'

export default function Home() {
  return (
    <div className='Home'>
      <Header/>
      <Domdrakon/>
      <Biletikino/>
      <Yandexplus/>
      <SliderPus/>
      <Homecards/>
    </div>
  )
}
