import React from 'react'
import Header from '../components/Header'
import Homecards from '../components/Homecards'
// import Plusslide from '../components/Plusslide'
import Yandexplus from '../components/Yandexplus'

export default function Home() {
  return (
    <div className='Home'>
      <Header/>
      <Yandexplus/>
      {/* <Plusslide/> */}
      <Homecards/>
    </div>
  )
}
