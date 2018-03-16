import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import actions from '../controllers'

import pool from '../db'

const PORT = 3000
const app = express()

const {
  getOptions, 
  createOrder,
  editOptions,
  createOptions,
  deleteOptions,
  login
} = actions

app.use(bodyParser.json())
app.use(cors())


// Creating/getting orders
app.post('/orders', createOrder)

// Editing/Making/Getting toppigns
app.get('/options', getOptions) // get
app.post('/options/edit', editOptions) // 
app.post('/options/new', createOptions)
app.delete('/options', deleteOptions)

// AUTH for admin
app.post('/login', login)


app.listen(PORT, () => console.log(`Listening at ${PORT}!`))
