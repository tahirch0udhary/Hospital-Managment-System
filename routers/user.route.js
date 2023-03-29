const express = require('express')
const router = express.Router()
const { isUser} = require("../middleware/authJwt.midlle")

const fuction = require('../controllers/user.controllers')
router.post('/adduser' , fuction.addInUserTable)
router.get('/signin' , fuction.retriveteUsers)
router.delete('/delete' ,  isUser, fuction.deleteFomUser)

module.exports = router