/* eslint-disable @typescript-eslint/ban-types */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component<{}, { currPage: string }> {
  constructor(props: { currPage: string }) {
    super(props);
    this.state = { currPage: this.getCurrPage() };
    this.updatePagePath = this.updatePagePath.bind(this);
  }

  getCurrPage() {
    const path = window.location.pathname.slice(1);
    switch (path) {
      case '':
        return 'Main Page';
      case 'about':
        return 'About Page';
      case 'form':
        return 'Form Page';
      default:
        return '404 Page';
    }
  }

  updatePagePath() {
    this.setState({ ...this.state, currPage: this.getCurrPage() });
  }

  render(): React.ReactNode {
    return (
      <header className="header">
        <div className="links">
          <NavLink to="/" className="link" onClick={this.updatePagePath}>
            Main Page
          </NavLink>
          <NavLink to="/about" className="link" onClick={this.updatePagePath}>
            About Us
          </NavLink>
          <NavLink to="/form" className="link" onClick={this.updatePagePath}>
            Form
          </NavLink>
        </div>
        <div className="link">this is {this.getCurrPage()}</div>
      </header>
    );
  }
}

export default Header;
