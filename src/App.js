import React from 'react';
import Navbar from './Navbar'
import Home from './Home'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
            <div className="App">
            <Navbar/>
              <Route path="/" exact component={Home} />
              
            </div>
      
      </Router>
  );
}


export default App;
