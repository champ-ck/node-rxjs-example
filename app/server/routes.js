const express = require('express')
const router = express.Router()
const userController = require('../domain/user/controllers/UserController')

router.get('/test', (req, res) => {
  console.log(req)
  res.json({ test: 'test' })
})

router.get('/user', (req, res) => userController.mGetUser(req, res))
router.post('/user', (req, res) => userController.mCreate(req, res))
router.get('/users', (req, res) => userController.mListUser(req, res))

module.exports = router
