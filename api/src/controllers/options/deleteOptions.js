import pool from '../../db'
import Promise from 'bluebird'

const deleteOptions = async (req, res) => {
  const { value, table } = req.body

  const data = await pool.getConnectionAsync()
  .then(async (connection) => {  
    Promise.promisifyAll(connection)
    
    const del = await connection.queryAsync(`DELETE FROM ${table} where value= "${value}";`)
      .then(res => res)
      .catch(err => {
        throw err
      })

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

  res.status(200).send(JSON.stringify({ data, table }))
}

export default deleteOptions