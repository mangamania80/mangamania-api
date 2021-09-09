const express = require('express');
const router = express.Router()
const { postLogin, postLogout } = require('../controllers/login.controller');

router.post('/', postLogin);
router.post('/logout', postLogout)

module.exports = router;