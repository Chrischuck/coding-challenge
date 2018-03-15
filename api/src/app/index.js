import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import url from 'url'

import actions from '../controllers'

import pool from '../db'

const PORT = 3000
const app = express()

const {
  getOptions,
  createOrder,
  editOptions,
  login
} = actions

app.use(bodyParser.json())
app.use(cors())


// Creating/getting orders
app.get('/orders', (req, res) => res.status(200).send('200 OK'))
app.post('/orders', createOrder)

// Editing/Making/Getting toppigns
app.get('/options', getOptions)
app.post('/options', editOptions)

// AUTH for admin
app.post('/login', login)


app.listen(PORT, () => console.log(`Listening at ${PORT}!`))
