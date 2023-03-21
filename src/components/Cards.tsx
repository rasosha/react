import React, { Component } from 'react';
import Card from './Card';
import { ICard, ICards } from '../types/types';

class Cards extends Component<never, ICards> {
  constructor(props: never) {
    super(props);
    this.state = {
      cards: [],
      page: 1,
      api: `https://rickandmortyapi.com/api/character/?page=`,
    };
  }

  componentDidMount() {
    fetch(this.state.api + this.state.page)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          cards: data.results,
        });
      });
  }

  render() {
    return (
      <div className="cards">
        {this.state.cards.map((item: ICard) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

export default Cards;
