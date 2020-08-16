import React from 'react';
import Navbar from './Navbar';
import Spacer from './Spacer';
import Listings from '../containers/Listings';

export default function Dashboard() {
  return (
    <div className="page">
      <Navbar />
      <Spacer />
      <Listings />
    </div>
  );
}
