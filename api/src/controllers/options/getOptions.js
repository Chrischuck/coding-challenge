import pool from '../../db'
import Promise from 'bluebird'

const getOptions = async (req, res) => {

  let toppings, sizes

  await pool.getConnectionAsync()
    .then(async (connection) => {  
      Promise.promisifyAll(connection)
      
      const toppingsValues = await connection.queryAsync('SELECT * FROM `toppings`;')
        .then(res => res)
        .catch(err => {
          throw err
        })
      
      const sizesValues = await connection.queryAsync('SELECT * FROM `sizes`;')
        .then(res => res)
        .catch(err => {
          throw err
        })
      
      toppings = toppingsValues
      sizes = sizesValues
      connection.release();
    })
    .catch(err => {
      throw err
    })

  res.status(200).send({ toppings, sizes })

}

export default getOptions