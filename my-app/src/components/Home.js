import React from 'react';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
import movieData from '../movieData';

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';
// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore
  } = useHomeFetch();

  //console.log(state);
  //console.log(movieData[0].gun);
  var lookup = {};
  for (var i = 0, len = movieData.length; i < len; i++) {
      lookup[movieData[i].movie_order] = movieData[i];
  }
  





  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eqWaeh21e4ZgHjwpULZVHCGIq9X.jpg"}
          title={"007: No Time to Die"}
          
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header='007 Movies'>
        
        {movieData.map(movie =>(
           //<div>{movie.movie_title}</div>
          <Thumb
          key={movie.movie_order}
          clickable
          image={
            movie.poster
            ? movie.poster
            : NoImage
          }

          movieId={movie.movie_order}
          />
        ))};


         
        
      </Grid>




      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home; 
