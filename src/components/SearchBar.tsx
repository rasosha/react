import React from 'react';

export function SearchBar(props: {
  inputValue: string;
  onInputValueChange: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  React.useEffect(() => {
    return localStorage.setItem('inputText', props.inputValue);
  });

  return (
    <div className="searchbar-div">
      <form
        className="searchbar-form"
        onSubmit={(event) => {
          event.preventDefault();
          props.setPage(1);
          props.setName(props.inputValue);
        }}
      >
        <input
          type="text"
          className="searchbar-input"
          placeholder="Search..."
          value={props.inputValue}
          autoComplete="off"
          onChange={(event) => {
            props.onInputValueChange(event.target.value);
          }}
        />
        <button
          type="reset"
          className="searchbar-clear"
          onClick={() => {
            props.setPage(1);
            props.setName('');
            props.onInputValueChange('');
          }}
        >
          &#x2716;
        </button>
        <button type="submit" className="searchbar-btn">
          🔍
        </button>
      </form>
    </div>
  );
}
