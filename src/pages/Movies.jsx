import axios from 'axios'
import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { useContext } from 'react'
import GlobalContext from '../contexts/globalContext'


function Movies() {
    const [movies, setMovies] = useState([])
    const [resarc, setResarc] = useState("")

    const { setIsLoading } = useContext(GlobalContext)

    function getMovie() {

        setIsLoading(true);

        axios.get('http://127.0.0.1:3000/api/movies',
            {
                params: { resarc }
            }
        )
            .then(res => {
                console.log(res.data);
                setMovies(res.data);
            })
            .catch(err => {
                console.error('Errore', err)
            })
            .finally(() => setIsLoading(false))
    }

    function sarchMovies(e) {
        e.preventDefault()
        getMovie()
    }
    useEffect(() => { getMovie() }, [])

    return (
        <>
            <div className="container">
                <h2>i nostri film</h2>

                <div>
                    <form className="row g-3" onSubmit={(e) => sarchMovies(e)} >

                        <div className="col-auto">

                            <input type="text" onChange={(e) => setResarc(e.target.value)} className="form-control" placeholder="ricerca" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">ricerca</button>
                        </div>
                    </form>

                </div>


            </div>
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