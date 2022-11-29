const express = require('express')
const bodyParser = require('body-parser')
let jsonParser = bodyParser.json();
const router = express.Router();

// controladores
const info = require('./controllers/info')
const login = require('./controllers/login')
const registers = require('./controllers/registers')

router.get('/', info.index)
router.post('/validarUsuario', jsonParser, login.login) //primer parametro es el controlador y segundo la funcion de ese controlador
router.post('/registrarUsuario', jsonParser, registers.registers)
module.exports = router;