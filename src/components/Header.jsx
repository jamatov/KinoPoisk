import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Header() {
  fetch('https://api.kinopoisk.dev/movie?token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06&search=326&field=id')
    .then((res) => res.json())
    .then((json) => console.log(json))

//   const getMovie = () => {
//     fetch("https://api.kinopoisk.dev/movie", {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ETQT0ZV-RG7MSY4-HHQXRB2-TVXDBSA',
//         }
//     }).then((res) => res.json()).then((json) => console.log(json))
// }

//   getMovie()

  return (
    <div>Header</div>
  )
}
