import { useState } from "react";
import axios from "axios";


const MovieAdd = () => {

    const defaultReview = {
        title: '',
        director: '',
        abstract: '',
        image: ''
    }

    const [review, setReview] = useState(defaultReview)


    // function newForm(e) {
    //     const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    //     setReview((prevReview) => ({
    //         ...prevReview,
    //         [e.target.name]: value
    //     }));
    // }

    function newForm(e) {
        const { name, value, files } = e.target

        let currentValue

        if (name === 'image') {
            currentValue = files[0]
        } else {
            currentValue = value;
        }



        setReview((formData) => ({
            ...formData, [name]: currentValue
        }))
    }

    function sendReview(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", review.title);
        formData.append("director", review.director);
        formData.append("abstract", review.abstract);
        formData.append("image", review.image); // questo è il file

        axios.post(`http://127.0.0.1:3000/api/movies/`, formData)
            .then(res => {
                setReview(defaultReview);
            })
            .catch(err => console.log(err));
    }


    return (
        <article>
            <h1>Aggiungi un nuovo Film</h1>
            <section id="add-movie">
                <form onSubmit={sendReview}>
                    <div className="mb-3">
                        <label htmlFor="movie-title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="book-title" placeholder="Inserisci il titolo del film" name="title" value={review.title} onChange={newForm} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="movie-director" className="form-label">Director</label>
                        <input type="text" className="form-control" id="book-director" placeholder="Inserisci il titolo del film" name="director" value={review.director} onChange={newForm} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Movie Text" className="form-label">Example textarea</label>
                        <textarea name="abstract" className="form-control" id="Movie Text"
                            rows='3' value={review.abstract} onChange={newForm} ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Cover</label>
                        <input type="file" className="form-control" name="image" onChange={newForm} />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Add Movie</button>
                    </div>
                </form>
            </section>
        </article>
    )
}

export default MovieAdd