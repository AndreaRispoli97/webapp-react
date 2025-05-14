import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"


function FormReview({ id, reload }) {

    const defaultReview = {
        'name': '',
        'vote': 1,
        'text': ''
    }

    const [review, setReview] = useState(defaultReview)

    function newForm(e) {
        const value = e.target.value;
        setReview((formData) => ({
            ...formData, [e.target.name]: value
        }))
    }

    // console.log(id)

    function sendReview(e) {
        e.preventDefault();

        axios.post(`http://127.0.0.1:3000/api/movies/${id}/reviews`, {
            ...review,
            vote: parseInt(review.vote)
        })
            .then(res => {
                // console.log(res.data);
                setReview(defaultReview);
                reload();
            })
            .catch(err => console.log(err))

    }


    return (
        <>
            <h4>Inserisci recensione</h4>
            <form onSubmit={sendReview}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        name="name"
                        value={review.name}
                        onChange={newForm}
                        className="form-control"
                        id="nameform"
                        placeholder="Nome"
                        required
                    />
                    <label htmlFor="nameform">Nome</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="number"
                        name="vote"
                        value={review.vote}
                        onChange={newForm}
                        min={1}
                        max={5}
                        className="form-control"
                        id="voteform"
                        placeholder="Da 1 a 5 Stelle"
                        required
                    />
                    <label htmlFor="voteform">Voto (1-5)</label>
                </div>

                <div className="form-floating mb-3">
                    <textarea
                        name="text"
                        value={review.text}
                        onChange={newForm}
                        className="form-control"
                        placeholder="Lascia un commento"
                        id="textform"
                        style={{ height: "100px" }}
                        required
                    ></textarea>
                    <label htmlFor="textform">Commento</label>
                </div>
                <button type="submit" className="btn btn-primary">Invia Recensione</button>
            </form>
        </>
    )

}

export default FormReview