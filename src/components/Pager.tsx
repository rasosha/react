import React, { useEffect, useState } from 'react';
import { FetchDataInfo } from '../types/types';

export default function Pager(props: {
  info: FetchDataInfo | undefined;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isLoaded: boolean;
  page: number;
}) {
  useEffect(() => {
    setPrev(props.info?.prev);
    setNext(props.info?.next);
  }, [props.info?.next, props.info?.prev, props.page]);

  const [prev, setPrev] = useState(props.info?.prev);
  const [next, setNext] = useState(props.info?.next);

  return (
    <div className="pager">
      {prev && props.isLoaded ? (
        <button
          onClick={() => {
            props.setPage(props.page - 1);
          }}
        >
          prev
        </button>
      ) : (
        <button disabled>prev</button>
      )}
      <p>
        {props.page} / {props.info?.pages}
      </p>
      {next && props.isLoaded ? (
        <button
          onClick={() => {
            props.setPage(props.page + 1);
          }}
        >
          next
        </button>
      ) : (
        <button disabled>next</button>
      )}
    </div>
  );
}
