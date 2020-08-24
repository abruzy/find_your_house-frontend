/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Spacer from './Spacer';

import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-top-section">
        <Navbar />
        <Spacer />
        <h1>Find housing anywhere</h1>
        <h4>The best offers for you at any point of your journey. Wherever you are, feel yourself like at your home.</h4>
        <Link to="/signup" className="start-free">Start free</Link>
      </div>
      <div className="home-main-section">
        <p className="simple">Simple and fast way to rent</p>
        <h2>Comfortable home from reliable people</h2>
        <div className="home-main-section-colored">
          <div className="left-content">
            <h2 className="stats">
              All stats at your fingertips
              <br />
              {' '}
              at any time
            </h2>
            <p className="info">You will have the best tools to manage and collect information about the houses. Full controll will save you from any unforseen situations and save you money and customer relationships.</p>
            <Link to="/signup" className="start-free">Start free</Link>
          </div>
          <img src="/bookstore-app.png" alt="..." className="img-brand" />
        </div>
      </div>
      <div className="everywhere">
        <h3>Be everywhere at home</h3>
        <Link to="/signup" className="start-free">Start free</Link>
      </div>
      <footer>
        <h2 className="footer-logo">Find House</h2>
        <div className="footer-text">
          Developed by
          {' '}
          <a href="https://github.com/abruzy" className="footer-link">Abubakar Diallo</a>
        </div>
      </footer>
    </div>
  );
}
