import React, { Component } from 'react';
import { ICard } from '../types/types';

class Card extends Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="card" data-testid={`card${this.props.id}`}>
          <div className="card-char">
            <div className="char-img" style={{ backgroundImage: `url(${this.props.image})` }}></div>
            <p className="char-name">{this.props.name}</p>
          </div>
          <ul className="char-info">
            <li className="info-label">
              species:
              <span className="info-text">{this.props.species}</span>
            </li>
            <li className="info-label">
              status:
              <span className="info-text">{this.props.status}</span>
            </li>
            <li className="info-label">
              gender:
              <span className="info-text">{this.props.gender}</span>
            </li>
            <li className="info-label">
              origin:
              <span className="info-text">{this.props.origin.name}</span>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
export default Card;
