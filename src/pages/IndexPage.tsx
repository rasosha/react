import React, { useState } from 'react';
import Cards from '../components/Cards';
import Loader from '../components/Loader';
import { SearchBar } from '../components/SearchBar';
import { FetchData } from '../types/types';

export default function IndexPage() {
  const API = `https://rickandmortyapi.com/api/character/`;
  const [fetchData, setFetchData] = useState<FetchData>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inputValue, setInputValue] = useState(
    localStorage.inputText ? localStorage.inputText : ''
  );

  React.useEffect(() => {
    const squery = inputValue ? `?name=${inputValue}` : '';
    const url = `${API}/${squery}`;
    setIsLoaded(false);
    setIsError(false);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          setIsError(true);
          throw Error('Could not fetch this');
        }
        return res.json();
      })
      .then((data: FetchData) => {
        setFetchData(data);
        setIsLoaded(true);
      })
      .catch((error) => console.log('!', error.message));
  }, [API, inputValue]);

  React.useEffect(() => console.log(inputValue), [inputValue]);

  return (
    <>
      <main className="main" data-testid="IndexPage">
        <SearchBar inputValue={inputValue} onInputValueChange={setInputValue} />
        {isError && <p>Error!</p>}
        {!isLoaded && !isError ? (
          <Loader />
        ) : (
          !isError &&
          fetchData?.results && (
            <>
              <Cards cards={fetchData.results} />
            </>
          )
        )}
      </main>
    </>
  );
}
