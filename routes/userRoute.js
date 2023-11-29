const express = require('express')
const userModel=require('../models/userModel')
const { loginController, registerController } = require('../controllers/userController')

//router object 
const router = express.Router()


// post & login
router.post('/login', loginController);

//post & register
router.post('/register', registerController);
module.exports = router;