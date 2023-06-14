import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-ignore */
import loader from '../assets/loader.gif';

export default function Loader() {
  return (
    <div className="loader">
      <img src={loader} alt="Loading..." className="loader-img" />
      <p>loading...</p>
    </div>
  );
}
