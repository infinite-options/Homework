import React from 'react'

function MovieInformation(props) {
    let index = props.index;
    let movies = props.movies;
    if(index === -1) 
    {
        return <div className = "movieInformation"></div>;
    }
    else if (props.actor === true && movies[index])
    {
        return <div className = "movieInformation">
            <h1 className="movieHeader">{movies[index].movie_title}</h1>
            <p className="infoText">Bond Actor: {movies[index].bond_actor}</p>
            <p className="infoText">MoneyPenny: {movies[index].MoneyPenny}</p>
            <p className="infoText">M: {movies[index].M}</p>
            <p className="infoText">Q: {movies[index].Q}</p>
            <p className="infoText">Bond Girl: {movies[index].bond_girl}</p>
            <p className="infoText">Bond Girl Actress: {movies[index].bond_girl_actress}</p>
            <p className="infoText">Femme-Fatale: {movies[index].femme_fatale}</p>
            <p className="infoText">Femme-Fatale Actress: {movies[index].femme_fatale_actress}</p>
        </div>
    }
    else if (props.actor === false && movies[index])
    {
        return <div className = "movieInformation">
            <h1 className="movieHeader">{movies[index].movie_title}</h1>
            <p className="infoText">Movie year: {movies[index].movie_year}</p>
            <p className="infoText">Book Order: {movies[index].book_order}</p>
            <p className="infoText">Director: {movies[index].director}</p>
            <p className="infoText">Gun used: {movies[index].gun}</p>
            <p className="infoText">Score Composer: {movies[index].score_composer}</p>
            <p className="infoText">Title Song: {movies[index].title_song}</p>
            <p className="infoText">Title Song Composer: {movies[index].title_song_composer}</p>
            <p className="infoText">Title Song Performer: {movies[index].title_song_composer}</p>
            
        </div>
    }
}

export default MovieInformation;