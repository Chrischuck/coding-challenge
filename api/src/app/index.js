import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import url from 'url'

import actions from '../controllers'

import pool from '../db'

const PORT = 3000
const app = express()

const {
  getOptions
} = actions

app.use(bodyParser.json())
app.use(cors())


app.get('/', (req, res) => res.status(200).send('200 OK'))

// Creating/getting orders
app.get('/order', (req, res) => res.status(200).send('200 OK'))
app.post('/order', (req, res) => res.status(200).send('200 OK'))

// Editing/Making/Getting toppigns
app.get('/options', getOptions)
app.post('/options', (req, res) => res.status(200).send('200 OK'))

// AUTH for admin
app.post('/login', (req, res) => res.status(200).send('200 OK'))


app.listen(PORT, () => console.log(`Listening at ${PORT}!`))
