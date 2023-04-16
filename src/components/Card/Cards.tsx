import React from 'react';
import { Card } from './CardSmall';
import { ICard } from '../../types/types';

function Cards(props: {
  cards: ICard[];
  setModalCard: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="cards" data-testid="cards">
      {props.cards ? (
        props.cards.map((item: ICard) => (
          <Card key={item.id} setModalCard={props.setModalCard} cards={item} />
        ))
      ) : (
        <div />
      )}
    </div>
  );
}

export default Cards;
