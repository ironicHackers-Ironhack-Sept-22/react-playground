import { useState } from "react";

function Movie(props){

    const [numberOfLikes, setNumberOfLikes] = useState(0);

    return (
        <section className="movie">
            <h3>Title: {props.detailsObj.title}</h3>
            <h3>Rating: {props.detailsObj.rating}</h3>
            <h3>Number of likes: {numberOfLikes}</h3>

            <button onClick={() => {setNumberOfLikes(prevValue=> prevValue+1 )}}>Like this movie</button>

        </section>
    );
}


export default Movie;