import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/style.css';
import IndexPage from './pages/IndexPage';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import PageStructure from './components/Page';
import FormPage from './pages/FormPage';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageStructure />}>
              <Route index element={<IndexPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="form" element={<FormPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
