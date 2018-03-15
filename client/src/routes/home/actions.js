export const sendOrder = ({ size, toppings }) => {
  return async function(dispatch) {
    try {
      dispatch(sendOrderPending())
      console.log(size)
      console.log(toppings)
      const data = await fetch(
        'http://localhost:3000',
        {

        }
      )
      console.log(data)
      //dispatch(sendOrderSuccess())
    } catch (err) {
      dispatch(sendOrderFailure(err))
    }
  }
}

export const reorder = () => ({ type: 'REORDER' })

export const sendOrderPending = () => ({ type: 'SEND_ORDER_PENDING' })
export const sendOrderSuccess = () => ({ type: 'SEND_ORDER_SUCCESS' })
export const sendOrderFailure = (error) => ({ type: 'SEND_ORDER_FAILURE', payload: { error } })