/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { Card } from './Card';
import { ICard } from '../types/types';

function Cards(props: { cards: ICard[] }) {
  return (
    <div className="cards" data-testid="cards">
      {props.cards ? props.cards.map((item: ICard) => <Card key={item.id} {...item} />) : <div />}
    </div>
  );
}

export default Cards;
