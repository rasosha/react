/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
  const [currPage, setCurrPage] = useState('');

  function getPageName() {
    const path = window.location.pathname.slice(1);
    return path === '' ? 'Main Page' : path === 'about' ? 'About Page' : path === 'form' ? 'Form Page' : '404 Page';
  }

  useEffect(() => {
    setCurrPage(getPageName());
  }, [currPage]);

  return (
    <header className="header">
      <div className="links">
        <NavLink to="/" className="link" onClick={() => setCurrPage('Main Page')}>
          Main Page
        </NavLink>
        <NavLink to="/about" className="link" onClick={() => setCurrPage('About Page')}>
          About Us
        </NavLink>
        <NavLink to="/form" className="link" onClick={() => setCurrPage('Form Page')}>
          Form
        </NavLink>
      </div>
      <div className="link">this is {currPage}</div>
    </header>
  );
}
