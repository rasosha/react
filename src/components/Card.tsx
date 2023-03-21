import React, { Component } from 'react';
import { ICard } from '../types/types';

class Card extends Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }
  render() {
    const {
      id,
      image,
      name,
      species,
      status,
      gender,
      origin: { name: originName },
    } = this.props;

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
              origin:
              <span className="info-text">{originName}</span>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
export default Card;
