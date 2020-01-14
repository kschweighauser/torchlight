import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Events from './components/Events';
import AddEvent from './components/AddEvent';
import PostEvent from './components/PostEvent';
import Footer from './components/Footer';
import Terms from './components/Terms';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/events/addevent" exact component={AddEvent} />
        <Route path="/events/postevent" component={PostEvent} />
        <Route path="/terms" component={Terms} />
      </Switch>
      <Footer />
    </div>
    </Router>

  );
}

const Home = () => (
  <div className="App">
    <h1>Home Page</h1>
  </div>
);


export default App;
