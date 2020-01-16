import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Events from './components/Events';
import AddEvent from './components/AddEvent';
import PostEvent from './components/PostEvent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Terms from './components/Terms';
import ServerError from './components/ServerError';

function App() {
  return (
    <>
      <div>
        <Router>
          <Nav />
          <Header />
            <div>
              <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/events/addevent" component={AddEvent} />
                  <Route path="/events/postevent" component={PostEvent} />
                  <Route path="/events" component={Events} />
                  <Route path="/terms" component={Terms} />
                  <Route component={ServerError} />
              </Switch>
            </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

const Home = () => (
  <div className="App">
    <h1>Home Page</h1>
      <div className="content">
          {/*<AddEvent />*/}
      </div>
      <div className="sidebar">
          Right content. Add your images or sidebar text to this side.
          <Sidebar />
      </div>
    <div class="clear-floated"></div>
  </div>
);


export default App;