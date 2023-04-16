import React, { useEffect, useState } from 'react';
import CardModal from '../components/Card/CardModal';
import Cards from '../components/Card/Cards';
import Loader from '../components/Loader';
import Pager from '../components/Pager';
import { SearchBar } from '../components/SearchBar';
import { FetchData } from '../types/types';

export default function IndexPage() {
  const url = `https://rickandmortyapi.com/api/character/`;
  const [name, setName] = useState(localStorage.inputText || '');
  const [page, setPage] = useState(1);
  const [API, setAPI] = useState(localStorage.inputText ? `${url}?name=${name}` : url);
  const [fetchData, setFetchData] = useState<FetchData>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalCard, setModalCard] = useState(0);
  const [inputValue, setInputValue] = useState(
    localStorage.inputText ? localStorage.inputText : ''
  );

  useEffect(() => {
    setAPI(`${url}?page=${page}&name=${name}`);
  }, [name, page, url]);

  useEffect(() => {
    setIsLoaded(false);
    setIsError(false);
    fetch(API)
      .then((res) => {
        if (!res.ok) {
          setIsError(true);
          throw Error(`Hm... could not fetch "${API}"`);
        } else {
          return res.json();
        }
      })
      .then((data: FetchData) => {
        setFetchData(data);
      })
      .then(() => setIsLoaded(true))
      .catch((e) => console.error(e.message));
  }, [API]);

  return (
    <>
      <main className="main" data-testid="IndexPage">
        {!(modalCard === 0) && <CardModal id={modalCard} setModalCard={setModalCard} />}
        <SearchBar />
        {!isLoaded && !isError ? (
          <Loader />
        ) : !isError ? (
          fetchData?.results && (
            <>
              <Cards cards={fetchData.results} setModalCard={setModalCard} />
            </>
          )
        ) : (
          <div className="card-error">
            <p>no cards here...</p>
          </div>
        )}
        {fetchData && (
          <Pager
            page={page}
            setPage={setPage}
            info={fetchData.info}
            isLoaded={isLoaded}
            isError={isError}
          />
        )}
      </main>
    </>
  );
}
