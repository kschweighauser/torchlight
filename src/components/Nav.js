import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import logo from '../logo.svg';

function Nav() {
  return (
    <div className="nav">
      <ul className="nav-links">
        <Link to="/">
          <li><img src={logo} className="nav-logo" alt="logo" /></li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/events">
          <li>Events</li>
        </Link>
        <ul>
        <Link to="/events/addevent">
          <li>Add Event</li>
        </Link>
        <Link to="/events/postevent">
          <li>Post Event To Twitter</li>
        </Link>
        </ul>
      </ul>
    </div>
  );
}

export default Nav;