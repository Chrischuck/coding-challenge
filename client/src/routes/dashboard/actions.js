export const getOptions = () => {
  return async function(dispatch) {
    try {
      dispatch(crudOptionsPending())
  
      const data = await fetch('http://localhost:3000/options')
      .then(res => res.json())
      .catch(err => {
        dispatch(crudOptionsFailure(err))
      })

      dispatch(crudOptionsSuccess(data))
    } catch (err) {
      dispatch(crudOptionsFailure(err))
    }
  }
}

export const updateOption = ({ name, price, value, table }) => {
  return async function(dispatch) {
    try {
      dispatch(crudOptionsPending())

      const data = await fetch(
        'http://localhost:3000/options/edit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            price,
            value,
            table
          })
        }
      )
      .then(res => res.json())
      .catch(err => {
        dispatch(crudOptionsFailure(err))
      })
      
      dispatch(crudOptionsSuccess({ [data.table]: data.data }))
    } catch (err) {
      dispatch(crudOptionsFailure(err))
    }
  }
}

export const createOption = ({ name, price, table }) => {
  return async function(dispatch) {
    try {
      dispatch(crudOptionsPending())

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
        dispatch(crudOptionsFailure(err))
      })
      
      dispatch(crudOptionsSuccess({ [data.table]: data.data }))

    } catch (err) {
      dispatch(crudOptionsFailure(err))
    }
  }
}

export const deleteOption = ({ value, table }) => {
  return async function(dispatch) {
    try {    
      dispatch(crudOptionsPending())

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
        dispatch(crudOptionsFailure(err))
      })

      dispatch(crudOptionsSuccess({ [data.table]: data.data }))
    } catch (err) {
      dispatch(crudOptionsFailure(err))
    }
  }
}

export const getOptionsPending = () => ({ type: 'GET_DASH_PENDING' })
export const getOptionsSuccess = (payload) => ({ type: 'GET_DASH_SUCCESS', payload })
export const getOptionsFailure = (error) => ({ type: 'GET_DASH_FAILURE', payload: { error } })

export const crudOptionsPending = () => ({ type: 'CRUD_DASH_PENDING' })
export const crudOptionsSuccess = (payload) => ({ type: 'CRUD_DASH_SUCCESS', payload })
export const crudOptionsFailure = (error) => ({ type: 'CRUD_DASH_FAILURE', payload: { error } })
