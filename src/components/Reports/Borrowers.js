import React from 'react';
import { NavLink } from 'react-router-dom';

const Borrowers = () => {
  return (
    <div>
      <div>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Loan ID</th>
            <th>Loan Amount</th>
            <th>Loan Disbursement Date</th>
            <th>Customer Phone No.</th>
            <th>Address</th>
            <th>Date of Birth</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lindsey&nbsp;Stroud</td>
            <td>LN0001</td>
            <td>600,000</td>
            <td>14-10-2021</td>
            <td>14-10-2021</td>
            <td>No. 5 Alebiowu Street..</td>
            <td>12-06-1983</td>
            <td>OYO</td>
            <td>
              <NavLink to="/" className="table-link">
                View
              </NavLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Borrowers;