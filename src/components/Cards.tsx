import React from 'react';
import Card from './Card';
import { ICard } from '../types/types';

const randomNumbers = new Array(20).fill(1).map(() => Math.floor(Math.random() * 825));
// const randomNumbers = new Array(20).fill(0).map((val, i) => i + 1);
const url = `https://rickandmortyapi.com/api/character/${randomNumbers}`;
const cardsArr: [] = await fetch(url)
  .then((res) => res.json())
  .then((res) => res);

function Cards() {
  return (
    <div className="cards">
      {cardsArr
        .sort((a: ICard, b: ICard) => a.id - b.id)
        .map((item: ICard) => (
          <Card key={item.id} {...item} />
        ))}
    </div>
  );
}

export default Cards;
