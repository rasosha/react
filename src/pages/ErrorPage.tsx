import React from 'react';

function ErrorPage() {
  document.title = `404 Page`;
  return (
    <>
      <main className="main">
        <h2> Sorry, page not found</h2>
      </main>
    </>
  );
}

export default ErrorPage;
