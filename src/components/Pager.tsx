import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetByNameQuery } from '../redux/apiReducer';
import { nextPage, prevPage } from '../redux/appReducer';
import { State } from '../redux/store';

export default function Pager() {
  const { page, query, isError, isLoading } = useSelector((state: State) => state.myApp);
  const isShown = !isError || !isLoading;
  const { data } = useGetByNameQuery(query);
  const dispatch = useDispatch();

  return (
    <>
      {isShown && (
        <div className="pager">
          {data.info.prev && !isLoading ? (
            <button
              onClick={() => {
                dispatch(prevPage());
              }}
            >
              prev
            </button>
          ) : (
            <button disabled>prev</button>
          )}
          <p>{page} </p>
          <span>/{data.info.pages || 1}</span>
          {data.info.next && !isLoading ? (
            <button
              onClick={() => {
                dispatch(nextPage());
              }}
            >
              next
            </button>
          ) : (
            <button disabled>next</button>
          )}
        </div>
      )}
    </>
  );
}
