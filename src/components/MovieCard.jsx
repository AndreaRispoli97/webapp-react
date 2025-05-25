import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const MovieCard = ({ data }) => {

    const { id, title, director, genre, release_year, abstract, media_voti, imagePath, slug } = data;
    return (
        <div className="card">

            <img src={imagePath} alt={title} className="w-50 mx-auto" />


            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <h5 className="card-title">{director}</h5>
                <p className="card-text">{genre}</p>
                <p className="card-text">{release_year}</p>
                <p className="card-text">{abstract}</p>
                <StarRating media_voti={media_voti} />
                {/* <p className="card-text"><StarComponent/></p> */}
                <Link to={`/movie/${slug}`} className="btn btn-primary">Dettaglio</Link>
            </div>
        </div>
    )
}

export default MovieCard