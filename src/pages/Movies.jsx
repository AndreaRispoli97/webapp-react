import axios from 'axios'
import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'


function Movies() {
    const [movies, setMovies] = useState([])


    function getMovie() {
        axios.get('http://127.0.0.1:3000/api/movies')
            .then(res => {
                console.log(res.data);
                setMovies(res.data);
            })
            .catch(err => {
                console.error('Errore', err)
            })
    }

    useEffect(getMovie, [])

    return (
        <>
            <h1 className='mb-3'>Lista Film</h1>
            <section>
                <div className='row'>
                    {movies ? movies.map(movie => (
                        <div className='col-12 col-md-4' key={movie.id}>
                            <MovieCard data={movie} />
                        </div>
                    )) : <div>errore elemento</div>}

                </div>
            </section>
        </>
    )
}

export default Movies