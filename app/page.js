'use client'


import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from '../app/components/SearchForm.jsx';
import SearchResults from '../app/components/SearchResults.jsx';
import NominationList from '../app/components/NominationList.jsx';
import { NominationProvider } from '../app/context/NominationContext.js';
export default function Home() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=9963a80d`);
      if (response.data && response.data.Search) {
        setSearchResults(response.data.Search);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error(error);
      setSearchResults([]);
    }
  };

  return (
    <NominationProvider>
      <SearchForm onSearch={handleSearch} />
      <SearchResults results={searchResults} />
      <NominationList />
    </NominationProvider>
  );
};