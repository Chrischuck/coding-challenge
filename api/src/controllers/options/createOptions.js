import pool from '../../db'
import Promise from 'bluebird'

const createOptions = async (req, res) => {
  const { name, price, table } = req.body

  const value = name.toUpperCase().split(' ').join('_')

  const data = await pool.getConnectionAsync()
  .then(async (connection) => {  
    Promise.promisifyAll(connection)
    
    // Upsert the data
    
    // treating VALUE as unique key
    const del = await connection.queryAsync(`DELETE FROM ${table} where value= "${value}";`)
      .then(res => res)
      .catch(err => {
        throw err
      })

    const values = `VALUES ('${name}', '${value}', ${price});`
    const  insert = await connection.queryAsync('INSERT INTO `' + table + '` (`name`, `value`, `price`) ' + values)
      .then(res => res)
      .catch(err => {
        throw err
      })

    // Ideally should just return the value we created and push item to reducer
    const d = await connection.queryAsync('SELECT * FROM `' + table + '`;')
      .then(res => res)
      .catch(err => {
        throw err
      })
    
    connection.release();

    return d
  }) 
  .catch(err => {
    throw err
  })

  res.status(200).send(JSON.stringify({ table, data }))
}

export default createOptions