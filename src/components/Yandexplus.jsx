import React from 'react'
import Bg from '../images/yandex-plus-bg.png'
import Logo from '../images/yandex-plus-logo.svg'

export default function Yandexplus() {
  return (
    <div className='Yandexplus'>
      <div className="box1">
        
        <img className='bg-img' src={Bg} alt="" />

        <div className='yandex-plus'>
          <div className="plus-info">
            <img src={Logo} alt="" />
            <h2>Фильмы и сериалы по подписке Яндекс Плюс</h2>
            <h3>Месяц всего за 599 сумов</h3>
            <p>Отменяйте в любой момент, напишем за 3 дня до первого списания</p>
          </div>

          <div className='plus-statistic'>
            <p>Месяц всего за 599 сумов</p>
            <div className='statistic'>
              <div className='block1'></div>
              <div className='block2'></div>
            </div>
            <div className='statistic-info'>Напишем на почту за 3 дня</div>
            <div className='static-button'>
              <button>Оформить Месяц всего за 599 сумов</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
