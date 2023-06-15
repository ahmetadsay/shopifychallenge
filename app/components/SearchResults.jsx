import React, { useContext } from 'react';
import { NominationContext } from '../context/NominationContext';

const SearchResults = ({ results }) => {
  const { nominationList, addNomination } = useContext(NominationContext);

  const handleNominate = (movie) => {
    if (nominationList.length < 5) {
      addNomination(movie);
    }
  };

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title} ({movie.Year})
            <button
              type="button"
              onClick={() => handleNominate(movie)}
              disabled={nominationList.some((nominatedMovie) => nominatedMovie.imdbID === movie.imdbID)}
            >
              Nominate
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
