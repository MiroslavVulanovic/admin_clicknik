import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css';


function App() {
  return (
    <Router>
      <div className="flex flex-row">
        <Sidebar />
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
