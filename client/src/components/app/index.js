import React from 'react'
import './index.css'
import Navigation from '../navigation'
import Home from '../home'
import Users from '../users'
import Products from '../products'
import Notfound from '../404'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

const routing = (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/products" component={Products} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

function App() {
  return routing
}

export default App
