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

export const updateOption = () => {
  return async function(dispatch) {
    try {

    } catch (err) {
      
    }
  }
}

export const createOption = ({ name, price, table }) => {
  return async function(dispatch) {
    try {

      const data = await fetch(
        'http://localhost:3000/options/new',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            price,
            table
          })
        }
      )
      .then(res => res.json())
      .catch(err => {
        dispatch(deleteOptionsFailure(err))
      })

    } catch (err) {
      
    }
  }
}

export const deleteOption = ({ value, table }) => {
  return async function(dispatch) {
    try {    
      dispatch(deleteOptionsPending())

      const data = await fetch(
        'http://localhost:3000/options',
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            value,
            table
          })
        }
      )
      .then(res => res.json())
      .catch(err => {
        dispatch(deleteOptionsFailure(err))
      })

      dispatch(getOptionsSuccess({ [data.table]: data.data }))
    } catch (err) {
      dispatch(deleteOptionsFailure(err))
    }
  }
}

export const getOptionsPending = () => ({ type: 'GET_DASH_PENDING' })
export const getOptionsSuccess = (payload) => ({ type: 'GET_DASH_SUCCESS', payload })
export const getOptionsFailure = (error) => ({ type: 'GET_DASH_FAILURE', payload: { error } })

export const deleteOptionsPending = () => ({ type: 'DELETE_DASH_PENDING' })
export const deleteOptionsSuccess = (payload) => ({ type: 'DELETE_DASH_SUCCESS', payload })
export const deleteOptionsFailure = (error) => ({ type: 'DELETE_DASH_FAILURE', payload: { error } })