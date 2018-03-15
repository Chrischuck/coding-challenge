import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom'

import * as actions from '../../redux/actions/auth'

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: '50%',
    flexDirection: 'column',
  }
}

const mapStateToProps = (state) => ({ auth: state.auth })
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class Login extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      username: '',
      password: ''
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  login = () => {
    const { username, password } = this.state
    this.props.login({ username, password })
  }

  render() {
    if (this.props.auth.isAuthenticated) {
      return <Redirect to='/dashboard' />
    }
    return (
      <div style={style.container}>
        <h1 style={{marginBottom: '10px'}}>
          Login
        </h1>
         {
          this.props.auth.invalid && 
          <span style={{color: 'red', marginBottom:'15px'}}>invalid username or password</span>
         }
        <input
          name='username'
          placeholder='username'
          type='text'
          onChange={this.onChange}
        />
        <input
          name='password'
          placeholder='password'
          type='password'
          autoComplete="new-password"
          onChange={this.onChange}
        />
        <button onClick={this.login} style={{margin: '15px'}}>Login</button>
      </div>
    )
  }
}

export default Login