import React from 'react';
import { ICard } from '../types/types';
import CardFull from './CardFull';

export default function CardModal(props: {
  id: number;
  setModal: React.Dispatch<React.SetStateAction<number>>;
  cards?: ICard[];
}) {
  return (
    <div
      className="card-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          props.setModal(0);
        } else {
        }
      }}
    >
      <div className="card-div">
        <CardFull id={props.id} cards={props.cards} />
        <button onClick={() => props.setModal(0)} className="close-btn">
          &#x2716;
        </button>
      </div>
    </div>
  );
}
