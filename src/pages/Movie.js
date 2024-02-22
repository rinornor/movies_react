import React from 'react'
import { Link } from 'react-router-dom'

function Movie({id, title, poster_path}) {
  return (
    <div>
      
      <Link to={`/${id}`} className='text-decoration-none text-center text-wrap'>
      
      <img 
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}  
        className='img img-fluid rounded mx-auto d-block'
         />
         <h5 className=''>{title}</h5>
      </Link>
    </div>
  )
}

export default Movie