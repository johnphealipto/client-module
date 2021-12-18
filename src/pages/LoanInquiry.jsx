import React from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import { NavLink } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import dp from '../assets/img/display-pics.jpg';
import { BsDownload } from 'react-icons/bs';

const LoanInquiry = () => {
  return (
    <div id="page-wrapper">
      <SideNav />
      <Header />
      <main id="loan-inquiry">
        <h3 className="page-title">
          <NavLink to="/reports">Reports </NavLink>
          / Borrowers Loan Inquiry
        </h3>
        <div className="navigate-btn">
          <button>Borrowers Loan Inquiry</button>
          <NavLink to="/reports"><BsArrowLeft /> Back</NavLink>
        </div>
        <div className="borrower-details">
          <div className="borrower-details_header">
            <h3>View Borrower</h3>
          </div>
          <div className="borrower-details_main">
            <div className="borrower-details_profile">
              <div className="profile-pics">
                <div className="profile-pics_container">
                  <img src={dp} alt="Profile Display" />
                </div>
              </div>
              <div className="profile-details">
                <div className="profile-details_row">
                  <span>Customer Name</span>
                  <span>Lindsey Stroud</span>
                </div>
                <div className="profile-details_row">
                  <span>Loan ID</span>
                  <span>LN0001</span>
                </div>
                <div className="profile-details_row">
                  <span>Loan Amount</span>
                  <span>100,000</span>
                </div>
                <div className="profile-details_row">
                  <span>Date Disbursed</span>
                  <span>20-10-2021</span>
                </div>
              </div>
            </div>
            <h3 className="repayment-history">Repayment history</h3>
            <table>
              <thead>
                <tr>
                  <th>Repayment Amount</th>
                  <th>Loan Repayment Date</th>
                  <th>Loan Principal Repayment</th>
                  <th>Last Interest repayment</th>
                  <th>Overdue Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NGN700,000</td>
                  <td>14-10-2021</td>
                  <td>NGN100,000</td>
                  <td>NGN1,000</td>
                  <td>NGN5,000</td>
                </tr>
                <tr>
                  <td>NGN700,000</td>
                  <td>14-10-2021</td>
                  <td>NGN100,000</td>
                  <td>NGN1,000</td>
                  <td>NGN5,000</td>
                </tr>
                <tr>
                  <td>NGN700,000</td>
                  <td>14-10-2021</td>
                  <td>NGN100,000</td>
                  <td>NGN1,000</td>
                  <td>NGN5,000</td>
                </tr>
                <tr>
                  <td>NGN700,000</td>
                  <td>14-10-2021</td>
                  <td>NGN100,000</td>
                  <td>NGN1,000</td>
                  <td>NGN5,000</td>
                </tr>
                <tr>
                  <td>NGN700,000</td>
                  <td>14-10-2021</td>
                  <td>NGN100,000</td>
                  <td>NGN1,000</td>
                  <td>NGN5,000</td>
                </tr>
                <tr>
                  <td>NGN700,000</td>
                  <td>14-10-2021</td>
                  <td>NGN100,000</td>
                  <td>NGN1,000</td>
                  <td>NGN5,000</td>
                </tr>
              </tbody>
            </table>
            <div className="download-btn">
              <button><span>Download</span><BsDownload /></button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LoanInquiry;