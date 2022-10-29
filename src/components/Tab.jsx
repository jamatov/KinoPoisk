import React from 'react'

export default function Tab() {
  return (
    <div className='Tab'>
      <ul className="tab-list">
        <li className="tab-item">
          <i className="fa-solid fa-house"></i>
          Главная
        </li>
        <li className="tab-item">
        <i className="fa-solid fa-play"></i>
          Онлайн-кинотеатр
        </li>
        <li className="tab-item">
          <i className='fa-solid fa-film'></i>
        Фильмы
        </li>
        <li className="tab-item">
          <i className='fa-solid fa-copy'></i>
          Сериалы
        </li>
        <li className="tab-item">
          <i className="fa-solid fa-ticket"></i>
          Билеты в кино
        </li>
        <li className="tab-item">
        <i className="fa-solid fa-newspaper"></i>
        Медиа
        </li>

      </ul>
    </div>
  )
}
