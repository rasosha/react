import Cards from '../components/Cards';
import React from 'react';
import SearchBar from '../components/SearchBar';

function IndexPage() {
  return (
    <>
      <main className="main">
        <SearchBar />
        <Cards />
      </main>
    </>
  );
}

export default IndexPage;
