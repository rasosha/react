import React from 'react';

export function SearchBar(props: {
  inputValue: string;
  onInputValueChange: React.Dispatch<React.SetStateAction<string>>;
}) {
  React.useEffect(() => {
    return localStorage.setItem('inputText', props.inputValue);
  });

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
      />
      <button className="searchbar-btn">🔍</button>
    </div>
  );
}
