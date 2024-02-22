import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from './Movie'



export const API_KEY = 'ed8cc90b078c36a46a762f9b7b417132' 





function Movies() {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
        .then(response => setMovies(response.data.results)).catch(err=>console.log(err))
        
    }, [page])

    useEffect(()=>{
        if(search.length > 0){
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ed8cc90b078c36a46a762f9b7b417132&language=en-US&query=${search}&page=1&include_adult=false`)
                .then(response => setMovies(response.data.results)).catch(err=>console.log(err))
                
        }
    }, [search])

    const handleSearch =(e)=>{
        e.preventDefault();
        setSearch(e.target.children[0].value)
        e.target.children[0].value = "";
    }

    const next = ()=>{
         setPage(page+1)
    }

    const prev = () =>{
        if(page > 1){
            setPage(page-1)
        }
        
    }

    return (
        <>
        <div>
            <div className='mb-3 d-flex justify-content-center'>
                <form onSubmit={handleSearch} className="form-control">
                    <input type="search" placeholder="Search..." />
                </form>
            </div>
            <h2>Movies ( Top Rated) </h2>
            <div className='movies'>
            {
                movies 
                && 
                movies.map(movie =>
                    <div className='d-flex flex-column justify-space-between mb-3 w-25'>
                     <Movie id={movie.id} title={movie.original_title} poster_path={movie.poster_path} />
                    </div>
                     
                     )
                    
            }
            </div>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                
              
                <li class="page-item page-link"><a onClick={prev}>Previous</a></li>
                <li class="page-item page-link">{page}</li>
                
                <li class="page-item page-link"><a onClick={next}>Next</a></li>
                
            </ul>
        </nav>
        
      </>
    )
}

export default Movies