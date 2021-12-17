import React from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';

const Reports = () => {
  return (
    <div id="page-wrapper">
      <SideNav />
      <Header />
      <main id="reports">
        <h3 className="page-title">Reports</h3>
        <div className="nav-tab"></div>
      </main>
    </div>
  )
}

export default Reports;