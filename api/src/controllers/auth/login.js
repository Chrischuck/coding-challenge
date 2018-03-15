import Promise from 'bluebird'

import pool from '../../db'

const login = async (req, res) => {
  const { username, password } = req.body 

  const data = await pool.getConnectionAsync()
  .then(async (connection) => {  
    Promise.promisifyAll(connection)
    
    const user = await connection.queryAsync(`SELECT * FROM admins where username= "${username}" `)
    .then(res => res)
    .catch(err => {
      throw err
    })
    
    connection.release();

    // Should be comparing hashes
    return {
      isAuthenticated: user[0] ? password === user[0].password : false,
      invalid: user[0] ? password !== user[0].password : true
    }
  })
  .catch(err => {
    throw err
  })

  res.status(200).send(JSON.stringify(data))
}

export default login