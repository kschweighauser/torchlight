import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Events from './components/Events'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
