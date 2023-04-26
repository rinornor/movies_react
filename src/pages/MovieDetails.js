import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function MovieDetails() {
    const {id} = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=ed8cc90b078c36a46a762f9b7b417132`
          )
          .then(response => {
            setData(response.data);
            console.log(data)
          })
          .catch(err => {
            console.log(err);
          });
      }, [id]);
  return (
    <>
      {data && (
        <div className="container">
          <img
            src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
            className="movie-img"
            
          />
          <h2>{data.title}</h2>
          <p>{data.overview}</p>
          
        </div>
      )}
    </>
  )
}

export default MovieDetails