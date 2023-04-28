import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/style.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { routes } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <Provider store={store}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </Provider>
  </>
);
