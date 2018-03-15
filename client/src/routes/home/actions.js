export const sendOrder = ({ size, toppings }) => {
  return async function(dispatch) {
    try {
      dispatch(sendOrderPending())

      const data = await fetch(
        'http://localhost:3000/orders',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            size,
            toppings
          })
        }
      )

      dispatch(sendOrderSuccess())
    } catch (err) {
      dispatch(sendOrderFailure(err))
    }
  }
}

export const getOptions = () => {
  return async function(dispatch) {
    try {
      dispatch(getOptionsPending())
  
      const data = await fetch('http://localhost:3000/options')
      .then(res =>  res.json())
      .catch(err => {
        dispatch(getOptionsFailure(err))
      })

        dispatch(getOptionsSuccess(data))
    } catch (err) {
      dispatch(getOptionsFailure(err))
    }
  }
}


export const reorder = () => ({ type: 'REORDER' })

export const getOptionsPending = () => ({ type: 'GET_OPTIONS_PENDING' })
export const getOptionsSuccess = (payload) => ({ type: 'GET_OPTIONS_SUCCESS', payload })
export const getOptionsFailure = (error) => ({ type: 'GET_OPTIONS_FAILURE', payload: { error } })

export const sendOrderPending = () => ({ type: 'SEND_ORDER_PENDING' })
export const sendOrderSuccess = () => ({ type: 'SEND_ORDER_SUCCESS' })
export const sendOrderFailure = (error) => ({ type: 'SEND_ORDER_FAILURE', payload: { error } })