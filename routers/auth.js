const express = require('express');
const controllers = require('../controllers/auth');
const router = express.Router();

router.get('/login', controllers.login);
router.get('/register', controllers.register);

module.exports = router;