import React from 'react'
import { Link } from 'react-router-dom'

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  height: '50%'
}

const NotFound = () => (
  <div style={style}>
    <h1>
      Nothing Here!
    </h1>
    <Link to='/'>Take me home!</Link>
  </div>
)

export default NotFound