import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Spacer from './Spacer';

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
        <p>Simple and fast way to rent</p>
        <h2>Comfortable home from reliable people</h2>
        <img src="/snowboard.jpeg" alt="snowboarders" className="home-main-section-img" />
        <div className="home-main-section-colored">
          <p>All stats at your fingertips at any time</p>
          <Link to="/signup" className="start-free">Start free</Link>
        </div>
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
