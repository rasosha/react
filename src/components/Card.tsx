import React from 'react';
import { ICard } from '../types/types';

function Card(props: ICard) {
  return (
    <>
      <div className="card">
        <div className="card-char">
          <div className="char-img" style={{ backgroundImage: `url(${props.image})` }}></div>
          <p className="char-name">{props.name}</p>
        </div>
        <ul className="char-info">
          <li className="info-label">
            species:
            <span className="info-text">{props.species}</span>
          </li>
          <li className="info-label">
            status:
            <span className="info-text">{props.status}</span>
          </li>
          <li className="info-label">
            gender:
            <span className="info-text">{props.gender}</span>
          </li>
          <li className="info-label">
            origin:
            <span className="info-text">{props.origin.name}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Card;
