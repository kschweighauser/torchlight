import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Footer() {
  return (
    <div>
      <div className="nav">
        <h3>Footer Placeholder</h3>
        <ul className="nav-links">
            <li><a href="https://extanto.com" target="_blank" rel="noopener noreferrer">Extanto Technology</a></li>
            <li><a href="https://twitter.com/extanto" target="_blank" rel="noopener noreferrer">Extanto Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/kyleschweighauser" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.twitter.com/awileymcgee" target="_blank" rel="noopener noreferrer">Personal Twitter</a></li>
            <li><a href="https://www.deovewines.com" target="_blank" rel="noopener noreferrer">Deove Wine Company</a></li>
        </ul>
      </div>
      <div>
          <span>© Extanto Technology, All rights reserved &nbsp;| &nbsp;2020&nbsp;</span>
          <Link to="/terms">View our terms and conditions</Link>
      </div>
    </div>
  );
}

export default Footer;