import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../redux/store';
import { ICard } from '../../types/types';
import Loader from '../Loader';

export default function CardFull() {
  const id = useSelector((state: State) => state.myApp.modalCard);
  const currPage = useSelector((state: State) => state.myApp.currPage);
  const fetchCards: ICard[] = useSelector((state: State) => state.myApp.results);
  const myCards = useSelector((state: State) => state.form.myCards);

  const theCard = (): ICard => {
    if (currPage === 'Main Page') {
      return fetchCards.filter((card: ICard) => card.id === id)[0];
    } else if (currPage === 'Form Page') {
      return myCards[id - 1];
    } else {
      return {};
    }
  };

  return (
    <div className="card-full">
      {theCard() ? (
        <>
          <img src={theCard().image} alt="photo" className="card-full-photo" />
          <p>Name: {theCard().name}</p>
          <p>Created: {theCard().created}</p>
          <p>Gender: {theCard().gender}</p>
          <p>Species: {theCard().species}</p>
          <p>Status: {theCard().status}</p>
          {theCard().origin?.name && <p>Origin: {theCard().origin?.name} </p>}
          {theCard().location?.name && <p>Location: {theCard().location?.name} </p>}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
