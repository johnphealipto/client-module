import React from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';

const Dashboard = () => {
  return (
    <div id="page-wrapper">
      <SideNav />
      <Header />
      <main>
        Main
      </main>
    </div>
  )
}

export default Dashboard;