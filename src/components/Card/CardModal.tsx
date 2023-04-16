import React from 'react';
import { ICard } from '../../types/types';
import CardFull from './CardFull';

export default function CardModal(props: {
  setModalCard: React.Dispatch<React.SetStateAction<number>>;
  id: number;
  cards?: ICard[];
}) {
  return (
    <div
      className="card-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          props.setModalCard(0);
        } else {
        }
      }}
    >
      <div className="card-div">
        <CardFull id={props.id} cards={props.cards} />
        <button onClick={() => props.setModalCard(0)} className="close-btn">
          &#x2716;
        </button>
      </div>
    </div>
  );
}
