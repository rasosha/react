import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setCurrPage, setModalCard } from '../redux/appReducer';
import { State } from '../redux/store';

export function Header() {
  const currPage = useSelector((state: State) => state.myApp.currPage);
  const dispatch = useDispatch();

  function getPageName() {
    const path = window.location.pathname.slice(1);
    return path === ''
      ? 'Main Page'
      : path === 'about'
      ? 'About Page'
      : path === 'form'
      ? 'Form Page'
      : '404 Page';
  }
  function onClick(page: string) {
    dispatch(setCurrPage(page));
    dispatch(setModalCard(0));
  }

  useEffect(() => {
    dispatch(setCurrPage(getPageName()));
  }, [dispatch]);

  return (
    <header className="header" data-testid="header">
      <div className="links">
        <NavLink to="/" className="link" onClick={() => onClick('Main Page')}>
          Main Page
        </NavLink>
        <NavLink to="/about" className="link" onClick={() => onClick('About Page')}>
          About Us
        </NavLink>
        <NavLink to="/form" className="link" onClick={() => onClick('Form Page')}>
          Form
        </NavLink>
      </div>
      <div className="link">this is {currPage}</div>
    </header>
  );
}
