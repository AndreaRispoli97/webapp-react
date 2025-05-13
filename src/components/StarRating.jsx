

function StarRating({ media_voti }) {

    const maxValue = 5;
    return [...Array(maxValue)].map((_, i) => <i key={i} className={`fa-star fa-${i < media_voti ? 'solid' : 'regular'}`}></i>)
}

export default StarRating