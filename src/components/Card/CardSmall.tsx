import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalCard } from '../../redux/appReducer';
import { ICard } from '../../types/types';

export function Card(props: { cards: ICard }) {
  const { id = 0, image = '', name = '' } = props.cards;
  const dispatch = useDispatch();

  return (
    <>
      <div className="card" data-testid={`card${id}`}>
        <div
          className="card-char"
          onClick={() => {
            dispatch(setModalCard(id));
          }}
        >
          <div className="char-img" style={{ backgroundImage: `url(${image})` }}></div>
          <p className="char-name">{name}</p>
        </div>
      </div>
    </>
  );
}
