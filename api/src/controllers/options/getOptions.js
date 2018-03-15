import Promise from 'bluebird'

import pool from '../../db'

const getOptions = async (req, res) => {

  const [toppings, sizes] = await pool.getConnectionAsync()
  .then(async (connection) => {  
    Promise.promisifyAll(connection)
    
    
    const toppingsValues = connection.queryAsync('SELECT * FROM `toppings`;')
      .then(res => res)
      .catch(err => {
        throw err
      })
    
    const sizesValues = await connection.queryAsync('SELECT * FROM `sizes`;')
      .then(res => res)
      .catch(err => {
        throw err
      })
    
    connection.release();

    return [await toppingsValues, sizesValues]
  })
  .catch(err => {
    throw err
  })

  res.status(200).send(JSON.stringify({ toppings, sizes }))

}

export default getOptions