const express = require('express');
const { addTransection, getAllTransection } = require('../controllers/transectionCtrl');

//router object 
const router = express.Router()


//routes
//add transection
router.post('/add',addTransection);

//get routes
router.get('/get',getAllTransection);


module.exports = router;