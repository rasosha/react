import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export function Page() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
