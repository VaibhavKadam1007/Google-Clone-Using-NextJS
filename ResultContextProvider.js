import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
// const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';
// const baseUrl='https://google-search3.p.rapidapi.com/api/v1';
const baseUrl=' https://customsearch.googleapis.com/customsearch/v1'
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('JS Mastery');

  const getResults = async(type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      // headers: {
      //   'x-rapidapi-host': 'google-search1.p.rapidapi.com',
      //   'x-rapidapi-key': 'aa63eb030dmshfa5801f80c82e91p1ef8e3jsn33883c71086a'
       
      // }

    });

    const data = await response.json();
    // if (type.includes('/news')){
    //   setResults(data.enteries);
    // }else if (type.includes('/images')){
    //   setResults(data.image_results);
    // }
    //  else{
    //    setResults(data.results);
    //  }
     setResults(data);
    console.log(data);
    
    setIsLoading(false);
  }

  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
      {children}
    </ResultContext.Provider>
  );
}

export const useResultContext = () => useContext(ResultContext);