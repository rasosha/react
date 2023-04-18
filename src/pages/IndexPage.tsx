import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardModal from '../components/Card/CardModal';
import Cards from '../components/Card/Cards';
import Loader from '../components/Loader';
import Pager from '../components/Pager';
import { SearchBar } from '../components/SearchBar';
import { useGetByNameQuery } from '../redux/apiReducer';
import { setQuery, setResults } from '../redux/appReducer';
import { State } from '../redux/store';

export default function IndexPage() {
  const { page, inputValue, modalCard, query } = useSelector((state: State) => state.myApp);
  const { isError, isFetching, data } = useGetByNameQuery(query);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const newQuery = `page=${page}&name=${inputValue}`;
    dispatch(setQuery({ payload: newQuery }));
    dispatch(setResults({ data, isError, isFetching }));
    console.log(data, isError, isFetching);
  }, [data, dispatch, inputValue, isError, isFetching, page, query]);

  return (
    <>
      <main className="main" data-testid="IndexPage">
        {!(modalCard === 0) && <CardModal />}
        <SearchBar />
        {isFetching && !isError ? (
          <Loader />
        ) : !isError ? (
          data.results && (
            <>
              <Cards />
            </>
          )
        ) : (
          <div className="card-error">
            <p>no cards here...</p>
          </div>
        )}
        {data && <Pager />}
      </main>
    </>
  );
}
