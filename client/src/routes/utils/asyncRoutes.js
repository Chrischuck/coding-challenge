import React from 'react'
import { Redirect } from "react-router-dom";

import { injectAsyncReducer } from '../../redux/store'
import { store } from '../../redux'

import Bundle from './bundle'

import loadHome from '../home/index.bundle.js'
import loadNotFound from '../notFound/index.bundle.js'
import loadLogin from '../login/index.bundle.js'
import loadDashboard from '../dashboard/index.bundle.js'

import homeReducer from '../home/reducer'
import dashboardReducer from '../dashboard/reducer'

export const Home = (props) => {
  injectAsyncReducer(store, 'home', homeReducer)
  return (
    <Bundle load={loadHome}>
      {(Component) => <Component {...props} />}
    </Bundle>
  )
}

export const Login = (props) => {
  return (
    <Bundle load={loadLogin}>
      {(Component) => <Component {...props} />}
    </Bundle>
  )
}

export const Dashboard = (props) => {
  injectAsyncReducer(store, 'dashboard', dashboardReducer)
  return (
    <Bundle load={loadDashboard}>
      {(Component) => <Component {...props} />}
    </Bundle>
  )
}

export const NotFound = (props) => (
  <Bundle load={loadNotFound}>
    {(Component) => <Component {...props} />}
  </Bundle>
)

