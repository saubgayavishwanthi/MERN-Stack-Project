const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users',controller.getUsers);
router.get('/createuser',controller.addUsers);
router.get('/updateuser',controller.updateUsers);
router.get('/deleuser',controller.getUsers);
