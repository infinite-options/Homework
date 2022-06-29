
import { useParams } from 'react-router-dom';
import ReactDOM from 'react-dom'
import movieData from '../movieData';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components

import Grid from './Grid';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import React, {useState, useEffect} from 'react';
// Image
import NoImage from '../images/no_image.jpg';





// async function getMovie() {
//   const response = await fetch(
//    "https://iznfqs92n3.execute-api.us-west-1.amazonaws.com/dev/api/v2/movies"
//   )

//   const movies =  response.json();
//   console.log(movies);

//   return movies;
// }


  

  //<div>Hello {this.props.toWhat}</div>;
 
  //const root = ReactDOM.createRoot(document.getElementById('root'));
  //root.render(<Hello toWhat="World" />);

  //document.write("Hello world<br>");

 /* 
  console.log(movies[id].movie_uid);
  console.log(movies[id].movie_title);
  console.log(movies[id].movie_order);
  console.log(movies[id].movie_year);
  console.log(movies[id].book_order);
  console.log(movies[id].book_year);
  console.log(movies[id].bond_actor);
  console.log(movies[id].director);

 let uid = document.querySelector("div");
  uid.innerHTML = movies[id].movie_uid;
  let title = document.querySelector("div");
  title.innerHTML = movies[id].movie_title;


    
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);

  */




  

  
  //console.log(id)


function print(id){
  console.log(id);
}



const Movie = () => {
  //const [data, setMovies] = useState([]);

  // useEffect(() =>
  // {
  //   const response =  fetch(
  //     "https://iznfqs92n3.execute-api.us-west-1.amazonaws.com/dev/api/v2/movies"
  //    )
  //   console.log(response);
  //    const movies =  response.json();
  //    movies.then((json) => setMovies(json));
  // }, []);

  const [movies,setMovies] = useState([]);

  async function getMovie() {
      const response = await fetch(
      "https://iznfqs92n3.execute-api.us-west-1.amazonaws.com/dev/api/v2/movies"
      );

      const movieData = response.json();
      movieData.then(json => {
          console.log(json);
          setMovies(json);
      });
  }

    //Use Effect in order to run getMovie function only 1 time.
  useEffect(()=> {
      getMovie();
  }, []);


  const { movieId } = useParams();
  //const movie = this.state;

  const id = movieId - 1;
  var mid = 14;

    return (
      <>
        {
          movies.length > 0 ?
             <div>
              movie_uid： {movies[id].movie_uid}<br />
              Movie Title: {movies[id].movie_title}<br />
              movie_order: {movies[id].movie_order}<br />
              movie_year: {movies[id].movie_year}<br />
              book_order: {movies[id].book_order}<br />
              book_year: {movies[id].book_year}<br />
              bond_actor: {movies[id].bond_actor}<br />
              director: {movies[id].director}<br />
              M: {movies[id].M}<br />
              Q: {movies[id].Q}<br />
              Moneypenny: {movies[id].Moneypenny}<br />
              car: {movies[id].car}<br />
              gun: {movies[id].gun}<br />
              girl_uid: {movies[id].girl_uid}<br />
              girl_movie_uid: {movies[id].girl_movie_uid}<br />
              bond_girl: {movies[id].bond_girl}<br />
              bond_girl_actress: {movies[id].bond_girl_actress}<br />
              femme_fatale: {movies[id].femme_fatale}<br />
              femme_fatale_actress: {movies[id].femme_fatale_actress}<br />
              song_uid: {movies[id].song_uid}<br />
              song_movie_uid: {movies[id].song_movie_uid}<br />
              song_year: {movies[id].song_year}<br />
              score_composer: {movies[id].score_composer}<br />
              title_song: {movies[id].title_song}<br />
              title_song_composer: {movies[id].title_song_composer}<br />
              title_song_performer: {movies[id].title_song_performer}<br />
              us_peak: {movies[id].us_peak}<br />
             </div>
             
             :null
        }
        
        
      </>
    );


};

export default Movie;
