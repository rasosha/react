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

  function isEnterKey(e: React.KeyboardEvent) {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      props.setPage(1);
      props.setName(props.inputValue);
    }
  }

  return (
    <div className="searchbar-div">
      <input
        type="text"
        className="searchbar-input"
        placeholder="Search..."
        value={props.inputValue}
        autoComplete="off"
        onChange={(event) => {
          props.onInputValueChange(event.target.value);
        }}
        onKeyUp={(e) => isEnterKey(e)}
      />
      <button
        className="searchbar-clear"
        onClick={() => {
          props.setPage(1);
          props.setName('');
          props.onInputValueChange('');
        }}
      >
        &#x2716;
      </button>
      <button
        className="searchbar-btn"
        onClick={() => {
          props.setPage(1);
          props.setName(props.inputValue);
        }}
      >
        🔍
      </button>
    </div>
  );
}
