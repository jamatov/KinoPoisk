import React from 'react'
import Homecards from '../components/Homecards'
import Yandexplus from '../components/Yandexplus'

export default function Home() {
  return (
    <div className='Home'>
      <Yandexplus/>
      <Homecards/>
    </div>
  )
}
