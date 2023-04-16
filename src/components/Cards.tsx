import React from 'react';
import { Card } from './CardSmall';
import { ICard } from '../types/types';

function Cards(props: { cards: ICard[]; setModal: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <div className="cards" data-testid="cards">
      {props.cards ? (
        props.cards.map((item: ICard) => (
          <Card key={item.id} setModal={props.setModal} cards={item} />
        ))
      ) : (
        <div />
      )}
    </div>
  );
}

export default Cards;
