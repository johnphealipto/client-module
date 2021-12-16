import React from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import { MdOutlineExitToApp } from 'react-icons/md';
import { BsArrowUpRight, BsArrowDownRight, BsHandbag } from 'react-icons/bs';
import { AiOutlineBook } from 'react-icons/ai';
import Charts from '../components/Charts';

const Dashboard = () => {

  const analysis = [
    {
      iconPri: <BsHandbag size={25} />,
      iconSec: <BsArrowUpRight size={12} />,
      trendPercent: "+10.24%",
      trendColor: "green",
      details: "Total Loans Granted",
      number: "102",
    },
    {
      iconPri: <AiOutlineBook size={25} />,
      iconSec: <BsArrowUpRight size={12} />,
      trendPercent: "+10.24%",
      trendColor: "green",
      details: "Total Sum Granted",
      number: "$9,205,464.02",
    },
    {
      iconPri: <MdOutlineExitToApp size={25} />,
      iconSec: <BsArrowDownRight size={12} />,
      trendPercent: "+10.24%",
      trendColor: "orange",
      details: "Total Loans Rejected",
      number: "30",
    }
  ]

  return (
    <div id="page-wrapper">
      <SideNav />
      <Header />
      <main id="dashboard">
        <h3 className="page-title">Dashboard</h3>

        <div className="dashboard-content">
          <div className="analysis-cards">
            {analysis.map((item, index) => 
              <div key={index} className="analysis-card">
                <div className="card-icon">
                  <div className="card-icon_pri">
                    {item.iconPri}
                  </div>
                  <div className={`card-icon_sec ${item.trendColor}`}>
                    <span>{item.iconSec}</span>
                    <span>{item.trendPercent}</span>
                  </div>
                </div>
                <h3>{item.details}</h3>
                <h2>{item.number}</h2>
              </div>
            )}
          </div>
          <Charts />
        </div>
      </main>
    </div>
  )
}

export default Dashboard;