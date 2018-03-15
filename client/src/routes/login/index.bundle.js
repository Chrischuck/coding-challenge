import React from 'react'


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

  render() {
    console.log(this.state)
    return (
      <div style={style.container}>
        <h1>
          Login
        </h1>
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
        <button style={{margin: '15px'}}>Login</button>
      </div>
    )
  }
}

export default Login