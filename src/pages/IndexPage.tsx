import React from 'react';
import Cards from '../components/Cards';
import SearchBar from '../components/SearchBar';

export class IndexPage extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = {
      cards: [],
    };
  }
  componentDidMount() {
    const api =
      'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,,17,18,20,21';
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          cards: data,
        });
      });
  }
  render() {
    return (
      <>
        <main className="main" data-testid="IndexPage">
          <SearchBar />
          <Cards {...this.state} />
        </main>
      </>
    );
  }
}

export default IndexPage;
