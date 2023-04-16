import React from 'react';
import { ICard } from '../../types/types';

export function Card(props: {
  cards: ICard;
  setModalCard: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { id = 0, image = '', name = '' } = props.cards;

  return (
    <>
      <div className="card" data-testid={`card${id}`}>
        <div
          className="card-char"
          onClick={() => {
            props.setModalCard ? props.setModalCard(id) : '';
          }}
        >
          <div className="char-img" style={{ backgroundImage: `url(${image})` }}></div>
          <p className="char-name">{name}</p>
        </div>
      </div>
    </>
  );
}
