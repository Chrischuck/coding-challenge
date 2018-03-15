import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import url from 'url'

import pool from '../db'

const PORT = 3000
const app = express()

const toppings = [
  { 
    name: 'Cheese',
    value: 'CHEESE',
    price: 1.25
  },
  {
    name: 'Mushrooms',
    value: 'MUSHRROMS',
    price: 1.25
  },
  {
    name: 'Pepperoni',
    value: 'PEPPERONI',
    price: 1.00
  },
  {
    name: 'Bell Peppers',
    value: 'BELL_PEPPERS',
    price: 2.00
  }
]

const sizes = [
  { 
    name: 'Small',
    value: 'SMALL',
    price: 10.00
  },
  {
    name: 'Medium',
    value: 'MEDIUM',
    price: 12.00
  },
  {
    name: 'Large',
    value: 'LARGE',
    price: 15.00
  }
]


pool.getConnection((err, connection) => {  
  if (err) throw err;

  connection.query('DROP TABLE IF EXISTS `toppings`;', (error, results, fields) => {
    if (error) throw error;
  });

  connection.query('DROP TABLE IF EXISTS `sizes`;', (error, results, fields) => {
    if (error) throw error;
  });

  connection.query('CREATE TABLE `toppings` (`name` VARCHAR(20), `value` VARCHAR(20), `price` DECIMAL(13,2));', (error, results, fields) => {
    if (error) throw error;
  });

  connection.query('CREATE TABLE `sizes` (`name` VARCHAR(20), `value` VARCHAR(20), `price` DECIMAL(13,2));', (error, results, fields) => {
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

  connection.release();
});

app.use(bodyParser.json())
app.use(cors())


app.get('/', (req, res) => res.status(200).send('200 OK'))

// Creating/getting orders
app.get('/order', (req, res) => res.status(200).send('200 OK'))
app.post('/order', (req, res) => res.status(200).send('200 OK'))

// Editing/Making/Getting toppigns
app.get('/toppings', (req, res) => res.status(200).send('200 OK'))
app.post('/toppings', (req, res) => res.status(200).send('200 OK'))

// AUTH for admin
app.post('/login', (req, res) => res.status(200).send('200 OK'))


app.listen(PORT, () => console.log(`Listening at ${PORT}!`))
