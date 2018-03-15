import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import url from 'url'

const PORT = 3000
const app = express()

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
