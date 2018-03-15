import pool from '../../db'
import Promise from 'bluebird'

const editOptions = async (req, res) => {
  const { name, price, value, table } = req.body

  const data = await pool.getConnectionAsync()
  .then(async (connection) => {  
    Promise.promisifyAll(connection)
    
    // delete the old value in case of name change
    // if we had a uuid we would just update
    // but we're using the value (based off of name) so we'll delete it
    // doesn't make sense to have a value of 'MUSHROOMS' when the name is Anchovies.
    const data = await connection.queryAsync(`DELETE FROM ${table} where value= "${value}";`)
      .then(res => res)
      .catch(err => {
        throw err
      })

    const newValue = name.toUpperCase().split(' ').join('_')
    // Upsert the data
    
    // treating VALUE as unique key
    await connection.queryAsync(`DELETE FROM ${table} where value= "${newValue}";`)
    .then(res => res)
    .catch(err => {
      throw err
    })

    const values = `VALUES ('${name}', '${newValue}', ${price || 0});`
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

export default editOptions