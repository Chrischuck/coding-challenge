import mysql from 'mysql'

import { toppings, sizes, admin } from '../data'

const pool  = mysql.createPool({
  host: '127.0.0.1',
  user: 'user',
  password: 'hunter2',
  database: 'db',
})

// Initialize tables and insert default data
pool.getConnection((err, connection) => {  
  if (err) throw err;

  connection.query('DROP TABLE IF EXISTS `toppings`;', (error, results, fields) => {
    if (error) throw error;
  });

  connection.query('DROP TABLE IF EXISTS `sizes`;', (error, results, fields) => {
    if (error) throw error;
  });

  connection.query('DROP TABLE IF EXISTS `admin`;', (error, results, fields) => {
    if (error) throw error;
  });

  connection.query('CREATE TABLE `toppings` (`name` VARCHAR(20), `value` VARCHAR(20), `price` DECIMAL(13,2));', (error, results, fields) => {
    if (error) throw error;
  });

  connection.query('CREATE TABLE `sizes` (`name` VARCHAR(20), `value` VARCHAR(20), `price` DECIMAL(13,2));', (error, results, fields) => {
    if (error) throw error;
  });

  connection.query('CREATE TABLE `admin` (`username` VARCHAR(20), `password` VARCHAR(20));', (error, results, fields) => {
    if (error) throw error;
  });

  toppings.forEach(topping => {
    const values = `VALUES ('${topping.name}', '${topping.value}', ${topping.price});`
    connection.query('INSERT INTO `toppings` (`name`, `value`, `price`) ' + values, (error, results, fields) => {
      if (error) throw error;
    });
  });

  sizes.forEach(size => {
    const values = `VALUES ('${size.name}', '${size.value}', ${size.price});`
    connection.query('INSERT INTO `sizes` (`name`, `value`, `price`) ' + values, (error, results, fields) => {
      if (error) throw error;
    });
  });

  const adminValues = `VALUES ('${admin.username}', '${admin.password}');`
  connection.query('INSERT INTO `admin` (`username`, `password`) ' + adminValues, (error, results, fields) => {
    if (error) throw error;
  });

  connection.release();
});

export default pool