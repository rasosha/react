import React from 'react';
import Cards from '../components/Cards';
import SearchBar from '../components/SearchBar';

function IndexPage() {
  return (
    <>
      <main className="main" data-testid="IndexPage">
        <SearchBar />
        <Cards />
      </main>
    </>
  );
}

export default IndexPage;
