const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users',controller.getUsers);
router.post('/createuser',controller.addUsers);
router.post('/updateuser',controller.updateUsers);
router.post('/deleteuser',controller.deleteUsers);

module.exports = router;
