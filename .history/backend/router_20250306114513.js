const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users',controller.getUsers);
router.get('/createuser',controller.addUsers);
router.get('/user',controller.getUsers);
router.get('/users',controller.getUsers);
