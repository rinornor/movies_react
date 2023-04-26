import React from 'react'
import { Link } from 'react-router-dom'

function Movie({id, title, poster_path}) {
  return (
    <div>
      <Link to={`/${id}`}>
      <h2>{title}</h2>
      <img 
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}  
        className='img'
         />
      </Link>
    </div>
  )
}

export default Movie