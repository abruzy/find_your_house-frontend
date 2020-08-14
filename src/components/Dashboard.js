import React from 'react';
import Navbar from './Navbar';
import Spacer from './Spacer';
import Listing from '../containers/Listing';

export default function Dashboard() {
  return (
    <div className="page">
      <Navbar />
      <Spacer />
      <Listing />
    </div>
  );
}
