const express = require('express')
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const router = express.Router();

// controladores
const info = require('./controllers/info')
const login = require('./controllers/login')

router.get('/', info.index)
router.post('/validarUsuario', jsonParser, login.login)
router.post('/registrarUsuario', jsonParser, login.registrar)
module.exports = router;