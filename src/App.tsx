import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AppLayout from './components/AppLayout';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        {/* <Route path="*" component={() => '404 NOT FOUND'} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
