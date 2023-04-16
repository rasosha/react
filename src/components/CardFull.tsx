import React, { useState } from 'react';
import { ICard } from '../types/types';
import Loader from './Loader';

export default function CardFull(props: { id: number }) {
  const [cardData, setCardData] = useState<ICard>();

  React.useEffect(() => {
    const API = `https://rickandmortyapi.com/api/character/`;
    fetch(`${API}/${props.id}`)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch this');
        } else {
          return res.json();
        }
      })
      .then((data: ICard) => {
        setCardData(data);
      });
  }, [props.id]);

  return (
    <div className="card-full">
      {cardData ? (
        <>
          <img src={cardData.image} alt="photo" className="card-full-photo" />
          <p>Name: {cardData.name}</p>
          <p>
            Created:{' '}
            {cardData.created ? new Date(cardData.created).toLocaleDateString('ru-RU') : ''}
          </p>
          <p>Gender: {cardData.gender}</p>
          <p>Species: {cardData.species}</p>
          <p>Status: {cardData.status}</p>
          <p>Origin: {cardData.origin?.name}</p>
          <p>Location: {cardData.location?.name}</p>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
