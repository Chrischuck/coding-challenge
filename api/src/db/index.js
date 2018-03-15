import mysql from 'mysql'

const pool  = mysql.createPool({
  host     : '127.0.0.1',
  user     : 'user',
  password : 'hunter2',
  database : 'db',
});

export default pool