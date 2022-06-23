import React from 'react';
import ListItem from './ListItem.js'


function List(props) {
    let movies = props.movieArray;
    return <div className="movieList">
        <h1>Jame's Bond Movie List</h1>
        <ol>
            {movies.map((movie, index) =>
            (
                <ListItem name={movie.movie_title} index={index} setIndex={props.setIndex} key={index} setActor={props.setActor}/>
            ))}
        </ol>
        </div>;
}

export default List;