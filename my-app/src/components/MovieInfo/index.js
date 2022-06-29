import React from 'react';
// Components
import Thumb from '../Thumb';
import movieData from '../../movieData';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Image
import NoImage from '../../images/no_image.jpg';
// Styles
import { Wrapper, Content, Text } from './MovieInfo.styles';

var lookup = {};
for (var i = 0, len = movieData.length; i < len; i++) {
    lookup[movieData[i].movie_order] = movieData[i];
}

async function getMovie(id) {
  const response = await fetch(
   "https://iznfqs92n3.execute-api.us-west-1.amazonaws.com/dev/api/v2/movies"
  )
  const movies = await response.json();
 
  console.log(movies[9].movie_title);
  console.log(id);
  
 }

function print(id){
  console.log(id);
}

const MovieInfo = ({ movieId }) => (


      <Wrapper>
      <Thumb
        //image={getMovie(movieId)}
      />

      <h1>fsfs{movieId}</h1>
      {print(movieId)}
      {console.log(movieId)}


    


      </Wrapper>


        
        


);

export default MovieInfo;
