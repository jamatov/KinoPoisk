import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function Header() {
  const getMovies = async() => {
    await axios.get('https://api.kinopoisk.dev/movie?token=ETQT0ZV-RG7MSY4-HHQXRB2-TVXDBSA')
      .then((res) => {
          console.log(res);
      })
      .catch((err) => {
          console.log(err);
      })
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='Header'>
      <div className="header-info">
        <div className="header-movie"></div>
      </div>
    </div>
  )
}
