import React, { createContext, useState } from 'react';
import axios from 'axios';

export const NominationContext = createContext();

export const NominationProvider = ({ children }) => {
  const [nominationList, setNominationList] = useState([]);

  const addNomination = async (movie) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=9963a80d`);
      if (response.data) {
        const { Title, Year, Poster } = response.data;
        const movieWithImage = { ...movie, title: Title, year: Year, poster: Poster };
        setNominationList([...nominationList, movieWithImage]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeNomination = (movie) => {
    setNominationList(nominationList.filter((nominatedMovie) => nominatedMovie.imdbID !== movie.imdbID));
  };

  return (
    <NominationContext.Provider value={{ nominationList, addNomination, removeNomination }}>
      {children}
    </NominationContext.Provider>
  );
};
