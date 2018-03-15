export const login = ({ username, password }) => {
  return async function(dispatch) {
    try {
      dispatch(loginPending())
      const data = await fetch(
        'http://localhost:3000/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            password
          })
        }
      )
      .then(res => res.json())
      .catch(err => { 
        dispatch(loginFailure(err))
      })

      dispatch(loginSuccess(data))
    } catch(err) {
      dispatch(loginFailure(err))
    }
  }
} 

export const loginPending = () => ({ type: 'LOGIN_PENDING' })
export const loginSuccess = ({ isAuthenticated, invalid }) => ({ type: 'LOGIN_SUCCESS', payload: { isAuthenticated, invalid} })

export const loginFailure = (error) => ({ type: 'LOGIN_FAILURE', payload: { error } })