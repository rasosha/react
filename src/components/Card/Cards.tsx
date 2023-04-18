import React from 'react';
import { Card } from './CardSmall';
import { ICard } from '../../types/types';
import { useSelector } from 'react-redux';
import { State } from '../../redux/store';

function Cards() {
  const { currPage, results } = useSelector((state: State) => state.myApp);
  const myCards = useSelector((state: State) => state.form.myCards);

  const cards = () => {
    if (currPage === 'Main Page') {
      return results;
    } else if (currPage === 'Form Page') {
      return myCards;
    } else {
      return [];
    }
  };

  return (
    <div className="cards" data-testid="cards">
      {cards() ? cards().map((item: ICard) => <Card key={item.id} cards={item} />) : <div />}
    </div>
  );
}

export default Cards;
