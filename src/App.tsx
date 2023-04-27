import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/style.css';
import IndexPage from './pages/IndexPage';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import { Page } from './components/Page';
import { FormPage } from './pages/FormPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page />}>
              <Route index element={<IndexPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="form" element={<FormPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
