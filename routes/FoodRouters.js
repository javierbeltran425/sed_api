const express = require('express')
const router = express.Router()

const { register, update, getFood, deleteFood } = require('../controllers/FoodController')

router.get('/', getFood)

router.post('/register', register)

router.put('/update/:id', update)

router.delete('/delete/:id', deleteFood)

module.exports = router