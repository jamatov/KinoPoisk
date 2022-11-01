import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react';

export default function Header() {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);

  const getMovies = async() => {
    await axios.get('https://api.kinopoisk.dev/movie/?token=ETQT0ZV-RG7MSY4-HHQXRB2-TVXDBSA')
      .then((res) => {
          console.log(res);
          setPosts(res.docs)
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
        <div className="movie-info">
          {posts?.map((el, index) => {
            return(
              <div key={index} className="movie-info__info">
                <span>{el.alternativeName}</span>
              </div>  
            );
          } )}

        </div>
      </div>
    </div>
  )
}
