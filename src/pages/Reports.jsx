import React, { useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import SideNav from '../components/SideNav';
import OverdueLoans from '../components/Reports/OverdueLoans';
import Borrowers from '../components/Reports/Borrowers';
import Repayments from "../components/Reports/Repayments"

const Reports = () => {

  const [activeTab, setActiveTab] = useState(1)

  return (
    <div id="page-wrapper">
      <SideNav />
      <Header />
      <main id="reports">
        <h3 className="page-title">Reports</h3>
        <ul className="nav-tabs">
          <li className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>Overdue Loans</li>
          <li className={activeTab === 2 ? "active" : ""} onClick={() => setActiveTab(2)}>Borrowers</li>
          <li className={activeTab === 3 ? "active" : ""} onClick={() => setActiveTab(3)}>Repayments</li>
        </ul>
        <Search />
        <div className="tab-panel">
          {activeTab === 1 && (
            <OverdueLoans />
          )}
          {activeTab === 2 && (
            <Borrowers />
          )}
          {activeTab === 3 && (
            <Repayments />
          )}
        </div>
      </main>
    </div>
  )
}

export default Reports;