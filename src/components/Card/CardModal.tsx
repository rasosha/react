import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalCard } from '../../redux/appReducer';
import CardFull from './CardFull';

export default function CardModal() {
  const dispatch = useDispatch();

  return (
    <div
      className="card-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          dispatch(setModalCard(0));
        } else {
        }
      }}
    >
      <div className="card-div">
        <CardFull />
        <button onClick={() => dispatch(setModalCard(0))} className="close-btn">
          &#x2716;
        </button>
      </div>
    </div>
  );
}
