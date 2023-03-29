import React from 'react';
import Cards from '../components/Cards';
import SearchBar from '../components/SearchBar';

export function IndexPage() {
  document.title = `Main Page`;
  const cardsIds = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21';
  const api = `https://rickandmortyapi.com/api/character/${cardsIds}`;
  const [cards, setCards] = React.useState({ cards: [] });

  (() => {
    if (cards.cards.length === 0) {
      fetch(api)
        .then((res) => res.json())
        .then((data) => {
          setCards({
            cards: data,
          });
        });
    }
  })();

  return (
    <>
      <main className="main" data-testid="IndexPage">
        <SearchBar />
        <Cards {...cards} />
      </main>
    </>
  );
}

export default IndexPage;
