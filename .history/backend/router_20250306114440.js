const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users',controller.getUsers)