const express = require('express');
const AuthController = require('../../controller/auth/auth.controller');

const router = express();

router.post('/', AuthController.login)

module.exports = router;