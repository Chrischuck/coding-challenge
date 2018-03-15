import React from 'react'

import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, auth }) => (
  <Route
    render={ props => 
      auth.isAuthenticated ? 
        <Component {...props} /> : 
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
    }
  />
)

export const GuestRoute = ({ component: Component, auth }) => (
  <Route
    render={ props =>
      !auth.isAuthenticated ? 
        <Component {...props} /> : 
        <Redirect to={{ pathname: "/dashboard", state: { from: props.location } }} />
    }
  />
)