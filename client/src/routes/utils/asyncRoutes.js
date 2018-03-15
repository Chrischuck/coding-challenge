import React from 'react'
import { injectAsyncReducer } from '../../redux/store'
import { store } from '../../redux'

import Bundle from './bundle'

import loadHome from '../home/index.bundle.js'
import loadNotFound from '../notFound/index.bundle.js'
import loadLogin from '../login/index.bundle.js'

import homeReducer from '../home/reducer'

export const Home = (props) => {
  injectAsyncReducer(store, 'home', homeReducer)
  return (
    <Bundle load={loadHome}>
      {(Component) => <Component {...props} />}
    </Bundle>
  )
}

export const Login = (props) => (
  <Bundle load={loadLogin}>
    {(Component) => <Component {...props} />}
  </Bundle>
)

export const NotFound = (props) => (
  <Bundle load={loadNotFound}>
    {(Component) => <Component {...props} />}
  </Bundle>
)