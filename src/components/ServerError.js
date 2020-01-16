import React from 'react';
import Sidebar from './Sidebar';
import '../App.css';

function ServerError() {

  return (
    <>
      <div className="App">
        <h1>Uh Oh!! Oh Noes!!</h1>
      </div>
      <div className="content">
        <h3>Whoops! <code>{/*location.pathname*/} is not on this server!</code></h3>
        Placeholder for site search functionality. <code>SEARCH</code>
      </div>
      <div className="sidebar">
          Right content. Add your images or sidebar text to this side.
          <Sidebar />
      </div>
    </>
  );
}

export default ServerError;