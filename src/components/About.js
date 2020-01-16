import React from 'react';
import Sidebar from './Sidebar';
import '../App.css';

function About() {
  return (
    <>
      <div className="App">
        <h1>About Page</h1>
      </div>
      <div className="content">
        Some About Text Goes here.
      </div>
      <div className="sidebar">
          Right content. Add your images or sidebar text to this side.
          <Sidebar />
      </div>
    </>
  );
}

export default About;