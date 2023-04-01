import React from 'react';
import { ICard } from '../types/types';

export function Card(props: ICard) {
  const {
    id = '',
    image = '',
    name = '',
    species = '',
    status = '',
    gender = '',
    created = '',
  } = props;
  const createdDate = {
    day:
      new Date(created).getDate() < 10
        ? '0' + new Date(created).getDate()
        : new Date(created).getDate(),
    month:
      new Date(created).getMonth() + 1 < 10
        ? '0' + (+new Date(created).getMonth() + 1)
        : +new Date(created).getMonth() + 1,
    year: new Date(created).getFullYear(),
  };
  const date = `${createdDate.year}/${createdDate.month}/${createdDate.day}`;

  return (
    <>
      <div className="card" data-testid={`card${id}`}>
        <div className="card-char">
          <div className="char-img" style={{ backgroundImage: `url(${image})` }}></div>
          <p className="char-name">{name}</p>
        </div>
        <ul className="char-info">
          <li className="info-label">
            species:
            <span className="info-text">{species}</span>
          </li>
          <li className="info-label">
            status:
            <span className="info-text">{status}</span>
          </li>
          <li className="info-label">
            gender:
            <span className="info-text">{gender}</span>
          </li>
          <li className="info-label">
            created:
            <span className="info-text">{date}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
