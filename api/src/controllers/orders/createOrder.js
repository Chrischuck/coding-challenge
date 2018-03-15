import pool from '../../db'
import Promise from 'bluebird'

const createOrder = async (req, res) => {
  const { size, toppings } = req.body
  
  await pool.getConnectionAsync()
    .then(async (connection) => {  
      Promise.promisifyAll(connection)
      
      const values = `VALUES ('${size}', '"${toppings}"');`
      const order = await connection.queryAsync('INSERT INTO `orders` (`size`, `toppings`) ' + values)
        .then(res => res)
        .catch(err => {
          throw err
        })
      
      connection.release();
    })
    .catch(err => {
      throw err
    })
  res.status(200).send('Order Complete')
}

export default createOrder