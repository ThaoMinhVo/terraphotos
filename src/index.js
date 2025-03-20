import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import Nav from './components/nav';
import HomeHero from './sections/homeHero';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <HomeHero />
  </React.StrictMode>
);

reportWebVitals();
