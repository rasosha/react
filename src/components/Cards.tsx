/* eslint-disable @typescript-eslint/ban-types */
import React, { Component } from 'react';
import Card from './Card';
import { ICard } from '../types/types';

class Cards extends Component<{ cards?: ICard[] }> {
  constructor(props: { cards: [] }) {
    super(props);
  }

  render() {
    return (
      <div className="cards" data-testid="cards">
        {this.props.cards ? (
          this.props.cards.map((item: ICard) => <Card key={item.id} {...item} />)
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Cards;
