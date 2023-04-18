const express = require('express')
const router = express.Router()
const {isDoctor} = require('../midlleWare/authJwt.Md')
const fuction = require('../controllers/crud.controllers')

