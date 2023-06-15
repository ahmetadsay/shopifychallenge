import React, { useContext } from 'react';
import { NominationContext } from '../context/NominationContext';

const NominationList = () => {
  const { nominationList, removeNomination } = useContext(NominationContext);

  return (
    <div>
      <h2>Nomination List</h2>
      {nominationList.length === 0 && <p>No nominations yet.</p>}
      <ul>
        {nominationList.map((movie) => (
          <li key={movie.imdbID}>
            <div>
              <img src={movie.poster} alt={movie.title} style={{ width: '100px' }} />
              <p>{movie.title}</p>
              <button onClick={() => removeNomination(movie)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NominationList;
