import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [moviesData, setMoviesData] = useState<any[] | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [uniqueActors, setUniqueActors] = useState<string[]>([]);
  const [uniqueDirectors, setUniqueDirectors] = useState<string[]>([]);
  const [uniqueRoles, setUniqueRoles] = useState<string[]>([]);
  const [uniqueBondActors, setUniqueBondActors] = useState<string[]>([]);
  const [uniqueMActors, setUniqueMActors] = useState<string[]>([]);
  const [uniqueQActors, setUniqueQActors] = useState<string[]>([]);
  const [uniqueMoneypennyActors, setUniqueMoneypennyActors] = useState<string[]>([]);
  const [uniqueBondGirlActresses, setUniqueBondGirlActresses] = useState<string[]>([]);
  const [uniqueFemmeFataleActresses, setUniqueFemmeFataleActresses] = useState<string[]>([]);
  const [uniqueYears, setUniqueYears] = useState<string[]>([]);
  const [uniqueSongs, setUniqueSongs] = useState<string[]>([]);


  const roles = new Set<any>();
  roles.add('bond_actor');
  roles.add('M');
  roles.add('Q');
  roles.add('Moneypenny');
  roles.add('bond_girl_actress');
  roles.add('femme_fatale_actress');


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://iznfqs92n3.execute-api.us-west-1.amazonaws.com/dev/api/v2/movies'
        );
        setMoviesData(response.data);

        // Extract unique actor and director names
        const actors = new Set<string>();
        const directors = new Set<string>();
        const BondActors = new Set<string>();
        const MActors = new Set<string>();
        const QActors = new Set<string>();
        const MoneypennyActors = new Set<string>();
        const BondGirlActresses = new Set<string>();
        const FemmeFataleActresses = new Set<string>();
        const Years = new Set<string>();
        const Songs = new Set<string>();
        // create a set for all all the different actor types
        response.data.forEach((movie: any) => {
        
          actors.add(movie.bond_actor);
          actors.add(movie.M);
          actors.add(movie.Q);
          actors.add(movie.Moneypenny);
          actors.add(movie.bond_girl_actress);
          actors.add(movie.femme_fatale_actress);

          BondActors.add(movie.bond_actor);
          MActors.add(movie.M);
          QActors.add(movie.Q);
          MoneypennyActors.add(movie.Moneypenny);
          BondGirlActresses.add(movie.bond_girl_actress);
          FemmeFataleActresses.add(movie.femme_fatale_actress);
          
          directors.add(movie.director);

          Years.add(movie.movie_year);
          Songs.add(movie.title_song);

        });
        setUniqueActors(Array.from(actors));
        setUniqueDirectors(Array.from(directors));
        setUniqueRoles(Array.from(roles));
        setUniqueBondActors(Array.from(BondActors));
        setUniqueMActors(Array.from(MActors));
        setUniqueQActors(Array.from(QActors));
        setUniqueMoneypennyActors(Array.from(MoneypennyActors));
        setUniqueBondGirlActresses(Array.from(BondGirlActresses));
        setUniqueFemmeFataleActresses(Array.from(FemmeFataleActresses));
        setUniqueYears(Array.from(Years));
        setUniqueSongs(Array.from(Songs));

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const handleRoleClick = (role: string) => {
    setSelectedRole(role);
  }

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
    setSelectedPerson(null);
  };

  const handlePersonClick = (person: string) => {
    setSelectedPerson(person);
  };

  return (
    <div className="App">
      <h1>Bond Movies</h1>
      {moviesData && (
        <div>
          <h2>Select a Section:</h2>
          <button onClick={() => handleSectionClick('Actors')}>Actors</button>
          <button onClick={() => handleSectionClick('Song')}>Song</button>
          <button onClick={() => handleSectionClick('Year')}>Year</button>
          <button onClick={() => handleSectionClick('Director')}>Director</button>
          {selectedSection && ( 
            <div>
              <h2>{selectedSection === 'Actors' && selectedRole}</h2>
              {selectedSection === 'Actors' && uniqueRoles.map((role: string) => (
                <button key={role} onClick={() => handleRoleClick(role)}>
                  {role}
                </button>
              ))}
              <h2>{selectedSection}</h2>
              {selectedSection === 'Actors' && selectedRole === null && uniqueActors.map((actor: string) => (
                  <button key={actor} onClick={() => handlePersonClick(actor)}>
                    {actor}
                  </button>
                ))}
              {selectedSection === 'Actors' && selectedRole === 'bond_actor' && uniqueBondActors.map((actor: string) => (
                  <button key={actor} onClick={() => handlePersonClick(actor)}>
                    {actor}
                  </button>
                ))}
              {selectedSection === 'Actors' && selectedRole === 'M' && uniqueMActors.map((actor: string) => (
                  <button key={actor} onClick={() => handlePersonClick(actor)}>
                    {actor}
                  </button>
                ))}
              {selectedSection === 'Actors' && selectedRole === 'Q' && uniqueQActors.map((actor: string) => (
                  <button key={actor} onClick={() => handlePersonClick(actor)}>
                    {actor}
                  </button>
                ))}
              {selectedSection === 'Actors' && selectedRole === 'Moneypenny' && uniqueMoneypennyActors.map((actor: string) => (
                  <button key={actor} onClick={() => handlePersonClick(actor)}>
                    {actor}
                  </button>
                ))}
              {selectedSection === 'Actors' && selectedRole === 'bond_girl_actress' && uniqueBondGirlActresses.map((actor: string) => (
                  <button key={actor} onClick={() => handlePersonClick(actor)}>
                    {actor}
                  </button>
                ))}
              {selectedSection === 'Actors' && selectedRole === 'femme_fatale_actress' && uniqueFemmeFataleActresses.map((actor: string) => (
                  <button key={actor} onClick={() => handlePersonClick(actor)}>
                    {actor}
                  </button>
                ))}
              {selectedSection === 'Song' &&
                uniqueSongs.map((song: string) => (
                  <button key={song} onClick={() => handlePersonClick(song)}>
                    {song}
                  </button>
                ))}
              {selectedSection === 'Year' &&
                uniqueYears.map((year: string) => (
                  <button key={year} onClick={() => handlePersonClick(year)}>
                    {year}
                  </button>
                ))}
              {selectedSection === 'Director' &&
                uniqueDirectors.map((director: string) => (
                  <button key={director} onClick={() => handlePersonClick(director)}>
                    {director}
                  </button>
                ))}
            </div>
          )}

                  
          {selectedPerson && (
            <div>
              <h2>Movie List</h2>
              {moviesData
                .filter(
                  (movie: any) => movie.bond_actor === selectedPerson || movie.M === selectedPerson || movie.Q === selectedPerson 
                  || movie.Moneypenny === selectedPerson || movie.female_fatale_actress === selectedPerson || 
                  movie.bond_girl_actress === selectedPerson || movie.director === selectedPerson || movie.movie_year === selectedPerson 
                  || movie.title_song === selectedPerson
                )
                .map((movie: any) => (
                  <div>
                    <h3>{movie.movie_title}</h3>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default App;
