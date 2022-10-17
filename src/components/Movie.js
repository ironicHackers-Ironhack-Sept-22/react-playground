function Movie(props){

    return (
        <section className="movie">
            <h3>Title: {props.detailsObj.title}</h3>
            <h3>Rating: {props.detailsObj.rating}</h3>
        </section>
    );
}


export default Movie;