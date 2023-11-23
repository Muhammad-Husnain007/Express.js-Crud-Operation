const express = require('express');
const router = express.Router();

const userController = require('../controller/UserController.js');

router.post('/controller', userController.add)
router.get('/controller', userController.get)
router.get('/controller/:id', userController.getById)
router.put('/controller/:id', userController.put)
router.delete('/controller/:id', userController.delete)

module.exports = router;