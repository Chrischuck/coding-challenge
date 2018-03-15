export const login = ({ username, password }) => {
  return async function(dispatch) {
    // do stufff
  }
} 

export const loginPending = () => ({ type: 'SEND_ORDER_PENDING' })
export const loginSuccess = () => ({ type: 'SEND_ORDER_SUCCESS' })
export const loginFailure = (error) => ({ type: 'SEND_ORDER_FAILURE', payload: { error } })