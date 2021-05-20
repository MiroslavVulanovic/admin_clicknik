import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './components/Dashboard'
import ProductsList from './components/ProductsList.js'
import NewProduct from './components/NewProduct'
import RecipesList from './components/RecipesList'
import NewRecipe from './components/NewRecipe'
import TeachingsList from './components/TeachingsList'
import NewTeaching from './components/NewTeaching'
import EventsList from './components/EventsList'
import NewEvent from './components/NewEvent'
import Profile from './components/Profile'
import Settings from './components/Settings'

const App = () => {
  return (
    <Router>
      <div className='flex'>
        <Sidebar />

        <div className='flex flex-col w-10/12'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <ProtectedRoute exact path='/app' component={Dashboard} />
            <ProtectedRoute
              exact
              path='/products/list'
              component={ProductsList}
            />
            <ProtectedRoute
              exact
              path='/products/addnew'
              component={NewProduct}
            />
            <ProtectedRoute
              exact
              path='/receips/list'
              component={RecipesList}
            />
            <ProtectedRoute
              exact
              path='/receips/addnew'
              component={NewRecipe}
            />
            <ProtectedRoute
              exact
              path='/teachings/list'
              component={TeachingsList}
            />
            <ProtectedRoute
              exact
              path='/teachings/addnew'
              component={NewTeaching}
            />
            <ProtectedRoute exact path='/events/list' component={EventsList} />
            <ProtectedRoute exact path='/events/addnew' component={NewEvent} />
            <ProtectedRoute exact path='/profile' component={Profile} />
            <ProtectedRoute exact path='/settings' component={Settings} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
