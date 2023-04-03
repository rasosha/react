import React from 'react';

export function SearchBar() {
  const [inputText, setInputText] = React.useState(
    localStorage.inputText ? localStorage.inputText : ''
  );

  React.useEffect(() => {
    return () => (localStorage.inputText = inputText);
  }, [inputText]);

  return (
    <div className="searchbar-div">
      <input
        type="text"
        className="searchbar-input"
        placeholder="Search..."
        value={inputText}
        autoComplete="off"
        onChange={(event) => setInputText(event.target.value)}
      />
      <button className="searchbar-btn">🔍</button>
    </div>
  );
}
