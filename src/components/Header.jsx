import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Header() {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);

  const getAll =  async () => {
     await axios
      .get("https://api.kinopoisk.dev/movie/")
      .then((res) => {
        setPosts(res.data);
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAll();
    // })
  }, []);
  return (
    <div>Header</div>
  )
}
