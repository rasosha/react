import React, { Component } from 'react';

class SearchBar extends Component<{}, { inputText: string }> {
  constructor(props: { inputText: string }) {
    super(props);
    this.state = { inputText: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: { target: { value: string } }) {
    this.setState({ inputText: event.target.value });
  }

  componentDidMount(): void {
    const inputText = localStorage.inputText || '';
    this.setState({ inputText });
  }

  componentWillUnmount(): void {
    localStorage.inputText = this.state.inputText;
  }

  render() {
    return (
      <div className="searchbar-div">
        <input
          type="text"
          className="searchbar-input"
          placeholder="Search..."
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <button className="searchbar-btn">🔍</button>
      </div>
    );
  }
}

export default SearchBar;
