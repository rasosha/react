import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchInput } from '../redux/appReducer';
// import { searchInput } from '../redux/searchReducer';
import { State } from '../redux/store';

export function SearchBar() {
  const search = useSelector((state: State) => state.myApp.inputValue);
  const dispatch = useDispatch();
  const [input, setInput] = useState(search);

  return (
    <div className="searchbar-div">
      <form
        className="searchbar-form"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(searchInput({ type: 'SET_VALUE', payload: input }));
          console.log('input:', input);
        }}
        onReset={(event) => {
          event.preventDefault();
          dispatch(searchInput({ type: 'SET_VALUE', payload: '' }));
          setInput('');
        }}
      >
        <input
          type="text"
          className="searchbar-input"
          placeholder="Search..."
          value={input}
          autoComplete="off"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button type="reset" className="searchbar-clear">
          &#x2716;
        </button>
        <button type="submit" className="searchbar-btn">
          🔍
        </button>
      </form>
    </div>
  );
}
