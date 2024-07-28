import React, { } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './App.css'
const Nav = () => {
 
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div className={`nav-wrapper ${isHomePage ? 'invisible' : ''}`}>
      <div className='flex'>
        <div className='head'>
          <h2>Job Hunt</h2>
        </div>

        <div className='list'>
          <Link to='/about'><span>About Us</span></Link>
          <Link to='/Login'><span>Login</span></Link>
        
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Nav;
