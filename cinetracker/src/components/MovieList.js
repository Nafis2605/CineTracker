import React from "react";
import Movie from "./Movie";

const MovieList = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {props.movies.map((movie, i) => {
                        console.log(movie)
                        return (
                            <Movie data={movie} key={i} />
                        )
                    }
                    )}

                </div>
            </div>
        </div>
    )
}

export default MovieList;