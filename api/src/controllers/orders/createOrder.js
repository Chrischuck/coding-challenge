import pool from '../../db'
import Promise from 'bluebird'

const createOrder = async (req, res) => {
  const { size, toppigns } = req.body

  
  res.status(200).send('asdf')
}

export default createOrder