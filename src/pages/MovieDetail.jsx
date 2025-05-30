import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import StarRating from "../components/StarRating";
import FormReview from "../components/FormReview";

import { useContext } from 'react'
import GlobalContext from '../contexts/globalContext'

const MovieDetail = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState({})
    // console.log(id);

    const { setIsLoading } = useContext(GlobalContext)

    function getMovie() {
        setIsLoading(true);
        axios(`http://127.0.0.1:3000/api/movies/${id}`)
            .then(res => setMovie(res.data))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }

    useEffect(getMovie, [id])
    // console.log(movie)

    return (

        <div>
            {movie ? <>
                <img src={movie.imagePath} alt={movie.title} className="w-25" />
                <h1>{movie.title}</h1>
                <h2>{movie.director}</h2>
                <p>{movie.abstract}</p>
                <hr />
            </> : 'film non trovato'}
            <div>
                {movie.reviews?.length ? movie.reviews.map(e => (
                    <div className="card" key={e.id}>

                        <div className="card-header d-flex justify-content-between">
                            <h3>
                                {e.name}
                            </h3>
                            <div>
                                <StarRating media_voti={e.vote} />
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{e.text}</p>
                        </div>
                    </div>)) : <div>Nessuna recensione</div>}
            </div>
            <FormReview id={id} reload={getMovie} />

        </div>

    )
}

export default MovieDetail