import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineDashboard, MdDateRange, MdLogout } from 'react-icons/md';
import { BsToggles2 } from 'react-icons/bs';

const SideNav = () => {
  return (
    <div id="side-nav">
      <div className="logo-area">
        <h2>LMS</h2>
      </div>

      <div className="user-details">
        <div className="user_avatar">
          <h2>PB</h2>
        </div>
        <div className="user-name_role">
          <p>Paul Bartowski</p>
          <p>Admin User</p>
        </div>
      </div>

      <nav>
        <NavLink to="/" className="nav-link" activeclassname="active">
          <MdOutlineDashboard size={25} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/reports" className="nav-link" activeclassname="active">
          <MdDateRange size={25} />
          <span>Reports</span>
        </NavLink>
      </nav>

      <div className="nav-sub_area">
        <button className="logout-btn">
          <MdLogout size={25} />
          <span>Logout</span>
        </button>
        <button className="toggle-btn">
          <BsToggles2 size={25} />
          <span>Toggle sidebar</span>
        </button>
      </div>
    </div>
  )
}

export default SideNav;