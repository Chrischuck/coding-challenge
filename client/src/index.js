import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './routes'
import { store } from './redux'

ReactDOM.render(
  <Provider store={ store }>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);

