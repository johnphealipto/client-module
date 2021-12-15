import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <div id="header">
      <form>
        <BsSearch />
        <input type="text" placeholder="Search" />
      </form>
      <div className="user_avatar">
        <p>pb</p>
      </div>
    </div>
  )
}

export default Header;