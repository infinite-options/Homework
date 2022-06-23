import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import List from './Components/List.js';
import MovieInformation from './Components/MovieInformation.js'
function App() {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(-1);
  const [actor, setActor] = useState(false);
  // PROBLEM:
  // Component keeps rerendering because axios get function keeps updating the state of the app component
  useEffect(() =>
  {
      axios.get("https://iznfqs92n3.execute-api.us-west-1.amazonaws.com/dev/api/v2/movies").then((response) =>
      {
        setMovies(response.data);
      })
  }, []);
  
  return (
    <div className="App">
      <List movieArray={movies} setIndex={setIndex} setActor={setActor}/>
      <MovieInformation index={index} actor={actor} movies={movies}/>
    </div>
  );
}

export default App;
